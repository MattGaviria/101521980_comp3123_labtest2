const express = require("express");
const cors = require("cors");
const axios = require("axios");

// create express app
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/api/characters", async (req, res) => {
    try {
        const { name, race, gender, affiliation, page = 1 } = req.query;
        const params = {};

        if (name) params.name = name;
        if (race) params.race = race;
        if (gender) params.gender = gender;
        if (affiliation) params.affiliation = affiliation;

        if (!name && !race && !gender && !affiliation) {
        params.page = page;
        params.limit = 14;
        }

        const response = await axios.get(
        "https://dragonball-api.com/api/characters",
        { params }
        );

        const data = response.data;

        let items;
        let meta = null;

        if (Array.isArray(data)) {
        items = data;
        } else {
        items = data.items || [];
        meta = data.meta || null;
        }

        res.json({ items, meta });
    } catch (error) {
        console.error("Error fetching characters:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

});
