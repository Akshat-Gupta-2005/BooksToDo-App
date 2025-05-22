import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { motion } from 'framer-motion';
import './CardContainer.css';

import Card from '../Card/CardRemove';
import Popup from '../Popup/Popup';

const CardContainer = () => {
    const [PopupInfo, setPopupInfo] = useState()
    const [PopupDisplay, setPopupDisplay] = useState(false)
    const [books, setBooks] = useState([]);

    // const fetchBooks = async () => {
    //     try {
    //         const res = await fetch('http://localhost:5000/api/books');
    //         const data = await res.json();
    //         console.log(data);
    //         setBooks(data);
    //     } catch (err) {
    //         console.error("Failed to fetch books:", err);
    //     }
    // };

    const fetchBooks = async () =>{
        try {
            const res = await axios.get('http://localhost:5000/api/books')
            setBooks(res.data)
        }catch(err){
            console.error("Failed to fetch books")
        }
    }
    
    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <div>
            <div className="container">
                {books.length > 0 ? (
                    books.map((element, index) => (
                        <motion.div
                            className="col-md-4"
                            key={element.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card
                                element={element}
                                setPopupDisplay={setPopupDisplay}
                                setPopupInfo={setPopupInfo}
                            />
                        </motion.div>
                    ))
                ) : (
                    <h3>Nothing to display, add more books</h3>
                )}
            </div>
            {PopupDisplay && <Popup
                setPopupDisplay={setPopupDisplay}
                book={PopupInfo}
            />}
        </div>
    );
};

export default CardContainer;
