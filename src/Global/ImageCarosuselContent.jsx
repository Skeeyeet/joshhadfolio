import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function ImageCarosueselContent(props) {
    var image = require("../Images/" + props.Src).default
    return (
        <div>
            <img className="d-block w-100" alt={props.Alt} src={image} />
            <Carousel.Caption>
                <p className="lead">{props.Content}</p>
            </Carousel.Caption>
        </div>
    )
}

export default ImageCarosueselContent