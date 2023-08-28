import axios from 'axios'

export const api = axios.create({
    baseURL: "https://adonis1.onrender.com",
    headers: {
        Accept: 'application/json'
    }


})

// o headers só vai aceitar o aplication /json para trocar a requisição