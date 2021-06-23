import { combineReducers } from "redux";
import { State } from "../../types/state";
import { authReducer } from "./authReducer";
import { pathReducer } from "./pathReducer";

export const reducer = combineReducers<State>({
    auth: authReducer,
    path: pathReducer,
});
