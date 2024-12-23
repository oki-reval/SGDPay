import axios from 'axios'

export const getUser=()=>{
    return{
        type: 'GET_USER',
        payload: axios.get(`/user`),
    }
}

export const saveWallet=(data)=>{
    return{
        type: 'SAVE_WALLET',
        payload: data,
    }
}

export const saveNotif=(data)=>{
    return{
        type: 'SAVE_NOTIF',
        payload: data,
    }
}