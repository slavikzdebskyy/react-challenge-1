import React from 'react';

const RangeForm = ({rangeChange, range}) => (  
  
  <form>
    <div>
      <label>
        <input type="radio" value = 'asc'
                      checked = {range === 'asc'} 
                      onChange = {rangeChange.bind(this)} />
        Sort by ascending
      </label>
    </div>
    <div>
      <label>
        <input type="radio" value = 'des'
                      checked = {range === 'des'} 
                      onChange = {rangeChange.bind(this)} />
        Sort by descending
      </label>
    </div>    
  </form>
)

export default RangeForm;
