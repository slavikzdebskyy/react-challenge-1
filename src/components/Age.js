import React from 'react';

const Age = ({sortByValue}) => (  
  
  <button 
    className="btn btn-primary age" 
    name="age" 
    onClick={() => sortByValue('age', true)}>
      Age
  </button>
)

export default Age;
