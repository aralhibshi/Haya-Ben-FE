import React from 'react'
import {Link, Outlet} from 'react-router-dom'

export default function CustomBento(props) {

  // Filter and Render Ingredient Category Components

  return (
    <div>
      <div className='text-center text-4xl py-5 headerTitles'>
        <h1>Custom Bento</h1>
      </div>

      <div className='flex flex-row justify-center items-center bg-indigo-900 bg-opacity-90 m-auto my-5 bentoBoxDiv'>
        <div className='flex flex-row w-full h-full items-center text-2xl bentoBox1'>
          <div className='flex flex-col items-center ingredientLeftDiv'>
            {/* Fruits and Pickles (Left Top Div) */}
            {props.ingredients.length > 0 && props.customIngr.fruit ? (
              <div className='leftTop'>
                <img src={props.customIngr.fruit.imageURL} alt="Ingredient" className='ingredient'/>
                <img src={props.customIngr.fruit.imageURL} alt="Ingredient" className='ingredient'/>
              </div>
            ): <div className='leftTop'></div>}

            {/* Protein (Left Bottom Div) */}
            {props.ingredients.length > 0 && props.customIngr.protein ? (
              <div className='leftMiddle'>
                <img src={props.customIngr.protein.imageURL} alt="Ingredient" className='ingredientMiddle'/>
                <img src={props.customIngr.protein.imageURL} alt="Ingredient" className='ingredientMiddle'/>
              </div>
            ): <div className='leftMiddle'></div>}

            {/* Vegetables and Salads (Left Middle Div) */}
            {props.ingredients.length > 0 && props.customIngr.veg ? (
              <div className='leftBottom'>
                <img src={props.customIngr.veg.imageURL} alt="Ingredient" className='ingredient'/>
                <img src={props.customIngr.veg.imageURL} alt="Ingredient" className='ingredient'/>
              </div>
            ): <div className='leftBottom'></div>}
          </div>

          {/* Carbs (Right Div) */}
          {props.ingredients.length > 0 && props.customIngr.carb ? (
            <div className='flex justify-center items-center ingredientRightDiv'>
              <img src={props.customIngr.carb.imageURL} alt="Carb" className='ingredientCarb'/>
            </div>
          ): <div className='flex justify-center items-center ingredientRightDiv'></div>}
        </div>


        <div className='h-full text-center ingredientsDiv'>
          <h1 className='text-3xl pb-5'>Ingredients</h1>

          <nav>
            <div className='flex flex-row justify-evenly items-center py-2 categoryNav'>
              <div>
                <Link to='carbs' className='text-xl rounded-xl hover:underline'>Carbs</Link>
              </div>

              <div>
                <Link to='protein' className='text-xl hover:underline'>Protein</Link>
              </div>

              <div>
              <Link to='fruits' className='text-xl hover:underline'>Fruits</Link>
              </div>

              <div>
              <Link to='vegetables' className='text-xl hover:underline'>Vegetables</Link>
              </div>
            </div>
          </nav>

          <div className='flex justify-center ingredientSelector'>
            <table>
              <thead className='text-2xl'>
                <tr>
                  <th>Name</th>
                  <th>Select</th>
                </tr>
              </thead>

              <tbody className='text-xl'>
                <Outlet/>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  )
}