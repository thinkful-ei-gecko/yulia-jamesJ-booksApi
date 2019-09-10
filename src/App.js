import React, {Component} from 'react';
import './App.css';
import SearchTerm from './SearchTerm';
import FilteredResult from './FilteredResults';
import BookList from './BookList';

class App extends Component {
  state = {
    searchTerm: "",
    printType: "All",
    bookType: "",
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
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
        </header>
        <SearchTerm />
        <FilteredResult />
        <BookList results={this.state.items}/>
      </div>
    );
  }
 
}

export default App;
