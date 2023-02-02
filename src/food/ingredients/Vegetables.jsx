import React from 'react'

export default function Vegetables(props) {

  const loadIngredientList = props.ingredients.map((ingr, index) => (
    ingr.category === 'vegetables' ? (
      <tr key={index}>
        <td>{ingr.name}</td>
        <td><input type="radio" min='0' name="veg" onChange={()=>props.handleIngrChange('veg', ingr)}/></td>
      </tr>
    ) : null
  ))

  return (
    <>
      {loadIngredientList}
    </>
  )
}