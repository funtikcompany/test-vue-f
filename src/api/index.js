import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';
const USER_DETAIL_URL = (id)=>`https://jsonplaceholder.typicode.com/users/${id}`

export function getUsers() {
    return axios.get(`${BASE_URL}`)
}

export function getUsersDetail(id) {
    return axios.get(USER_DETAIL_URL(id))
}