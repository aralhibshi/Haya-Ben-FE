import React from 'react'

export default function Fruits(props) {

  const loadIngredientList = props.ingredients.map((ingr, index) => (
    ingr.category === 'fruits' ? (
      <tr key={index}>
      <td>{ingr.name}</td>
      <td><input type="number" min='0' className='w-10 rounded-full text-center'/></td>
    </tr>
    ) : null
  ))
  
  return (
    <tbody>
      {loadIngredientList}
    </tbody>
  )
}