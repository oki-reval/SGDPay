let initialState={
    data: {},
    wallet: {},
    loading: false,
    notif: []
}

export default user = (state = initialState, action)=>{
switch(action.type){
    case 'GET_USER_PENDING':
        return{
            ...state,
            loading : true,
        }
    case 'GET_USER_REJECTED':
        return{
            ...state,
            loading : false,
        }
    case 'GET_USER_FULFILLED':
        return{
            ...state,
            loading: false,
            data : action.payload.data.user,
            wallet : action.payload.data.wallet,
        }
    case 'SAVE_WALLET':
        return{
            ...state,
            wallet : action.payload,
        }
    case 'SAVE_NOTIF':
        return{
            ...state,
            notif : action.payload,
        }
    default:
        return state
}
}