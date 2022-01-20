import React from 'react'

function NormalCenteredText(props){
    return(
        <div className="lead text-center text-white pt-5 pe-0 ps-0 pb-5 pe-xl-5 ps-xl-5">
        {props.Content}
        </div>
    )
}

export default NormalCenteredText