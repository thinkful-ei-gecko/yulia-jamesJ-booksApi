import React from 'react';

export default function FilteredResults(props) {
    return (
        <div>
            <label htmlFor="printType">Print Type</label>
        <select id="printType" defaultValue='all' onChange={(e) => props.handleFilterPrint(e.target.value)}>
            <option value='all'>All</option>
            <option value='books'>Books</option>
            <option value='magazines'>Magazines</option>
        </select>
        <label htmlFor="bookType">Book Type</label>
        <select id="bookType" defaultValue="free-ebook" onChange={(e) => props.handleFilterBookType(e.target.value)}>
            <option value="no-filter">No Filter</option>
            <option value="ebook">eBook</option>
            <option value="free-ebook">free eBook</option>
        </select>
        </div>
    )
}