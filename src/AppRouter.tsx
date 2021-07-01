import React, { ReactNode, useCallback, useEffect, useState } from "react";
// import ProtectedRoute from "./components/ProtectedRoute";
import { State } from "./types/state";
import { connect } from "react-redux";
import { CustomAction } from "./types/customAction";
import { useLocation, useHistory } from "react-router-dom";
import Stack from "./types/stack";

interface AppRouterProps {
    path: { title: string; path: string }[];
    setPath: (path: string) => CustomAction;
    children?: ReactNode;
}

const AppRouter: React.FC<AppRouterProps> = ({ setPath, ...props }) => {
    const location = useLocation();
    const history = useHistory();

    const [backStack, setBackStack] = useState<
        Stack<{ location: unknown; top: number }>
    >(new Stack<{ location: unknown; top: number }>());

    const [frontStack, setFrontStack] = useState<
        Stack<{ location: unknown; top: number }>
    >(new Stack<{ location: unknown; top: number }>());

    const stacks = useCallback(
        (location, history) => {
            if (history.action === "PUSH") {
                backStack.push({ location, top: window.scrollY });
                setBackStack(backStack);
                if (frontStack.peek()) {
                    setFrontStack(
                        new Stack<{ location: unknown; top: number }>()
                    );
                }

                window.scrollTo({ top: 0 });
            } else if (history.action === "POP") {
                let back = backStack.peek();
                let front = frontStack.peek();

                if (
                    back &&
                    (back.location as any).key === history.location.key
                ) {
                    back = backStack.pop()!;
                    setBackStack(backStack);

                    frontStack.push(back);
                    setFrontStack(frontStack);

                    window.scrollTo({ top: back.top });
                } else if (
                    front &&
                    (front.location as any).key === history.location.key
                ) {
                    front = frontStack.pop()!;
                    setFrontStack(frontStack);

                    backStack.push(front);
                    setBackStack(backStack);
                    window.scrollTo({ top: front.top });
                }
            }
        },
        [frontStack, backStack]
    );

    useEffect(() => {
        // keep track of scroll position in stack that is in sync with browsing stack
        // if the user just went back 'pop' the last item out of the stack
        // and set -> window.scrollTo({top: stack.pop()})
        // if the user went forward set -> window.scrollTo({top: 0})
        stacks(location, history);
        // if new page
    }, [location, history, stacks]);

    // keep track of path to / from requested page
    useEffect(() => {
        setPath(location.pathname);
    }, [location, setPath]);

    return <>{props.children}</>;
};

export default connect(
    ({ path }: State) => ({ path }),
    (dispatch) => ({
        setPath: (path: string) =>
            dispatch({ type: "SET_PATH", payload: path }),
    })
)(AppRouter);
