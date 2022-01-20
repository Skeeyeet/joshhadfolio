import React from "react";
import NormalTitleText from "../Global/NormalTitleText";
import MainWeatherComponent from './MainWeatherComponent'
import NormalCenteredText from "../Global/NormalCenteredText";

function Weather() {

    return (
        <div className="container-fluid" id="weather">
            <NormalTitleText Content="Weather component" />
            <NormalCenteredText Content={<p className="lead text-center text-white pt-5 pe-0 ps-0 pb-5 pe-xl-5 ps-xl-5">I made a weather component that will tell the user the next 7 days weather. The component can be seen under this (not a screen shot). The source code for the component can be found in this websites code or seperatly <a href="https://github.com/Skeeyeet/WeatherApp">here</a>. This component fetches weather information from a free weather api, displays the min/max and will display a few generic icons depending on the type of weather.</p>}/>
            <MainWeatherComponent/>
        </div>
    )

}

export default Weather