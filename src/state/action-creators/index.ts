import { ActionType } from "../action-types"
import { Action } from "../actions"
import axios from 'axios';
import { Dispatch } from 'redux';

const endpoint = process.env.REACT_APP_CATS_END_POINT as string;
const subId = process.env.REACT_APP_CATS_SUB_ID as string;
const config = {
    headers: {
        "x-api-key": process.env.REACT_APP_CATS_X_API_KEY as string,
    },
};
const limit = 50;

export const fetchCats = () => {
    return (dispatch: Dispatch<Action>) => {
        axios.get(`${endpoint}/images?sub_id=${subId}&limit=${limit}`, config)
            .then(response => {
                dispatch({
                    type: ActionType.GET_CATS_SUCCESS,
                    payload: response.data
                });
            })
            .catch(error => {
                // TODO: handle the error
            })
    }
}

export const fetchVotes = () => {
    return (dispatch: Dispatch<Action>) => {
        axios.get(`${endpoint}/votes?sub_id=${subId}&limit=${limit}`, config)
            .then(response => {
                dispatch({
                    type: ActionType.GET_VOTES_SUCCESS,
                    payload: response.data
                });
            })
            .catch(error => {
                // TODO: handle the error
            })
    }
};

export const voteUp = (imageId: string, value: number) => {
    return (dispatch: Dispatch<Action>) => {
        axios.post(`${endpoint}/votes`, { image_id: imageId, value, sub_id: subId }, config)
            .then(response => {
                dispatch({
                    type: ActionType.VOTE_UP,
                    payload: { image_id: imageId, value: value }
                });
            })
            .catch(error => {
                // TODO: handle the error
            })
    }
};

export const voteDown = (imageId: string, value: number) => {
    return (dispatch: Dispatch<Action>) => {
        axios.post(`${endpoint}/votes`, { image_id: imageId, value, sub_id: subId }, config)
            .then(response => {
                dispatch({
                    type: ActionType.VOTE_DOWN,
                    payload: { image_id: imageId, value: value }
                });
            })
            .catch(error => {
                // TODO: handle the error
            })
    }
};

export const makeFavourite = (imageId: string) => {
    return (dispatch: Dispatch<Action>) => {
        axios.post(`${endpoint}/favourites`, { image_id: imageId, sub_id: subId }, config)
            .then((response) => {
                dispatch({
                    type: ActionType.MAKE_FAVOURITE,
                    payload: { image_id: imageId, data: response.data }
                });
            })
            .catch(error => {
                // TODO: handle the error
            })
    }
};

export const makeUnFavourite = (imageId: string, favId: string) => {
    return (dispatch: Dispatch<Action>) => {
        axios.delete(`${endpoint}/favourites/${favId}`, config)
            .then((response) => {
                dispatch({
                    type: ActionType.MAKE_UN_FAVOURITE,
                    payload: { image_id: imageId, data: response.data }
                });
            })
            .catch(error => {
                // TODO: handle the error
            })
    }
};

export const uploadCat = (file: File, history: any) => {
    const formdata = new FormData();
    formdata.append("file", file, file.name);
    formdata.append("sub_id", subId);
    return (dispatch: Dispatch<Action>) => {
        try {
            axios.post(`${endpoint}/images/upload`, formdata, {
                ...config,
                headers: { ...config.headers, "Content-Type": "multipart/form-data" },
            }).then((response) => {
                history.push('/')
                dispatch({
                    type: ActionType.UPLOAD_CAT_SUCCESS,
                    payload: response.data
                });
            });

        } catch (error) {
            console.log('error')
        }
    }
};
