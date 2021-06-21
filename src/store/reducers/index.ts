import { combineReducers } from "redux";
import { State } from "../../types/state";
import { authReducer } from "./authReducer";

export const reducer = combineReducers<State>({
    auth: authReducer,
});
