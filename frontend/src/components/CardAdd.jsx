import React from 'react'
import './Card.css'
import { ReactComponent as Add } from '../icons/plus-svgrepo-com.svg';




const Card = (props) => {
    const addBook = async (e) => {
        await fetch('http://localhost:5000/api/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(props.element)
        })
        console.log(props.element);

    }
    return (
        <div className='Block'>
            <a className='ahere' href={props.element?.volumeInfo?.previewLink} target="_blank" rel="noopener noreferrer">
                <img className='Left' src={
                    props.element?.volumeInfo?.imageLinks?.smallThumbnail ||
                    props.element?.volumeInfo?.imageLinks?.thumbnail ||
                    "/images/books.png" // optional fallback image if both are undefined
                } alt="asd" />
            </a>
            <div className="right">
                <button className='trashbtn text'>Info</button>
                <button className='trashbtn' onClick={addBook}><Add className="trashicon" /></button>
            </div>

        </div>
    )
}

export default Card
