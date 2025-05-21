import React from 'react'
import './homePage.css'
import SearchBtn from '../components/SearchBtn';
import CardContainer from '../components/CardContainerRemove';


const homePage = () => {
    return (
        <>
            <div className='homePage '>
                <div className='btnbox'>
                    <SearchBtn />
                </div>
                <CardContainer />
            </div>
        </>
    )
}

export default homePage
