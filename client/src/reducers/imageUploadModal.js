import { OPEN_UPLOAD_IMAGE_MODAL, CLOSE_UPLOAD_IMAGE_MODAL } from "../constants/actionTypes";

export const imageUploadModalReducer = function (state = {}, action) {
    switch (action.type) {
        case OPEN_UPLOAD_IMAGE_MODAL:
            return {
                ...state,
                open: true,
            };
        case CLOSE_UPLOAD_IMAGE_MODAL:
            return {
                ...state,
                open: false,
            };
        default:
            return state;
    }
}