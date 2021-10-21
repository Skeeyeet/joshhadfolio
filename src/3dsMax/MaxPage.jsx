import React from 'react'
import NormalTitleText from '../Global/NormalTitleText'
import UnrealEngineVideo from '../UnrealEngine/UnrealEngineVideo'
function MaxPage() {
    return (
        <div className="container-fluid" id="3dsMax">
            <NormalTitleText Content="3ds Max" />
            <p className="lead text-center text-white pt-5 pe-5 ps-5 pb-5">Although I don't plan on picking up 3ds max again, I still think its worth while to include here. There is another folio <a href="https://joshadomeit.wixsite.com/audvisfolio">here</a> which is my 3ds max folio from a unit I did at Deakin. The most standout part of this folio was recording the whole process of the 3d models creation. I've included the recordings below.</p>
            <div className="row">
                <UnrealEngineVideo link="https://www.youtube.com/embed/TIK9J24EJmw" content="Creating a apple in 4x speed" />
                <UnrealEngineVideo link="https://www.youtube.com/embed/Dk3UVdckQs0" content="Creating a dirty cardboard box in 4x speed" />
                <UnrealEngineVideo link="https://www.youtube.com/embed/NMfESKDybIE" content="Creating a spider in 4x speed" />
            </div>
        </div>
    )
}

export default MaxPage
