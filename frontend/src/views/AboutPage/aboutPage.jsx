import React from 'react'
import './aboutPage.css'

const aboutPage = () => {
    return (
        <div className='aboutPage'>
            <div className='containerap'>
                <h1 className='abouth1'>About Us</h1>
                <p className='about'>
                    Hi this is a book app where you can add books to your list and remove them. You can also search for books using the search button. This app is built using React, Node.js, and Express. The data is fetched from the Google Books API. The app is designed to be user-friendly and easy to navigate. You can add books to your list by clicking on the add button. You can also remove books from your list by clicking on the remove button. The app is still in development and more features will be added in the future. If you have any suggestions or feedback, please feel free to contact us. Thank you for using our app!
                </p>
            </div>
        </div>
    )
}

export default aboutPage
