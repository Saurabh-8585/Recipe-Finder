import React, { useState } from 'react'
import './card.css'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

const RecipeCard = ({ recipe, recipes }) => {
    const [ingredients, setShowIngredients] = useState(false);
    const [details, setShowDetails] = useState(false);
    return (
        <>

            <Dialog open={ingredients}>
                <DialogTitle id="alert-dialog-slide-title" className='dialogueTitle'> <h1>Ingredients</h1> </DialogTitle>
                <DialogContent>
                    <h4 style={{
                        textAlign: "center"
                    }}>{recipe.recipe.ingredientLines}</h4>
                </DialogContent>
                <DialogActions style={{
                    display: 'flex',
                    justifyContent: "space-around"
                }}>
                    <button className='ingredients' onClick={() => setShowIngredients(false)} style={{ backgroundColor: "red" }}>Close</button>
                </DialogActions>
            </Dialog>



            <Dialog open={details}>
                <DialogTitle className='dialogueTitle'><h1>Details</h1>  </DialogTitle>
                <DialogContent>
                    <span className='dialogueTitle'>Calories :</span>
                    <span className='dialogueTitle' style={{ textAlign: "center" }}> {recipe.recipe.calories}</span>
                </DialogContent>
                <DialogContent>
                    <span className='dialogueTitle'>Diet :</span>
                    <span className='dialogueTitle' style={{ textAlign: "center" }}> {recipe.recipe.dietLabels}</span>
                </DialogContent>
                <DialogContent>
                    <span className='dialogueTitle'>Dish Type :</span>
                    <span className='dialogueTitle' style={{ textAlign: "center" }}> {recipe.recipe.dishType}</span>
                </DialogContent>
                <DialogContent>
                    <span className='dialogueTitle'>Cuisine :</span>
                    <spam className='dialogueTitle'> {recipe.recipe.cuisineType}</spam>
                </DialogContent>
                <DialogActions style={{ display: 'flex', justifyContent: "space-around" }}>
                    <button className='ingredients' onClick={() => setShowDetails(false)} style={{ backgroundColor: "red" }}>Close</button>
                </DialogActions>
            </Dialog>
            < div className="wrapper" >
                <div className='card'>
                    <div className="border">
                        <img
                            src={recipe.recipe.image}
                            alt="dishImage"
                            className='img-card'
                        />
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                        <h4 className='item-name'>
                            {recipe.recipe.label}
                        </h4>
                        <span className='item-name'>
                            ({recipe.recipe.mealType})
                        </span>
                    </div>
                    {/* <span className='item-name'>
                        {recipe.recipe.cuisineType}
                    </span> */}
                    <div className="btn">
                        <button
                            className='ingredients'
                            onClick={() => {
                                setShowIngredients(true)
                            }}>
                            Ingredients</button>

                        <button
                            className='ingredients'
                            onClick={() => {
                                setShowDetails(true)
                            }}>
                            Details
                        </button>

                    </div>
                    <div className="btn" style={{
                        justifyContent: "center"
                    }}>
                        <button
                            className='ingredients'
                            onClick={() => window.open(recipe.recipe.url)}>
                            Recipe
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecipeCard