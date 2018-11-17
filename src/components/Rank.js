import React from 'react';

const Rank = ({sortByValue}) => (
  <button 
    className="btn btn-primary rank" 
    name="rank" 
    onClick={() => sortByValue('rank')}>
      Rank
  </button>
);

export default Rank;
