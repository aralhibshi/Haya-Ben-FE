import React from 'react'


export default function Carbs(props) {

  

  const loadIngredientList = props.ingredients.map((ingr, index) => (
    ingr.category === 'carbs' ? (
      <tr key={index}>
        <td>{ingr.name}</td>
        <td>
          <input type="radio" min='0' name='carb' onChange={()=>props.handleIngrChange('carb', ingr)}/>
        </td>
      </tr>
    ) : null
  ))

  return (
    <>
      {loadIngredientList}
    </>
  )
}