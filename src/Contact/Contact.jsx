import React from 'react'
import NormalTitleText from '../Global/NormalTitleText'
import {AiOutlineMail,AiFillLinkedin,AiFillGithub} from '../../node_modules/react-icons/ai'
function Contact(){
return(
    <div className="container-fluid" id="contact">
        <div className='row justify-content-center'>
            <div className='col-4'>
            <AiFillGithub className='display-6 text-white'/>
            <a className='text-white lead ps-2' href='https://github.com/Skeeyeet'>https://github.com/Skeeyeet</a>
            </div>
        </div>
        <div className='row justify-content-center'>
            <div className='col-4'>
            <AiFillLinkedin className='display-6 text-white'/>
            <a className='text-white lead ps-2'>https://www.linkedin.com/in/joshua-hardi-adomeit-344a95181/</a>
            </div>
        </div>
        <div className='row justify-content-center'>
            <div className='col-4'>
            <AiOutlineMail className='display-6 text-white'/>
            <a className='text-white lead ps-2'>josh.adomeit@gmail.com</a>
            </div>
        </div>
    </div>
)
}

export default Contact