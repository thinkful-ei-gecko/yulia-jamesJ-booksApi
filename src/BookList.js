import React from 'react';
import BookItem from './BookItem';

export default function BookList(props) {
    const books =  props.results.map( (item, i) => 
    <BookItem {...item} />)

    return (
        <ul>
           {books}
        </ul>
    )
}