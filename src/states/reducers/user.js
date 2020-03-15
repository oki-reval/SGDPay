let initialState={
    data: {},
    wallet: {}
}

export default user = (state = initialState, action)=>{
switch(action.type){
    case 'SAVE_USER':
        return{
            ...state,
            data : action.payload,
        }
    case 'SAVE_WALLET':
        return{
            ...state,
            wallet : action.payload,
        }
    default:
        return state
}
}