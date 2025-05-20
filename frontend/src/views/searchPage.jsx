import React from 'react'
import CardContainer from '../components/CardContainerAdd'
import './searchPage.css'
import { useState } from 'react'
import apiFetch from '../controllers/apiFetch'


const SearchPage = () => {
    const key = process.env.REACT_APP_MY_KEY
    // console.log(key);
    
    // const key = "AIzaSyBX2Err3hD3JST_XmxqpJ5anLA-9VC2nZ8"
    const [text, setText] = useState('');
    const [books, setBooks] = useState();

    const searchResults = async () => {
        const articles = await apiFetch(`https://www.googleapis.com/books/v1/volumes?q=` + text.replace(' ' , '+') + `&key=` + key)
        await setBooks(articles)
        await console.log(books)
    }

    return (
        <div className='box '>
            <div>
                <input type="text" placeholder='Search' onChange={(e) => setText(e.target.value) } className='searchbox' value={text}/>
                <button onClick={()=>{searchResults()}} className='searchbtn'>Search</button>
            </div>
            {books?<CardContainer books={books} /> : ''}
            
        </div>
    )
}

export default SearchPage
