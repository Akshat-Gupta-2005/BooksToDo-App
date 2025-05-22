import React from 'react'
import './Card.css'
import { ReactComponent as BookmarkIcon } from '../../icons/trash-can-svgrepo-com.svg';
import { useNavigate } from 'react-router-dom';


const Card = (props) => {
    const navigate = useNavigate();
    const removeBooke = async (e) => {
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
                <img className='Left' src={
                    props.element?.volumeInfo?.imageLinks?.smallThumbnail ||
                    props.element?.volumeInfo?.imageLinks?.thumbnail ||
                    "/images/books.png" // optional fallback image if both are undefined
                } alt="asd" />
            </a>

            <div className="right">
                <button className='trashbtn text'>Info</button>
                <button className='trashbtn' onClick={() => { removeBooke() }}><BookmarkIcon className="trashicon" /></button>
            </div>

        </div>
    )
}

export default Card
