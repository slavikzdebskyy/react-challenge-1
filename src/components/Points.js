import React from 'react';

const Points = ({sortByValue}) => (
  <button 
    className="btn btn-primary points" 
    name="points" 
    onClick={() => sortByValue('points')}>
      Points
  </button>
);

export default Points;
