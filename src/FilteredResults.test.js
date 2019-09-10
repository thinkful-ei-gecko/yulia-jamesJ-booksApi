import React from 'react';
import ReactDOM from 'react-dom';
import FilteredResults from './FilteredResults';

describe('FilteredResults component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FilteredResults />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

