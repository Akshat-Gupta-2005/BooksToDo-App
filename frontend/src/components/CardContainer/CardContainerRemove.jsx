import React, { useEffect, useState } from 'react';
import Card from '../Card/CardRemove';
import './CardContainer.css';
import { motion } from 'framer-motion';
import axios from 'axios'

const CardContainer = () => {
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
                            title={element.volumeInfo.title || ""}
                            author={element.volumeInfo.authors || ""}
                            element={element}
                        />
                    </motion.div>
                ))
            ) : (
                <h3>Nothing to display, add more books</h3>
            )}
        </div>
    );
};

export default CardContainer;
