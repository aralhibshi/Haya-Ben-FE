import React from 'react'

export default function Protein(props) {

  const loadIngredientList = props.ingredients.map((ingr, index) => (
    ingr.category === 'protein' ? (
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
