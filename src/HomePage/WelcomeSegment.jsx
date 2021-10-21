import React, { Component } from 'react'
import NormalCenteredText from '../Global/NormalCenteredText'
class WelcomeSegment extends Component {

    render() {
        return (
            <div className="container-fluid" id="/">
                <div className="row">
                <p className="display-6 lead text-center text-white pt-5">This page was made by me using React,Html and Bootstrap</p>
                <NormalCenteredText Content="My name is Joshua Mathew Hardi-adomeit and this is my portfolio. I'm in my final year of University at Deakin with plans to major in application development. The programming skills that I'm most confident in include React, Javascript, C#, and Unreal engine. I will showcase off a few of my projects that I've been working on at Deakin and in my own spare time."/>
                </div>
            </div>
        )
    }

}

export default WelcomeSegment