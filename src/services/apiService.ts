import axios from "axios";
import {baseURL} from "../constants";
import {authService} from "./authService";

const apiService = axios.create({baseURL})


apiService.interceptors.request.use(request => {
    const access = authService.getAccess();

    if (access) {
        request.headers.Authorization = `Bearer ${access}`
    }

    return request
})
export {
    apiService
}