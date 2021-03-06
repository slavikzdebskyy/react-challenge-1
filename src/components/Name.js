import React from 'react';

const Name = ({sortByValue}) => (
  <button 
    className="btn btn-primary name" 
    name="name" 
    onClick={() => sortByValue('name')}>
      Name
  </button>
);

export default Name;
