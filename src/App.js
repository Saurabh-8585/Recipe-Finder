import React, { useState } from 'react'
import Navbar from './components/Navbar';
import './App.css'
import RecipeCard from './components/RecipeCard';
import axios from 'axios';


const App = () => {

  const [timeOutId, setTimeOutId] = useState("");

  const [recipes, setRecipes] = useState([])

  const API_KEY = '61eb40c88488a9608a04254d86206eaf';

  const API_ID = 'd1250d01';

  
  const getRecipe = async (searchString) => {
    const result = await axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${API_ID}&app_key=${API_KEY}`);
    setRecipes(result.data.hits);
  }

  const onTextChange = (e) => {
    clearTimeout(timeOutId)
    const timeOut = setTimeout(() => getRecipe(e.target.value), 500)
    setTimeOutId(timeOut);

  }

  return (

    <>
      <Navbar onTextChange={onTextChange} />
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