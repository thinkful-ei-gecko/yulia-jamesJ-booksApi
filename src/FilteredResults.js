import React from 'react'

export default function FilteredResults(props) {
  return (
    <div>
      <label htmlFor="printType">Print Type</label>
      <select
        id="printType"
        defaultValue="all"
        onChange={e => props.handleFilterPrint(e.target.value)}
      >
        <option value="all">All</option>
        <option value="books">Books</option>
        <option value="magazines">Magazines</option>
      </select>
      <label htmlFor="bookType">Book Type</label>
      <select
        id="bookType"
        defaultValue="ebooks"
        onChange={e => props.handleFilterBookType(e.target.value)}
      >
        <option value="ebooks">All</option>
        <option value="free-ebooks">Free eBooks</option>
        <option value="full">Full Volume</option>
        <option value="paid-ebooks">Paid eBooks</option>
        <option value="partial">Partial View</option>
      </select>
    </div>
  )
}
