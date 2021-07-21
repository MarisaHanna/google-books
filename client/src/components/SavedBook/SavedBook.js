import React from 'react'

export default function SavedBook(props) {
    return (
        <div>
            {
                props.books.map((data, index) => {
                    return(
                        <div key={index}>
                          <div>
                          <div className='card'>
                          <div className='card-image'>
                              <img src={data.image} alt={data.title} />
                              </div>
                              <p>{data.title}</p>
                              <p>by: {data.authors}</p>
                              <div className='description'>{data.description}</div>
                              <div>
                                <button type='button' className='buttons' id={data.id} onClick={() => props.deleteBook(data._id)}> Delete</button>
                              </div>
                              <div>
                                <a href={data.link} rel="noopener noreferrer" target='_blank'>
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
            
