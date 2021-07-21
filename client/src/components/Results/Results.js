import React from 'react'
import './style.css'

export default function Results(props) {
    console.log(props)
    return (
        <div>
      {props.books.map((book, index) => {
          console.log(book.id)
        return (
          <div key={index}>
            <div className='card'>
              <div className='card-image'>
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
              </div>
              <p>{book.volumeInfo.title}</p>
              <p>by: {book.volumeInfo.authors}</p>
              <div className='content'>{book.volumeInfo.description}</div>
              <div>
                <button
                  type='button'
                  className='resultsbutton'
                  id={book.id}
                  onClick={e => props.savedBooks(e)}>
                  Save
                </button>
                <a href={book.volumeInfo.infoLink} rel='noopener noreferrer' target='_blank'>
                  <button type='button' className='resultsbutton'>
                    More info
                  </button>
                </a>
              </div>
            </div>
          </div>
          
        )
      })}
    </div>
    )
}
