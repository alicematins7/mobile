import {api} from "../../api"
export interface IRegister {
    name?: string
    email?: string
    telefone?: string
    password?: string
}
export interface IAuthenticate {
    email?: string
    password?: string
}
export interface IUser {
    name: any
    id: number
    nome: string
    email: string
}
export interface IUserLogin {
    user: IUser
    token: {
        token: string
        expires_at: string
    }
}
class UserData {
    register(data: IRegister){
        return api.post<IUser>('/register', data)  //<Dado que será retornado após o cadastro IUser>
    }
    login(data: IAuthenticate){
        return api.post<IUserLogin>('/login')
    }
}
export default new UserData()

// a interrogação serve para ser nula, nn dar erro na hora de digitação