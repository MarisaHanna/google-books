import React, { useState, useEffect } from 'react'
import SavedBook from '../components/SavedBook/SavedBook'
import Wrapper from '../components/Wrapper/Wrapper'
import API from '../utils/API'

export default function SavedBooks() {

    const [data, setData] = useState([])


    useEffect(() => {
      loadBooks()
}, [])


    const loadBooks = () => {
        API.getBooks()
        .then((res) => {
            setData(res.data)
            

        }).catch((err) => console.log(err))
    }

    const deleteBook = (id) => {
       API.deleteBook(id)
       .then(res => loadBooks())
       .catch((err) => console.log(err))
   
    }

    return (
       <Wrapper>
           <h3>Saved Books</h3>
           {data ? 
           data.map((book) => (
               
               <div>
                <SavedBook key={book.id}
                data={book} 
                deleteBook={deleteBook} 
                />
               </div>
              )) : (
               <h2 className='saved'>Sorry! No Saved Books Yet! </h2>
              )}
         </Wrapper>
    
    )
}

