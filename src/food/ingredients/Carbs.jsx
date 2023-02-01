import React from 'react'


export default function Carbs(props) {

    const loadIngredientList = () => {
        props.loadIngredientList();
    }

  return (
    <tr>
      <td>
        <p>Carbs</p>
        <input type="number" min='0' className='w-10 rounded-full text-center'/>
      </td>
    </tr>
  )
}