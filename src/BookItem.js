import React from 'react'

export default function BookItem(props) {
  return (
    <li key={props.id} className="bookitem">
      <img src={props.thumbnail} alt={props.title} />
      <div className='bookitem-container'>
      <h2>{props.title}</h2>
        <p>{props.author}</p>
        <p>Price: {props.price}</p>
        <p>Description: {props.description}</p>
      </div>
    </li>
  )
}
