import axios from "axios";

export const api =axios.create({
    baseURL: 'https://restcountries.com/v3.1'
})

export const getCountries = () => api.get('/all');

export const getIndCountries = (name) => {
    return api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion, capital,tld,currencies,languages,borders,flags`)
};

