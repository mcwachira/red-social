import { atom } from "recoil";

export interface AuthModalState{
    open:boolean,
    view:'login' | 'signup'| 'resetPassword' //predefined sett of strings
}

const defaultModalState:AuthModalState = {
    open:false,
    view:'login'
}

export const authModalState = atom<AuthModalState>({
    key:'authModalState', //unique identifier of the state
    default:defaultModalState //initial state value for the atom
})