export const saveUser=(data)=>{
    return{
        type: 'SAVE_USER',
        payload: data,
    }
}

export const saveWallet=(data)=>{
    return{
        type: 'SAVE_WALLET',
        payload: data,
    }
}