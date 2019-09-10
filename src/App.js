import React, {Component} from 'react';
import './App.css';
import SearchTerm from './SearchTerm';
import FilteredResult from './FilteredResults';
import BookList from './BookList';

class App extends Component {
  state = {
    searchTerm: "",
    printType: "books",
    bookType: "full",
    items: [{
      id: 1,
      title: "Dendilion Wine",
      author: "Ray Bredberry"
    }, {
      id: 2,
      title: "The best book ever",
      author: "James Jenkins"
    }]
  }
  fetchResults = (query = 'Yulia', filter = 'full', printType = 'books') => {
    let paramsObject = {
      q: query,
      filter,
      printType
    }
    let paramString = ''
    Object.keys(paramsObject)
    .forEach(key => paramString += `${key}=${paramsObject[key]}&`)
    console.log('url param are:', paramString)
    fetch(`https://www.googleapis.com/books/v1/volumes/?${paramString}`)
    .then(res => res.json())
    .then(resJSON => 
      {console.log(resJSON);
        let {items} = resJSON;
        let itemsArray = items.map((item) => (
      {
        id: item.id,
        title: item.volumeInfo.title,
        author: item.volumeInfo.authors,
        description: item.volumeInfo.description ? item.volumeInfo.description : "Description is not available",
        price: item.saleInfo.listPrice ? item.saleInfo.listPrice.amount : "Price is not available"
      }
      ))
      console.log(itemsArray);
      this.setState({
        items: itemsArray,
      })
    });
      
    
  }
  componentDidMount(){
    this.fetchResults()
  }

  handleForm = (e) => {
    e.preventDefault();
    let value = e.target.search.value
    this.setState({
      searchTerm: value,

    })
    console.log(e.target.search.value);
    this.fetchResults(value, this.state.bookType, this.state.printType)
  }

  handleFilterBookType =(type) => {
    console.log("booktype changed", type)
  }

  handleFilterPrint =(type) => {
    console.log("printtype changed", type)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
        </header>
        <SearchTerm
        onSubmit={(e) => this.handleForm(e)}
        />
        <FilteredResult handleFilterBookType={(type) =>this.handleFilterBookType(type)}
        handleFilterPrint = {(type) => this.handleFilterPrint(type)}
        />
        <BookList results={this.state.items}/>
      </div>
    );
  }
 
}

export default App;
