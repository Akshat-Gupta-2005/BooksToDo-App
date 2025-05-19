import React from 'react'
import './homePage.css'
import AddBtn from '../components/AddBtn';
import CardContainer from '../components/CardContainerRemove';


const homePage = () => {
    return (
        <>
            <div className='homePage'>
                <div className='btnbox'>
                    <AddBtn />
                </div>
                <CardContainer />
            </div>
        </>
    )
}

export default homePage
