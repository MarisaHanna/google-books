import React, { useState, useEffect } from 'react'
import API from '../utils/API'
import Form from '../components/Form/Form'
import Results from '../components/Results/Results'

export default function SearchBooks() {
    const [query, setQuery] = useState('')
    const [books, setBooks] = useState([])
    const [results, setResults] = useState([])
    

    const handleChange = (e) => {
       setQuery(e.target.value)
    }

    const savedBooks = (e) => {
        e.preventDefault()
        let data = books.filter(book => book.id === e.target.value)
        data = data[0]
        API.saveBook(data)
        .then(alert('Your book has been saved!'))
        .catch(err => console.log(err))
    }


    const myBooks = (e) => {
        e.preventDefault()
        let data = books.filter(book => book.id === e.target.value)
        data = data[0]
        API.saveBook(data)
        .then(alert('You have already read this title!'))
        .catch(err => console.log(err))
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
            handleSearch={handleSearch}/>
               {books.length ? (
                    <div>
                        <h3 className='searchsave'>Your Search Results</h3>
                        <Results books={books} savedBooks={savedBooks} /> 
                    </div>
                ) : (
                    <h3 className='searchsave'>no books have been searched yet!</h3>
                )}
         </div>
     )
             
}
