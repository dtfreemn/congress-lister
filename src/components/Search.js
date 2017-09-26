import React from 'react'

const Search = (props) => {
  
  // we are going to need to pass this form a function
  // the purpose of this function is to capture the value of the form 
  // we then send this info back to the container to change the state based on the value in the form
  const handleKeyUp = (event) => {
    props.searchInputChange(event)
  }

  return(
  <div>
      <input onKeyUp={handleKeyUp}>
      </input>
    </div>
    )
}

export default Search