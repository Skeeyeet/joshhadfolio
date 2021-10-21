import React from 'react'

function NormalCenteredText(props){
    return(
        <p className="lead text-center text-white pt-5 pe-5 ps-5 pb-5">{props.Content}</p>
    )
}

export default NormalCenteredText