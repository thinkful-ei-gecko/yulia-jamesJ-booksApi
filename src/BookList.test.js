import React from 'react';
import ReactDOM from 'react-dom';
import BookList from './BookList';

describe('BookList component', () => {
  const items = [{
    id: 1,
    title: "Dendilion Wine",
    author: "Ray Bredberry"
  }, {
    id: 2,
    title: "The best book ever",
    author: "James Jenkins"
  }];
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BookList results={items}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

