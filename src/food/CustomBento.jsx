import React from 'react'
import {Link, Outlet} from 'react-router-dom'

export default function CustomBento(props) {

  // Filter and Render Ingredient Category Components

  return (
    <div>
      <div className='bg-slate-400 bg-opacity-80 text-center text-4xl py-5'>
        <h1>Custom Bento</h1>
      </div>

      <div className='flex flex-row justify-center items-center bg-slate-300 m-auto my-5 bentoBoxDiv'>
        <div className='flex flex-row w-full h-full items-center text-2xl bentoBox1'>
          <div className='flex flex-col items-center ingredientLeftDiv'>
            {/* Fruits and Pickles (Left Top Div) */}
            {props.ingredients.length > 0 ? (
              <div className='leftTop'>
                <img src={props.ingredients[1].imageURL} alt="Ingredient" className='ingredient'/>
                <img src={props.ingredients[1].imageURL} alt="Ingredient" className='ingredient'/>
              </div>
            ): null}

            {/* Protein (Left Bottom Div) */}
            {props.ingredients.length > 0 ? (
              <div className='leftMiddle'>
                <img src='/images/ingredients/salmon.png' alt="Ingredient" className='ingredientMiddle'/>
                <img src='/images/ingredients/salmon.png' alt="Ingredient" className='ingredientMiddle'/>
              </div>
            ): null}

            {/* Vegetables and Salads (Left Middle Div) */}
            {props.ingredients.length > 0 ? (
              <div className='leftBottom'>
                <img src={props.ingredients[0].imageURL} alt="Ingredient" className='ingredient'/>
                <img src={props.ingredients[0].imageURL} alt="Ingredient" className='ingredient'/>
              </div>
            ): null}
          </div>

          {/* Carbs (Right Div) */}
          {props.ingredients.length > 0 ? (
            <div className='flex justify-center items-center ingredientRightDiv'>
              <img src={props.ingredients[2].imageURL} alt="Ingredient" className='ingredientCarb'/>
            </div>
          ): null}
        </div>


        <div className='h-full bg-green-400 text-center p-5 ingredientsDiv'>
          <h1 className='text-2xl pb-5'>Ingredients</h1>

          <nav>
            <div className='flex flex-row justify-evenly items-center bg-slate-300 rounded-3xl navBarIngredients'>
              <div>
                <Link to='carbs' className='text-xl'>Carbs</Link>
              </div>

              <div>
                <Link to='protein' className='text-xl'>Protein</Link>
              </div>

              <div>
              <Link to='fruits' className='text-xl'>Fruits</Link>
              </div>

              <div>
              <Link to='vegetables' className='text-xl'>Vegetables</Link>
              </div>
            </div>
          </nav>

          <div className='text-xl pt-5'>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Amount</th>
                </tr>
              </thead>

              <Outlet/>
          
            </table>
            {/* <Outlet/> */}
          </div>
        
        </div>
      </div>
    </div>
  )
}