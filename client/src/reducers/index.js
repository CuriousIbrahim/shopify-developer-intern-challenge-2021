import { imageUploadModalReducer } from "./imageUploadModal";
import { addImagesReducer } from "./addImages";

import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    imageUploadModalReducer,
    addImagesReducer,
});