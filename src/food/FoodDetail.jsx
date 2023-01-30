import React from 'react'

export default function FoodDetail(props) {

  return (
    <div>
        <h1>Hello {props.name}</h1>
        <img src={props.imageURL} alt="Bento IMG" width='200px'/>
    </div>
  )
}