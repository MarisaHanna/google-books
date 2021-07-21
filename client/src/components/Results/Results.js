import React from 'react'
import './style.css'

export default function Results(props) {
    console.log(props)
    return (
       
          <div >
            <div className='card'>
              <div className='card-image'>
                <img src={props.data.imageLinks.thumbnail} alt={props.data.title} />
              </div>
              <p>{props.data.title}</p>
              <p>by: {props.data.authors}</p>
              <div className='content'>{props.data.description}</div>
              <div>
                <button
                  type='button'
                  className='resultsbutton'
                  id={props.data.id}
                  onClick={() => props.savedBooks(props.data)}>
                  Save
                </button>
                <a href={props.data.infoLink} rel='noopener noreferrer' target='_blank'>
                  <button type='button' className='resultsbutton'>
                    More info
                  </button>
                </a>
              </div>
            </div>
          </div> 
     )
}
