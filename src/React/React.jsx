import React from "react"
import NormalCenteredText from "../Global/NormalCenteredText"
import NormalTitleText from "../Global/NormalTitleText"
import ImageCarosueselContent from "../Global/ImageCarosuselContent"
import Carousel from 'react-bootstrap/Carousel'

function ReactPage() {
    return (
        <div className="container-fluid" id="react">
            <NormalTitleText Content="React DMA website" />
            <NormalCenteredText Content="In my third year at Deakin, I undertook a capstone task which involved me working on a website for Whittlesea digital marketing along with around ten other people. We all worked together, having at least two meetings a week to discuss our work and different aspects of the website. I tasked myself to work on the React end of the website. This involved me converting some HTML into reusable react components, making parts of the website function such as forums, routing, and fetching content from our SQL database. This unit lasts over two trimesters and I have currently completed the first half of it, with the next half having very ambitious plans such as having the end-user edit different elements of the site. I'm not going to share the source code for the project because I'm sure there is a rule against that. Instead there will be a few images provided below of some code segments I had made. " />
            <div className="row">
                <div className="col"/>
                <div className="col-6">
            <Carousel>
                <Carousel.Item>
                    <ImageCarosueselContent Src="ReactFetch.png" Content="This is an async function that I had made. It takes in an Id used for the SQL database and returns the text content" Alt="Fetch"/>
                </Carousel.Item>
                <Carousel.Item>
                    <ImageCarosueselContent Src="ContactUsForm.png" Content="This function sends form data to the SQL database." Alt="Contact us"/>
                </Carousel.Item>
            </Carousel>
            </div>
            <div className="col"/>
            </div>
        </div>
    )
}

export default ReactPage