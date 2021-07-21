import React from 'react'
import './style.css'

export default function SavedBook(props) {
    return (
           <div className='card'>
              <div className='card-image'>
                  <img src={props.data.image} alt={props.data.title} />
                  </div>
                  <p>{props.data.title}</p>
                  <p>by: {props.data.authors}</p>
                  <div className='description'>{props.data.description}</div>
                  <div>
                    <button type='button' className='buttons' id={props.data.id} onClick={() => props.deleteBook(props.data._id)}> Delete</button>
                  </div>
                  <div>
                    <a href={props.data.link} rel="noopener noreferrer" target='_blank'>
                      <button type='button' className='buttons'>Google Book</button>
                  </a>
              </div>
          </div>
      )
}
            
