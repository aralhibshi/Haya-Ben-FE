import React from 'react'

export default function Protein(props) {

  const loadIngredientList = props.ingredients.map((ingr, index) => (
    ingr.category === 'protein' ? (
      <tr key={index}>
        <td>{ingr.name}</td>
        <td><input type="radio" min='0'/></td>
      </tr>
    ) : null
  ))

  return (
    <>
      {loadIngredientList}
    </>
  )
}