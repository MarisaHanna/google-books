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
           {data.length ? (
            <div>
             <h1 className='saved'>Saved Books</h1>
            <SavedBook data={data} deleteBook={deleteBook} />
              </div>
           ) : (
            <h2 className='saved'>Sorry! No Saved Books Yet! </h2>
           )
          }
       </Wrapper>
    )
}

