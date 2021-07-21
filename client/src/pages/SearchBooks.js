import React, { useState, useEffect } from 'react'
import API from '../utils/API'
import Form from '../components/Form/Form'
import Results from '../components/Results/Results'
import './style.css'

export default function SearchBooks() {
    const [query, setQuery] = useState('')
    const [books, setBooks] = useState([])
    const [results, setResults] = useState([])
    const [data, setData] = useState({})
    

    const handleChange = (e) => {
       setQuery(e.target.value)
    }

    const savedBooks = (book) => {
        if (book.title) {
            API.saveBook(
                {
                    title: book.title,
                    subtitle: book.subtitle,
                    authors: book.authors,
                    description: book.description,
                    image: book.imageLinks.thumbnail,
                    link: book.infoLink
                }
            )
            .then(alert('Your book has been saved!'))
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }
   
    }




    const handleSearch = (e) => {
        e.preventDefault()

        API.searchBook(query)
        .then((res) => {
            console.log(res.data.items)
            setResults(res.data.items)
        }).catch(err => console.log(err))
}



console.log(results)
    useEffect(() => {
        setBooks(results)
        console.log(books)
    })
    

    return (
        <div>
            <Form handleChange={handleChange} 
            handleSearch={handleSearch}
            />
            {/* <h3 className='searchsave'>Your Search Results</h3> */}
               {books ? 
                books.map((book) => (
                 <div>
                    <Results key={book.id } data={book.volumeInfo} savedBooks={savedBooks}  /> 
                </div>
               
                ) ): (
                    <h3 className='searchsave'>Sorry, no books have been searched yet!</h3>
                )}
               
         </div>
    )
             
}
