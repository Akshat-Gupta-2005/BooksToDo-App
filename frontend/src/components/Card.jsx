import React from 'react'
import './Card.css'
import { ReactComponent as BookmarkIcon } from '../icons/trash-can-svgrepo-com.svg';



const Card = (props) => {

    
    return (
        <div className='Block'>
            <img className='Left' src="/images/books.png" alt="asd" />
            <div className='Middle'>
                <div className='t'>Title: <span className="text">{props.title}</span></div>
                <div className='a'>Author: <span className="text">{props.title}</span></div>
            </div>
            <button className='Right' onClick={()=>{console.log("hi")}}><BookmarkIcon className="trashicon"/></button>

        </div>
    )
}

export default Card
