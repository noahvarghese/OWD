import { CustomAction } from "../../types/customAction";

export const createReducer = (initialState: any, handlers: object) => {
    return (state: any = initialState, action: CustomAction) => {
        if (handlers.hasOwnProperty(action.type)) {
            return (handlers[action.type as keyof object] as any)(
                state,
                action
            );
        } else {
            return state;
        }
    };
};
