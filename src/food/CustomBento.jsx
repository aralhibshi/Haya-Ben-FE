import React, {useState, useEffect} from 'react'
import Axios  from 'axios';

export default function CustomBento() {

  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    loadIngredientList();
  }, [])

  const loadIngredientList = () => {
    Axios.get('ingredient/index')
    .then(res => {
      setIngredients(res.data.ingredients)
      // console.log("the ingredient is" + res.data.ingredients[0])
    })
    .catch(err => {
      console.log("Cannot Get Inredient Index")
      console.log(err)
    })
  }

  return (
    <div>
      <div className='bg-slate-400 bg-opacity-95 text-center text-4xl py-5'>
        <h1>Custom Bento</h1>
      </div>

      <div className='flex flex-row justify-center items-center bg-slate-300 m-auto my-5 bentoBoxDiv'>
        <div className='flex flex-row w-full h-full items-center text-2xl bentoBox1'>
          <div className='flex flex-col items-center ingredientLeftDiv'>
            {/* Fruits and Pickles (Left Top Div) */}
            {ingredients.length > 0 ? (
              <div className='leftTop'>
                <img src={ingredients[1].imageURL} alt="Ingredient" className='ingredient'/>
                <img src={ingredients[1].imageURL} alt="Ingredient" className='ingredient'/>
              </div>
            ): null}

            {/* Protein (Left Bottom Div) */}
            {ingredients.length > 0 ? (
              <div className='leftMiddle'>
                <img src='images/ingredients/salmon.png' alt="Ingredient" className='ingredientMiddle'/>
                <img src='images/ingredients/salmon.png' alt="Ingredient" className='ingredientMiddle'/>
              </div>
            ): null}

            {/* Vegetables and Salads (Left Middle Div) */}
            {ingredients.length > 0 ? (
              <div className='leftBottom'>
                <img src={ingredients[0].imageURL} alt="Ingredient" className='ingredient'/>
                <img src={ingredients[0].imageURL} alt="Ingredient" className='ingredient'/>
              </div>
            ): null}
          </div>

          {/* Carbs (Right Div) */}
          {ingredients.length > 0 ? (
            <div className='flex justify-center items-center ingredientRightDiv'>
              <img src='images/ingredients/white-rice.png' alt="Ingredient" className='ingredientCarb'/>
            </div>
          ): null}
        </div>


        <div className='h-full bg-green-400 text-center p-5 ingredientsDiv'>
          <h1 className='text-2xl pb-5'>Ingredients</h1>

          <div className='flex flex-row justify-evenly text-xl'>
            <h1>Name</h1>
            <h1>Amount</h1>
          </div>

          <div className='flex flex-row justify-evenly'>
            <p>Ingredient 1</p>

            <div className='flex justify-center items-center'>
              {/* <img src="/images/icons/minus-circle.png" alt="Minus" id='menuItemIcon'/> */}
              <input type="number" min='0' className='w-10 rounded-full text-center'/>
              {/* <img src="/images/icons/plus-circle.png" alt="Plus" id='menuItemIcon'/> */}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
