import React from 'react'

function NormalCenteredText(props){
    return(
        <p className="lead text-center text-white pt-5 pe-0 ps-0 pb-5 pe-xl-5 ps-xl-5">{props.Content}</p>
    )
}

export default NormalCenteredText