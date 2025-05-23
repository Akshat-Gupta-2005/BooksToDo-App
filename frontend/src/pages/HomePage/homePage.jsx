import React from 'react'
import './homePage.css'
import SearchBtn from '../../components/SearchBtn/SearchBtn';
import CardContainer from '../../components/CardContainer/CardContainerRemove';


const HomePage = () => {
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

export default HomePage
