import React from 'react'
import UnrealEngineVideo from './UnrealEngineVideo'
import NormalTitleText from '../Global/NormalTitleText'
import NormalCenteredText from '../Global/NormalCenteredText'
function UnrealEngine() {
    return (
        <div className="container-fluid" id="unreal">
            <NormalTitleText Content="Unreal engine project"/>
            <div className='lead text-center text-white pt-5 pe-0 ps-0 pb-5 pe-xl-5 ps-xl-5'>
           <NormalCenteredText Content={ <p> This project is something that I've been working on since November 23rd, 2020, in my spare time. Everything within this project is coded by myself for the most part excluding a few areas. All sprites/materials and whenever I decide to add sound effects are all found online. You can also find some old source code <a href="https://drive.google.com/file/d/1O4L_8AwJyMesQhlDWKtL8ygcSPSP16Yk/view?usp=sharing">here</a>, included in the download is a devlog which contains everything that I've accomplished with the project since its creation. I've also included two videos below that showcase off an old build of the game which I used for a university assignment.</p>}/>
            </div>
            <div className="row">
                    <UnrealEngineVideo link="https://www.youtube.com/embed/f7Sx90QNttU" content="This is the first video where i proposed what I wanted to create within my game as well as what was already present in it." />
                    <UnrealEngineVideo link="https://www.youtube.com/embed/zGnm_k8c7cs" content="This video is the end of the assignment. It shows off the completed menu's as well as some stat changes." />
            </div>
        </div>
    )
}

export default UnrealEngine