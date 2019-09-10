import React from 'react';

export default function BookItem(props) {
  return (
    <li key={props.id}>
    <h2>{props.title}</h2>
    <p>{props.author}</p>
    </li>
  )
}