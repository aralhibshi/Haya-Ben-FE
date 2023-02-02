import React from 'react'

export default function Fruits(props) {

  const loadIngredientList = props.ingredients.map((ingr, index) => (
    ingr.category === 'fruits' ? (
      <tr key={index}>
        <td>{ingr.name}</td>
        <td><input type="radio" min='0' name="fruit" onChange={()=>props.handleIngrChange('fruit', ingr)}/></td>
      </tr>
    ) : null
  ))

  return (
    <>
      {loadIngredientList}
    </>
  )
}