import React from 'react'

export default function Form(props) {
    return (
        <div>
        <form className='form'>
          <div>
            <input
              onChange={props.handleChange}
              value={props.search}
              name='search'
              type='text'
              className='input'
              placeholder='Search for your favorite book, author...'
              id='search'
            />
            <button onClick={props.handleSearch} className='search-button'>
              Search
            </button>
          </div>
        </form>
      </div>
    )
}
