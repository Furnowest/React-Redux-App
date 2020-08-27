const initialState ={
    editing: false,
    animals:{}
};
export const titleReducer = (state = initialState, action) => {
    switch(action.type){
        case "EDITING":
        return {...state, editing: true}
        default:
            return state;
    }
    
};