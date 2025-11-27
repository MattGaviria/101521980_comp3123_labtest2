import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import dbimage from "./assets/db.png"
import "./App.css";


function toTitleCase(str) {
  return str
    .split(" ")
    .filter(Boolean)
    .map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ");
}

const initialFilters = {
  name: "",
  gender: "",
  race: "",
  affiliation: "",
};

function App() {
  const [filters, setFilters] = useState(initialFilters);
  const [activeFilters, setActiveFilters] = useState(initialFilters);

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCharacters() {
      try {
        setLoading(true);
        setError("");

        const params = new URLSearchParams();

        if (activeFilters.name.trim()) {
          params.append("name", toTitleCase(activeFilters.name.trim()));
        }
        if (activeFilters.gender) {
          params.append("gender", activeFilters.gender);
        }
        if (activeFilters.race) {
          params.append("race", activeFilters.race);
        }
        if (activeFilters.affiliation) {
          params.append("affiliation", activeFilters.affiliation);
        }

        const queryString = params.toString();
        const url = queryString
          ? `http://localhost:3000/api/characters?${queryString}`
          : "http://localhost:3000/api/characters";

        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("Failed to fetch characters");
        }

        const data = await res.json();
        setCharacters(data.items || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCharacters();
  }, [activeFilters]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setActiveFilters(filters);
  }

  function handleClear() {
    setFilters(initialFilters);
    setActiveFilters(initialFilters);
  }

  return (
    <div className="app">
      <header className="header">
        <div className="title-row">  
          
            <img src={dbimage} alt={"dragonball"} />
            <h1 className="logo"> Dragon Ball Z Characters
          </h1>
        </div>
        <p>Find characters by name, race, gender, and affiliation.</p>
        <p className="student-id"> By: MattGaviria Student ID: 101521980</p>
      </header>

      <main>
        <form className="search-form vertical" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Name
              <input
                type="text"
                name="name"
                placeholder="Enter a character name"
                value={filters.name}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              Gender
              <select
                name="gender"
                value={filters.gender}
                onChange={handleChange}
              >
                <option value="">Any</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Unknown">Unknown</option>
              </select>
            </label>

            <label>
              Race
              <select
                name="race"
                value={filters.race}
                onChange={handleChange}
              >
                <option value="">Any</option>
                <option value="Human">Human</option>
                <option value="Saiyan">Saiyan</option>
                <option value="Namekian">Namekian</option>
                <option value="Majin">Majin</option>
                <option value="Frieza Race">Frieza Race</option>
                <option value="Android">Android</option>
                <option value="God">God</option>
                <option value="Angel">Angel</option>
                <option value="Unknown">Unknown</option>
              </select>
            </label>

            <label>
              Affiliation
              <select
                name="affiliation"
                value={filters.affiliation}
                onChange={handleChange}
              >
                <option value="">Any</option>
                <option value="Z Fighter">Z Fighter</option>
                <option value="Red Ribbon Army">Red Ribbon Army</option>
                <option value="Freelancer">Freelancer</option>
                <option value="Army of Frieza">Army of Frieza</option>
                <option value="Pride Troopers">Pride Troopers</option>
                <option value="Villain">Villain</option>
                <option value="Other">Other</option>
              </select>
            </label>
          </div>

          <div className="form-row buttons">
            <button type="submit">Search</button>
            <button type="button" onClick={handleClear}>
              Clear
            </button>
          </div>
        </form>

        {loading && (
          <p className="status">Charging ki... Loading characters...</p>
        )}
        {error && <p className="status error">Error: {error}</p>}
        {!loading && !error && characters.length === 0 && (
          <p className="status">No characters found. Try different filters.</p>
        )}

        <div className="grid">
          {characters.map((c) => (
            <CharacterCard key={c.id} character={c} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
