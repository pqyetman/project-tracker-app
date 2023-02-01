import { TiWeatherCloudy, TiWeatherStormy, TiWeatherSunny} from "react-icons/ti";

import {BsCloudHaze1, BsCloudRainFill, BsCloudSnow} from "react-icons/bs"

import {BiRadar} from "react-icons/bi"

import {IoThunderstormOutline} from "react-icons/io5"




export function tempConversion(temp){
    return parseFloat(((temp * 9 / 5) + 32).toFixed(2)) 
}



const windSpeedArray = [
    "Below 0.3m/s (calm)",
    "0.3-3.4m/s (light)",
    "3.4-8.0m/s (moderate)",
    "8.0-10.8m/s (fresh)",
    "10.8-17.2m/s (strong)",
    "17.2-24.5m/s (gale)",
    "24.5-32.6m/s (storm)",
    "Over 32.6m/s (hurricane)"

]

export function windSpeed(number) {

    return windSpeedArray[number - 1]


}


export function dateConversion(date) {

    if (date !== undefined) {

        let dateStr = date.toString()
        const year = dateStr.slice(0, 4);
        const month = dateStr.slice(4, 6);
        const day = dateStr.slice(6, 8);

        let fixedDate = `Date:  ${month}/${day}/${year}`

        return fixedDate
    }

    else console.log("date invalid")
}






export function filterWeather(weather) {

    let output = ""

    switch (weather) {
        case "clearday":
            output = < TiWeatherSunny size={150} />;
            break;



        case "pcloudyday":
        case "mcloudyday":
        case "cloudyday":
            output = < TiWeatherCloudy size={150} />;;
            break;

   

        case "humidday":
        case "humidnight":
            output = < BsCloudHaze1 size={150} />;
            break;

        case "lightrainday":
        case "lightrainnight":
        case "oshowerday":
        case "oshowernight":
        case "ishowerday":
        case "ishowernight":
        case "rainday":
        case "rainnight":
            output = < BsCloudRainFill size={150} />;
            break;

        case "lightsnowday":
        case "lightsnownight":
        case "snowday":
        case "snownight":
            output = < BsCloudSnow size={150} />;
            break;

        case "tsday":
        case "tsnight":
            output = <TiWeatherStormy size={150} />;
            break;

        case "tsrainday":
        case "tsrainnight":
            output = <IoThunderstormOutline size={150}/>;
            break;

        default:
            output = < BiRadar size={150} />;
    }
    return output;

}



export function filterWeatherString(weather) {

    let output = ""

    switch (weather) {
        case "clearday":
        case "clearnight":
            output = "Total cloud cover less than 20%";
            break;

        case "pcloudyday":
        case "pcloudynight":
            output = "Total cloud cover between 20%-60%";
            break;

        case "mcloudyday":
        case "mcloudynight":
            output = "Total cloud cover between 60%-80%";
            break;

        case "cloudyday":
        case "cloudynight":
            output = "Total cloud cover over over 80%";
            break;

        case "humidday":
        case "humidnight":
            output = "Relative humidity over 90% with total cloud cover less than 60%";
            break;

        case "lightrainday":
        case "lightrainnight":
            output = "Precipitation rate less than 4mm/hr with total cloud cover more than 80%";
            break;

        case "oshowerday":
        case "oshowernight":
            output = "Precipitation rate less than 4mm/hr with total cloud cover between 60%-80%";
            break;

        case "ishowerday":
        case "ishowernight":
            output = "Precipitation rate less than 4mm/hr with total cloud cover less than 60%";
            break;

        case "rainday":
        case "rainnight":
            output = "Precipitation rate over 4mm/hr";
            break;


        case "lightsnowday":
        case "lightsnownight":
        case "snowday":
        case "snownight":
            output = "Snow with precipitation rate over 4mm/hr";
            break;

        case "tsday":
        case "tsnight":
            output = "Lifted Index less than -5 with precipitation rate below 4mm/hr";
            break;

        case "tsrainday":
        case "tsrainnight":
            output = "Lifted Index less than -5 with precipitation rate over 4mm/hr";
            break;

        default:
            output = `${weather}`;
    }
    return output;
}