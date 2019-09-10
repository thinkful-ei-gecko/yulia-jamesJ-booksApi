import React from 'react';

export default function SearchTerm(props) {
    return (
        <form onSubmit={(e) => props.onSubmit(e)}>
            <label htmlFor="searchTerm">Search
                <input id="searchTerm" name="search" />
            </label>
            <button type="submit">Search</button>
        </form>
    )
}