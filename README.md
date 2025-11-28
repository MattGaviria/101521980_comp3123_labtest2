# Dragon Ball Z Character API
For this project I used **Dragon Ball API**

## Vercel Link:
https://dbz-explorer.vercel.app/

## Backend hosted at:
https://dbz-backend.onrender.com
<img width="1252" height="408" alt="image" src="https://github.com/user-attachments/assets/9f452c13-cdad-4044-a9e2-4a65c5aa90ac" />


This React + Node.js app allows users to search a Dragon Ball X by name, race, gender and affiliation.

## API USED
**Public API:** [Dragon Ball API](https://www.dragonball-api.com/)
## Api Call Example:
`GET https://dragonball-api.com/api/characters`
## End Points:
-'?name=Bulma'
-'?race=Saiyan'
-'?gender=Male'
-'?affiliation=Villain'

<img width="1871" height="883" alt="image" src="https://github.com/user-attachments/assets/0aa25a5d-0ab9-49d2-82d7-bda3554b92cb" />



## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## How to run Locally
### Backend (Node/Express)
cd server
npm install
node. index.js
### Frontend (React + Vite)
npm install 
npm run dev


### In this project, the front-end never calls the API instead, it calls the back end:
- `GET http://localhost:3000/api/characters?name=Goku&race=Saiyan&gender=Male&affiliation=Z%20Fighter`


## Credit For the API
[Antonio Alvarez Lopez](https://https://github.com/intentodepirata)



Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
