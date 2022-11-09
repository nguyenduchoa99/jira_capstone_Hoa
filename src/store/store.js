import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { userReducer } from './userReducer/userReducer';
const rootReducers = combineReducers({
    userReducer,
});
export const store = configureStore({
    reducer: rootReducers,
    middleware: [thunk],
    devTools: true,
})