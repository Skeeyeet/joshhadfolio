import React from 'react'
import NormalTitleText from '../Global/NormalTitleText'
function Discord(){
    return(
        <div className="container-fluid" id="discord">
            <NormalTitleText Content="Discord bot"/>
            <p className="lead text-center text-white pt-5 pe-5 ps-5 pb-5">I've also made and deployed my discord bot (deployed on aws and heroku). This bot's main purpose was to ping our server and tell us if Divinity 2 original sin was on sale or not. It's quite a random thing but this was done as a bet. Recently I've gone back and reworked the entire code so it's neater and also plays music. I felt encouraged to rewrite the code after my work on the DMA website and wanted to try to apply some of the techniques I had learned there to divbot. This bot was written in Javascript. You can find the source code for the bot <a href="https://github.com/Skeeyeet/ShowcaseModularDivbot">here</a>.</p>
        </div>
    )
}

export default Discord