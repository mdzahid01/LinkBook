import { useState } from 'react'

const SearchBar = ({searchValue,setSearchValue}) => {

  return (
    <input type="text"
    name = 'search'
    value={searchValue}
    className='search-bar'
    placeholder='🔍 Name,Email or Phone'  
    onChange={(e)=>setSearchValue(e.target.value)} />
  )
}

export default SearchBar