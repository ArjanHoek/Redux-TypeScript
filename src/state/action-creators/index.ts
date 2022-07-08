import axios from "axios";
import { ActionType } from "../action-types";
import { Dispatch } from "react";
import { IAction } from "../actions";

export const searchRepositories = (term: string) => {
    return async (dispatch: Dispatch<IAction>) => {
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES,
        });

        try {
            const { data } = await axios.get(
                "https://registry.npmjs.org/-/v1/search",
                {
                    params: {
                        text: term,
                    },
                }
            );

            const names = data.objects.map((obj: any) => {
                return obj.package.name;
            });

            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_SUCCES,
                payload: names,
            });
        } catch (err: any) {
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_ERROR,
                payload: err.message,
            });
        }
    };
};
