import React from 'react'

export default function Cart(props) {

  return (
    <div>
      {props.cart.map((item, index) => (
        <div key={index}>
          <h1>{item.name}</h1>
          <img src={item.imageURL}/>
        </div>
      ))}
    </div>
  )
}
