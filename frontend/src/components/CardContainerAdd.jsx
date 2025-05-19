import React from 'react'
import Card from './CardAdd'
import './CardContainer.css'

const CardContainer = (props) => {
    // const books = props.books
    // || [
    //     {
    //         title: "Sample Title 1",
    //         description: "Sample Description 1",
    //         urlToImage: "https://via.placeholder.com/150",
    //         url: "https://example.com/1"
    //     },
    //     {
    //         title: "Sample Title 2",
    //         description: "Sample Description 2",
    //         urlToImage: "https://via.placeholder.com/150",
    //         url: "https://example.com/2"
    //     },
    //     {
    //         title: "Sample Title 3",
    //         description: "Sample Description 3",
    //         urlToImage: "https://via.placeholder.com/150",
    //         url: "https://example.com/3"
    //     }
    // ] ;

    return (
        <div className="container">
            {/* {console.log(props.books)} */}
            {props.books.map((element) => {
                return <div className="col-md-4" key={element.id}>
                    <Card title={element.volumeInfo.title ? element.volumeInfo.title : ""} author={element.volumeInfo.authors ? element.volumeInfo.authors : ""} element={element}/>
                </div>
            })}
        </div>
    )
}

export default CardContainer
