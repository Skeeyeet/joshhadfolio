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
                    <NavBarItem Content="Discord bot"/>
                    <NavBarItem Content="3ds Max"/>
                    <NavBarItem Content="Contact"/>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar