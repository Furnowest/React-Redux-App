const initialState = {
    animals: "Cute Dog Pics",
    editing: false,
    loading: false,
    dogs: "https://images.dog.ceo/breeds/australian-shepherd/sadie.jpg"
};
export const animalsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "EDITING":
            return { ...state, editing: true };
        case "DONE_EDITING":
            return { ...state, editing: false };
        case "LOADING":
            return { ...state, loading: true };
        case "NEW_DOG":
            return { ...state, loading: false, dogs: action.payload };
        default:
            return state;
    }

};