import { ActionType } from "../action-types";

interface ISearchRepositoriesAction {
    type: ActionType.SEARCH_REPOSITORIES;
}

interface ISearchRepositoriesSuccessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCCES;
    payload: string[];
}

interface ISearchRepositoriesErrorAction {
    type: ActionType.SEARCH_REPOSITORIES_ERROR;
    payload: string;
}

export type IAction =
    | ISearchRepositoriesAction
    | ISearchRepositoriesSuccessAction
    | ISearchRepositoriesErrorAction;
