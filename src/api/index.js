import axios from "axios";


export const api = axios.create({
    baseURL : "https://api.openweathermap.org/data/2.5"
})

export const appId = '18629418e49c2d9be8ad4dc6e62b6fe7'