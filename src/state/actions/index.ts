import { ActionType } from '../action-types/index';

interface IVoteUpAction {
    type: ActionType.VOTE_UP
    payload: any
}

interface IVoteDownAction {
    type: ActionType.VOTE_DOWN
    payload: any
}

interface IMakeFavouriteAction {
    type: ActionType.MAKE_FAVOURITE
    payload: any
}

interface IMakeUnFavouriteAction {
    type: ActionType.MAKE_UN_FAVOURITE
    payload: any
}

interface IGetCatsSuccessAction {
    type: ActionType.GET_CATS_SUCCESS
    payload: any
}

interface ISetCatsSuccessAction {
    type: ActionType.UPLOAD_CAT_SUCCESS
    payload: any
}

interface IVotesSuccessAction {
    type: ActionType.GET_VOTES_SUCCESS,
    payload: any
}

export type Action = IVoteUpAction | IVoteDownAction | IMakeFavouriteAction | IMakeUnFavouriteAction | IGetCatsSuccessAction | ISetCatsSuccessAction | IVotesSuccessAction