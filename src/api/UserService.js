import axios from "axios"

const API_URL = "/api/1.0/users";

export const postApplication = (body) => {
    return axios.post(API_URL,body)
}

export const getResponseByUserId = (id) => {
    return axios.get(API_URL+"/"+id)
}