import React from 'react'

function NavBarItem(props) {
    
        return (
            <li className="nav-item">
                <a className="nav-link active pe-5" aria-current="page" href={props.Href}>{props.Content}</a>
            </li>
        )
    
}

export default NavBarItem