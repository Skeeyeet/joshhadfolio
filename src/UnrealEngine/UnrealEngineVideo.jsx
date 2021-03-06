import React, { Component } from 'react'

class UnrealEngineVideo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Link: this.props.link,
            Content: this.props.content
        }
    }

    render() {
        return (
            <div className="col-12 col-xl-6 col-md-12 col-sm-12" align="center">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe title="Video player" width="80%" height="400" src={this.state.Link} />
                    <p className="lead text-white">{this.state.Content}</p>
                </div>
            </div>
        )
    }

}

export default UnrealEngineVideo