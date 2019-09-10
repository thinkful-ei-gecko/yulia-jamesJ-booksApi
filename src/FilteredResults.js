import React from 'react';

export default function FilteredResults(props) {
    return (
        <div>
            <label htmlFor="printType">Print Type</label>
        <select id="printType">
            <option selected>All</option>
            <option>Books</option>
            <option>Magazines</option>
        </select>
        <label htmlFor="bookType">Book Type</label>
        <select id="bookType" defaultValue="free-ebook">
            <option value="no-filter">No Filter</option>
            <option value="ebook">eBook</option>
            <option value="free-ebook">free eBook</option>
        </select>
        </div>
    )
}