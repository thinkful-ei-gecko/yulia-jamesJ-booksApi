import React, { Component } from 'react'
import './App.css'
import SearchTerm from './SearchTerm'
import FilteredResult from './FilteredResults'
import BookList from './BookList'

class App extends Component {
  state = {
    searchTerm: 'yulia',
    printType: 'all',
    bookType: 'ebooks',
    items: [],
  }
  fetchResults = (query, filter, printType) => {
    let paramsObject = {
      q: query,
      filter,
      printType,
    }
    let paramString = ''
    Object.keys(paramsObject).forEach(
      key => (paramString += `${key}=${paramsObject[key]}&`)
    )
    console.log('url param are:', paramString)
    fetch(`https://www.googleapis.com/books/v1/volumes/?${paramString}`)
      .then(res => {
        if(res.ok) {
          return res.json()
        }
        console.log(res)
        throw new Error(res.status + ' please check search options and try again')
      })
      .then(resJSON => {
        if(resJSON.totalItems === 0) {
          throw new Error('No results found - please check search options and try again')
        }
        console.log(resJSON)
        let { items } = resJSON
        let itemsArray = items.map(item => ({
          id: item.id,
          title: item.volumeInfo.title,
          author: item.volumeInfo.authors,
          description: item.volumeInfo.description
            ? item.volumeInfo.description
            : 'Description is not available',
          price: item.saleInfo.listPrice
            ? `$${item.saleInfo.listPrice.amount}`
            : 'Price is not available',
          thumbnail: item.volumeInfo.imageLinks
          ? item.volumeInfo.imageLinks.thumbnail
          : 'https://via.placeholder.com/128x182',
          isExpanded: false
        }))
        this.setState({
          items: itemsArray,
        })
      })
      .catch(err => console.log(err))
  }
  componentDidMount() {
    this.fetchResults(
      this.state.searchTerm,
      this.state.bookType,
      this.state.printType
    )
  }

  handleForm = e => {
    e.preventDefault()
    let value = e.target.search.value
    this.setState({
      searchTerm: value,
    })
    console.log(e.target.search.value)
    this.fetchResults(value, this.state.bookType, this.state.printType)
  }

  handleFilterBookType = type => {
    console.log('booktype changed', type)
    this.setState({
      bookType: type,
    })
    this.fetchResults(this.state.searchTerm, type, this.state.printType)
  }

  handleFilterPrint = type => {
    console.log('printtype changed', type)
    this.setState({
      printType: type,
    })
    this.fetchResults(this.state.searchTerm, this.state.bookType, type)
  }
  handleToggleExpanded = (obj) => {
    console.log(obj)
    return obj.isExpanded = !obj.isExpanded;
    console.log(obj)
  }
  handleExpandedView = e => {
    const itemId = e.currentTarget.id;
    let filtered = this.state.items.filter( item => item.id === itemId);
    let newState = this.state.items.filter( item => item.id !== itemId)
    newState.push({...filtered[0], isExpanded: this.handleToggleExpanded(filtered[0])});
    this.setState({
      items: newState
    })
    console.log(newState);

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
        </header>
        <SearchTerm onSubmit={e => this.handleForm(e)} />
        <FilteredResult
          handleFilterBookType={type => this.handleFilterBookType(type)}
          handleFilterPrint={type => this.handleFilterPrint(type)}
        />
        <BookList results={this.state.items}
        handleExpandedView={(e)=>this.handleExpandedView(e)}
        />
      </div>
    )
  }
}

export default App
