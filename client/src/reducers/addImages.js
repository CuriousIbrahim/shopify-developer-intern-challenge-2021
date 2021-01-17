import { ADD_IMAGES } from "../constants/actionTypes";

export const addImagesReducer = function (state = [], action) {
    switch (action.type) {
        case ADD_IMAGES:
            return action.newImages;
        default:
            return state
    }
}