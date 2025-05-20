import React from 'react'
import './Card.css'
import { ReactComponent as BookmarkIcon } from '../icons/trash-can-svgrepo-com.svg';
import { useNavigate } from 'react-router-dom';


const Card = (props) => {
    const navigate = useNavigate();
    const removeBooke = async(e) => {
        await fetch(`http://localhost:5000/api/books/${props.element.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        navigate(0)
        
    }

    
    return (
        <div className='Block'>
            <a className='ahere' href={props.element?.volumeInfo?.previewLink} target="_blank" rel="noopener noreferrer">

            <img className='Left' src={props.element.volumeInfo.imageLinks.smallThumbnail||props.element.volumeInfo.imageLinks.thumbnail} alt="asd" />
            </a>

            <div className='Middle'>
                <div className='t'>Title: <span className="text">{props.title.slice(0,50)}</span></div>
                <div className='a'>Author: <span className="text">{props.author}</span></div>
            </div>
            <button className='Right' onClick={()=>{removeBooke()}}><BookmarkIcon className="trashicon"/></button>

        </div>
    )
}

export default Card
