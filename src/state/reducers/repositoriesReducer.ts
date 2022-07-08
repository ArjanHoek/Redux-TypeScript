import { ActionType } from "../action-types";
import { IAction } from "../actions";

interface IState {
    loading: boolean;
    error: string | null;
    data: string[];
}

const reducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return { loading: true, error: null, data: [] };
        case ActionType.SEARCH_REPOSITORIES_SUCCES:
            return {
                loading: false,
                error: null,
                data: action.payload,
            };
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return {
                loading: false,
                error: action.payload,
                data: [],
            };
        default:
            return state;
    }
};

export default reducer;
