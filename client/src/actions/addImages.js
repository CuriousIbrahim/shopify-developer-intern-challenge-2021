import { ADD_IMAGES } from "../constants/actionTypes";

export const addImages = function(images) {
    return {
        type: ADD_IMAGES,
        newImages: images 
    }
}