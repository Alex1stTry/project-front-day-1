import {IUser} from "../interfaces/user-interface";
import {apiService} from "./apiService";
import {urls} from "../constants";
import {ITokens} from "../interfaces/tokens-interface";
import {access, refresh} from "../constants/localStorageKey";
import {ILogIn} from "../interfaces/log-in.interface";


const authService = {
    async register(user: IUser): Promise<void> {
        await apiService.post(urls.auth.register, user)
    },

    async logIn(auth: ILogIn): Promise<IUser> {
        const {data} = await apiService.post(urls.auth.login, auth);
        this.setTokens(data.tokens)
        return data.user

    },

   async me(): Promise<IUser> {
        return await apiService.get(urls.auth.me)
    },

    setTokens(tokens: ITokens) {
        localStorage.setItem(access, tokens.accessToken);
        localStorage.setItem(refresh, tokens.refreshToken)
    },

    getAccess(): string {
        return localStorage.getItem(access)
    }
}


export {
    authService
}