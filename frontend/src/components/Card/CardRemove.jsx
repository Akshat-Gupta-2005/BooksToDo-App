import React from 'react'
import './Card.css'
import { ReactComponent as BookmarkIcon } from '../../icons/trash-can-svgrepo-com.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Card = (props) => {
    const navigate = useNavigate();
    // const removeBook = async (e) => {
    //     await fetch(`http://localhost:5000/api/books/${props.element.id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //     })
    //     navigate(0)

    // }

    const removeBook = async () =>{
        await axios.delete(`http://localhost:5000/api/books/${props.element.id}`)
        navigate(0)
    }

    // const infoClick = async () => {
    //     try {
    //         const res = await axios.get(`http://localhost:5000/api/books/${props.element.id}`);
    //         props.setPopupInfo(res.data);
    //         props.setPopupDisplay(true);
    //         console.log("Popup triggered1");
    //     } catch (err) {
    //         console.error("Error fetching book info:", err);
    //     }
    // };
    const infoClick = async () => {
        try {
            // const res = await axios.get(`http://localhost:5000/api/books/${props.element.id}`);
            props.setPopupInfo(props.element);
            props.setPopupDisplay(true);
            console.log("Popup triggered2");
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
                <button className='trashbtn' onClick={() => { removeBook() }}><BookmarkIcon className="trashicon" /></button>
            </div>

        </div>
    )
}

export default Card
