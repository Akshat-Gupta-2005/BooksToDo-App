import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Card from './CardRemove'
import './CardContainer.css'

const CardContainer = (props) => {
    const [books, setBooks] = useState([]);


    useEffect(() => {
        firstRender();
    },[]);

    const firstRender = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/books');
            const data = await res.json();
            console.log(data);
            setBooks(data);
        } catch (err) {
            console.error("Failed to fetch books:", err);
        }
    }

    return (
        <div className="container ">
            {books.map((element) => {
                return <div className="col-md-4" key={element.id}>
                    <Card title={element.volumeInfo.title ? element.volumeInfo.title : ""} author={element.volumeInfo.authors ? element.volumeInfo.authors : ""} element={element}/>
                </div>
            })}
        </div>
    )
}

export default CardContainer
