import api from './api';
import { BASE_URL } from "../env";

export function getSeries () {
    return api.get(BASE_URL+'/series')
}

export function getSerie (id) {
    return api.get(BASE_URL+'/series/' + id)
}

export function getScores () {
    return api.get(BASE_URL+'/scores/')
}

export function setScore (data){
    return api.post(BASE_URL+'/scores', data)
}