import React from 'react'


export default function Carbs(props) {

  const loadIngredientList = props.ingredients.map((ingr, index) => (
    ingr.category === 'carbs' ? (
      <tr key={index} className='ingredientTable'>
        <td>{ingr.name}</td>
        <td><input type="radio" min='0' name='ingr' className='hover:cursor-pointer'/></td>
      </tr>
    ) : null
  ))

  return (
    <>
      {loadIngredientList}
    </>
  )
}