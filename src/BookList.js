import React from 'react';
import BookItem from './BookItem';

export default function BookList(props) {
    const books =  props.results.map( (item, i) => 
    <BookItem key={item.id} {...item} handleExpandedView={props.handleExpandedView}/>)

    return (
        <ul className='booklist'>
           {books}
        </ul>
    )
}