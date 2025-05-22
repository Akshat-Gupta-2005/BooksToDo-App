import React from 'react';
import { useState } from 'react'

import './CardContainer.css';
import { motion } from 'framer-motion';

import Card from '../Card/CardAdd';
import Popup from '../Popup/Popup';


const CardContainer = ({ books }) => {
    const [PopupInfo, setPopupInfo] = useState()
    const [PopupDisplay, setPopupDisplay] = useState(false)


    return (
        <div>
            <div className="container">
                {books.map((element, index) => (
                    <motion.div
                        className="col-md-4"
                        key={element.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4, ease: 'easeOut' }}
                    >
                        {!element.bookMarked && <Card
                            element={element}
                            setPopupDisplay={setPopupDisplay}
                            setPopupInfo={setPopupInfo}
                        />}
                    </motion.div>
                ))}
            </div>
            {PopupDisplay && <Popup
                setPopupDisplay={setPopupDisplay}
                book={PopupInfo}
            />}
        </div>
    );
};

export default CardContainer;
