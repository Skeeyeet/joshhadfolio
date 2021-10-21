import { Component } from "react";
import NavBarItem from "./NavBarItem";

class Navbar extends Component {
    render() {
        return (
            <div className="container-fluid">
                <nav class="navbar navbar-expand-lg fixed-top navbar-light navbar navbar-dark bg-dark">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <NavBarItem Content="Home" Href="#/"/>
                    <NavBarItem Content="Unreal engine" Href="#unreal"/>
                    <NavBarItem Content="React" Href="#react"/>
                    <NavBarItem Content="Discord bot" Href="#discord"/>
                    <NavBarItem Content="3ds Max" Href="#3dsMax"/>
                    <NavBarItem Content="Contact" Href="#contact"/>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar