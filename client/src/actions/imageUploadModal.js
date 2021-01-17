import { CLOSE_UPLOAD_IMAGE_MODAL, OPEN_UPLOAD_IMAGE_MODAL } from "../constants/actionTypes";

export const closeUploadImageModal = function() {
    return {
        type: CLOSE_UPLOAD_IMAGE_MODAL,
    }
}

export const openUploadImageModal = function() {
    return {
        type: OPEN_UPLOAD_IMAGE_MODAL,
    }
}