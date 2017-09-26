import React from 'react';

const Filter = (props) => {
  
  const filters = props.filters.map(filter => <option key={filter}>{filter}</option>) 

  return (
    <select onChange={props.filterInputChange}>
      {filters}
    </select>
  )
}

export default Filter;