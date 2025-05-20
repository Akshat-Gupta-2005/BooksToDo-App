import React from 'react'
import Card from './CardAdd'
import './CardContainer.css'

const CardContainer = (props) => {

    return (
        <div className="container ">
            {/* {console.log(props.books)} */}
            {props.books.map((element) => {
                return <div className="col-md-4" key={element.id}>
                    <Card title={element.volumeInfo.title ? element.volumeInfo.title : ""} author={element.volumeInfo.authors ? element.volumeInfo.authors : ""} element={element} />
                </div>
            })}
        </div>
    )
}

export default CardContainer
