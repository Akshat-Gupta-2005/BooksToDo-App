import React from 'react'
import CardContainer from '../components/CardContainerAdd'
import './searchPage.css'
import { useState } from 'react'
import apiFetch from '../controllers/apiFetch'

const SearchPage = () => {
    const [text, setText] = useState('');
    const [books, setBooks] = useState();

    const searchResults = async () => {
        // console.log(`https://www.googleapis.com/books/v1/volumes?q=` + text.replace(' ' , '+') + `&key=AIzaSyBX2Err3hD3JST_XmxqpJ5anLA-9VC2nZ8`);
        const articles = await apiFetch(`https://www.googleapis.com/books/v1/volumes?q=` + text.replace(' ' , '+') + `&key=AIzaSyBX2Err3hD3JST_XmxqpJ5anLA-9VC2nZ8`)
        await setBooks(articles)
        // .then((data) => {
        //     console.log(data)
        //     // setBooks(data.items)
        // })
        await console.log(books)
    }
    // const books=[]

    return (
        <div className='box'>
            <div>
                <input type="text" placeholder='Search' onChange={(e) => setText(e.target.value)} value={text}/>
                <button onClick={()=>{searchResults()}}>Search</button>
            </div>
            {books?<CardContainer books={books} /> : ''}
            
        </div>
    )
}

export default SearchPage
