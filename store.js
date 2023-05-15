import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from './reduxApplication/slice/actionReducer';
import ResourceSlice from "./reduxResource/ResourceSlice/ResourceSlices";

const rootReducer = combineReducers({
    users: userSlice,
    resource:ResourceSlice,
})

export const store=configureStore({
    reducer:rootReducer
});
