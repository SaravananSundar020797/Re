import React from 'react'
import './searchItem.css'

const SearchItem = ({newSearch,setNewSearch}) => {
  return (
    <form className="searchItems" onSubmit={(e) => e.preventDefault()}>

      <input type="text" placeholder='Searching ...' value = {newSearch}  onChange={(e) => setNewSearch(e.target.value)} />

    </form>
  )
}

export default SearchItem