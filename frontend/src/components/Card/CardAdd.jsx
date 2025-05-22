import React from 'react'
import './Card.css'
import { ReactComponent as Add } from '../../icons/plus-svgrepo-com.svg';
import axios from 'axios'



const Card = (props) => {
    // const addBook = async () => {
    //     await fetch('http://localhost:5000/api/books', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(props.element)
    //     })
    //     console.log(props.element);
    // }

    const addBook = async() =>{
        await axios.post("http://localhost:5000/api/books" , props.element)
    }

    const infoClick = async () => {
        try {
            props.setPopupInfo(props.element);
            props.setPopupDisplay(true);
            console.log("Popup triggered");
        } catch (err) {
            console.error("Error fetching book info:", err);
        }
    };

    return (
        <div className='Block'>
            <a className='ahere' href={props.element?.volumeInfo?.previewLink} target="_blank" rel="noopener noreferrer">
                <img className='Left' src={
                    props.element?.volumeInfo?.imageLinks?.smallThumbnail ||
                    props.element?.volumeInfo?.imageLinks?.thumbnail ||
                    "/images/books.png"
                } alt="asd" />
            </a>
            <div className="right">
                <button className='trashbtn text' onClick={()=>{infoClick()}}>Info</button>
                <button className='trashbtn' onClick={addBook}><Add className="trashicon" /></button>
            </div>

        </div>
    )
}

export default Card
