import React from 'react';
import './contactPage.css';

const ContactPage = () => {
    return (
        <div className='contactPage'>
            <div className='containercp'>
                <h1 className='contacth1'>Contact Us</h1>
                <p className='contact'>
                    We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
                </p>
                <div className='contact-details'>
                    <p><strong>Email:</strong> support@bookmarkshelf.com</p>
                    <p><strong>Phone:</strong> +1 (123) 456-7890</p>
                    <p><strong>Address:</strong> 123 Library Lane, Booktown, BK 45678</p>
                </div>
                <p className='contact-note'>
                    You can also follow us on social media for updates and news.
                </p>
            </div>
        </div>
    );
}

export default ContactPage;
