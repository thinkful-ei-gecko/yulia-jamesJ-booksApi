import React from 'react'

export default function BookItem(props) {
  
    if (props.isExpanded) {
      return (<li key={props.id} id={props.id} className="bookitem" onClick={(e) => props.handleExpandedView(e)}>
      <img src={props.thumbnail} alt={props.title} />
      <div className='bookitem-container'>
      <h2>{props.title}</h2>
        <p>{props.author}</p>
        <p>Price: {props.price}</p>
        <p>Description: {props.description}</p>
      </div>
    </li>
      ) 
    } else {
      return (<li key={props.id} id={props.id} className="bookitem" onClick={(e) => props.handleExpandedView(e)}> 
      <img src={props.thumbnail} alt={props.title} />
      <div className='bookitem-container'>
      <h2>{props.title}</h2>
      <p>{props.author}</p>
        </div>
        </li>
      )
    }
    

}
