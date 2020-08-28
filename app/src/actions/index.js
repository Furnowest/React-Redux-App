import axios from 'axios';


export const setEditTrue = () => {

    return { type: "EDITING" }

};

export const setEditFalse = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({ type: "DONE_EDITING" });
        }, 2000);

    }
};

export const getDogs = () => {
    return dispatch => {
        dispatch({ type: "LOADING" });
        axios
            .get("https://dog.ceo/api/breeds/image/random")
            .then(res => {
                dispatch({ type: "NEW_DOG", payload: res.data.file });
             console.log (res)
            })
            .catch(err => console.log("error:", err));
    };
};