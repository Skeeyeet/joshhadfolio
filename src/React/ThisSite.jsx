import React from 'react'
import NormalTitleText from '../Global/NormalTitleText'
function ThisSite(){
return(
    <div>
        <NormalTitleText Content="React folio"/>
        <p className="lead text-center text-white pt-5 pe-5 ps-5 pb-5">The website you are currently viewing was made solely by myself using React, HTML, and bootstrap. For me, this was the first time I had ever used bootstrap, so that's why this folio page isn't laid out very well. The code for this website can be found <a href="https://github.com/Skeeyeet/joshhadfolio">here</a>.</p>
    </div>
)
}

export default ThisSite