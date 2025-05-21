import React from 'react';
import Card from './CardAdd';
import './CardContainer.css';
import { motion } from 'framer-motion';

const CardContainer = ({ books }) => {
    return (
        <div className="container">
            {books.map((element, index) => (
                <motion.div
                    className="col-md-4"
                    key={element.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4, ease: 'easeOut' }}
                >
                    <Card
                        title={element.volumeInfo.title || ""}
                        author={element.volumeInfo.authors || ""}
                        element={element}
                    />
                </motion.div>
            ))}
        </div>
    );
};

export default CardContainer;
