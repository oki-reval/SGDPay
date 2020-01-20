let initialState={
    data: {},
}

export default user = (state = initialState, action)=>{
switch(action.type){
    case 'SAVE_USER':
        return{
            ...state,
            data : action.payload,
        }
    default:
        return state
}
}