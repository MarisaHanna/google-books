import React from 'react'
import './style.css'

export default function SavedBook(props) {
    return (
        <div>
            {
                props.data.map((data, index) => {
                    return(
                        <div key={index}>
                          <div>
                          <div className='card'>
                          <div className='card-image'>
                              <img src={data.volumeInfo.image} alt={data.volumeInfo.title} />
                              </div>
                              <p>{data.volumeInfo.title}</p>
                              <p>by: {data.volumeInfo.authors}</p>
                              <div className='description'>{data.volumeInfo.description}</div>
                              <div>
                                <button type='button' className='buttons' id={data.id} onClick={() => props.deleteBook(data._id)}> Delete</button>
                              </div>
                              <div>
                                <a href={data.volumeInfo.link} rel="noopener noreferrer" target='_blank'>
                                  <button type='button' className='buttons'>Google Book</button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                 )
             })}
         </div>
    )
 }
            
