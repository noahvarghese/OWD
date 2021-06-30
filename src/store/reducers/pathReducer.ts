import { pages } from "../../data/pages";
import { CustomAction } from "../../types/customAction";
import { State } from "../../types/state";
import { createReducer } from "./util";

const setPath = (
    _: State,
    action: CustomAction
): { title: string; path: string }[] => {
    // return array of links with names

    // trim everything before '/'

    // split again on '/'
    //append finished to tracker

    // item that path === trimmed string is final path (current destination) store as last in return array

    const path: { title: string; path: string }[] = [];

    if (action.payload === "/") return path;

    const pieces = (action.payload as string).split("/");

    let truePath = "";

    for (let i = 0; i < pieces.length; i++) {
        if (pieces[i] === "") continue;

        truePath += `/${pieces[i]}`;

        for (const page of pages) {
            if (truePath === page.path) {
                path.push({ title: page.title, path: page.path });
                break;
            }

            if (page.subMenu) {
                for (const subMenu of page.subMenu) {
                    for (const menuItem of subMenu.list) {
                        if (truePath === menuItem.path) {
                            path.push(menuItem);
                            break;
                        }
                    }

                    if (path.length === i) {
                        break;
                    }
                }
            }

            if (path.length === i) {
                break;
            }
        }
    }

    return path;
};

export const pathReducer = createReducer([], { SET_PATH: setPath });
