import React from 'react'

export default function Results(props) {
    console.log(props)
    return (
        <div>
      {props.books.map((book, index) => {
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
                  id={book.volumeInfo.id}
                  onClick={event => props.savedBooks(event)}>
                  Save
                </button>
                <a href={book.volumeInfo.infoLink} rel='noopener noreferrer' target='_blank'>
                  <button type='button' className='resultsbutton'>
                    More info
                  </button>
                </a>
                <a rel='noopener noreferrer' target='_blank'>
                  <button type='button' className='resultsbutton'>
                    I've read this book!
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
