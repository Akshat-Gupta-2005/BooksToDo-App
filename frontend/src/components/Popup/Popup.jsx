import React from 'react';
import './Popup.css';
import { motion } from 'framer-motion';


const Popup = ({ book, setPopupDisplay }) => {
    if (!book || !book.volumeInfo) return null;

    const { title, authors, description, imageLinks, publishedDate, publisher, pageCount, averageRating, previewLink } = book.volumeInfo;

    return (
        <div className="PopupPage" onClick={() => setPopupDisplay(false)}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >

                <div className="PopupPageBox" onClick={(e) => e.stopPropagation()}>
                    <div className="PopupImg">
                        <a className='ahere' href={previewLink} target="_blank" rel="noopener noreferrer">
                            <img
                                src={
                                    imageLinks?.thumbnail ||
                                    imageLinks?.smallThumbnail ||
                                    '/images/books.png'
                                }
                                alt={title}
                            />
                        </a>
                    </div>
                    <div className="PopupInfo">
                        <div className="PopupInfoUp">
                            <div className="PopupInfoUpTitle">{title}</div>
                            <div className="PopupInfoUpAuthor">{authors?.join(', ') || '-'}</div>
                        </div>
                        <div className="PopupInfoMid">
                            <p>{description ? description.slice(0, 300) : 'No description available'}...</p>
                        </div>
                        <div className="PopupInfoDown">
                            <div className="PopupInfoDownLeft">
                                <p><strong>Publisher:</strong> {publisher || '-'}</p>
                                <p><strong>Published:</strong> {publishedDate || '-'}</p>
                            </div>
                            <div className="PopupInfoDownRight">
                                <p><strong>Pages:</strong> {pageCount || '-'}</p>
                                <p><strong>Rating:</strong> {averageRating || '-'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Popup;
