import { ActionType } from "../action-types"
import { Action } from "../actions"
import axios from 'axios';
import { Dispatch } from 'redux'

const endpoint = "https://api.thecatapi.com/v1";
const subId = "shibumanoharan";
const config = {
    headers: {
        "x-api-key": 'a5d15288-e5f1-4933-8d9a-ce358c2a7bf3',
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

export const uploadCat = async (file: File) => {
    const formdata = new FormData();
    formdata.append("file", file, file.name);
    formdata.append("sub_id", subId);
    try {
        await axios.post(`${endpoint}/images/upload`, formdata, {
            ...config,
            headers: { ...config.headers, "Content-Type": "multipart/form-data" },
        }).then((response) => {
            return (dispatch: Dispatch<Action>) => dispatch({
                type: ActionType.MAKE_UN_FAVOURITE,
                payload: response.data
            });

        });

    } catch (error) {
        console.log('error')
    }
};
