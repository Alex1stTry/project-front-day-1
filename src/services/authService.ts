import {IUser} from "../interfaces/user-interface";
import {apiService} from "./apiService";
import {urls} from "../constants";

const authService = {
   async register(user: IUser): Promise<void> {
         await apiService.post(urls.register.base, user)
    }
}


export {
    authService
}