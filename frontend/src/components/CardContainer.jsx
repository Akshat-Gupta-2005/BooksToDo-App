import React from 'react'
import Card from './Card'
import './CardContainer.css'

const CardContainer = (props) => {
    const articles = props.articles || [
        {
            title: "Sample Title 1",
            description: "Sample Description 1",
            urlToImage: "https://via.placeholder.com/150",
            url: "https://example.com/1"
        },
        {
            title: "Sample Title 2",
            description: "Sample Description 2",
            urlToImage: "https://via.placeholder.com/150",
            url: "https://example.com/2"
        },
        {
            title: "Sample Title 3",
            description: "Sample Description 3",
            urlToImage: "https://via.placeholder.com/150",
            url: "https://example.com/3"
        }
    ] ;

    return (
        <div className="container">
            {articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                    <Card title={element.title ? element.title.slice(0, 45) : ""} desc={element.description ? element.description.slice(0, 90) : ""} imgurl={element.urlToImage} newsurl={element.url ? element.url : ""} />
                </div>
            })}
        </div>
    )
}

export default CardContainer
