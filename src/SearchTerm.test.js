import React from 'react';
import ReactDOM from 'react-dom';
import SearchTerm from './SearchTerm';

describe('SearchTerm component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchTerm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

