import { CustomAction } from "../../types/customAction";
import { createReducer } from "./util";

export const SetAuth = (_: any, action: CustomAction): string => action.payload;

export const authReducer = createReducer(false, { SET_AUTH: SetAuth });
