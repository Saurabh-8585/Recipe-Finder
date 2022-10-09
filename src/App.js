import React, { useState } from 'react'
import RecipeCard from './components/RecipeCard';
import './App.css'
import axios from 'axios';



import Navbar from './components/Navbar';
const App = () => {

  const [query, setQuery] = useState("");


  const [recipes, setRecipes] = useState([])

  const API_KEY = '61eb40c88488a9608a04254d86206eaf';

  const API_ID = 'd1250d01';

  const url = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`;

  async function getRecipe() {
    const result = await axios.get(url);
    setRecipes(result.data.hits);
    console.log(result);
  }

  return (

    <>
      <Navbar setQuery={setQuery} getRecipe={getRecipe} />
      <div className="cont">
        {
          recipes.map((recipe) => {
            return <RecipeCard recipe={recipe}
              recipes={recipes} />
          }
          )}
      </div>

    </>
  )
}

export default App;