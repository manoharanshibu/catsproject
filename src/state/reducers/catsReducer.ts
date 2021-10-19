import { Action } from '../actions/index';
import { ActionType } from '../action-types/index';

const initialState = {
    vote: 0,
    cats: []
};

type favourite = {
    id: string,
    favourite: false,
}

type cat = {
    vote: number,
    favourite: favourite,
    cats: [],
    id: number,
    url: string,
    favouriteId: string,
    votes: number,
    loadedCats: boolean,
    loadedVotes: boolean,
}

type vote = {
    vote: number,
    image_id: number,
}

const catsReducer = (state: any = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.VOTE_UP:
            return {
                ...state,
                cats: state.cats.map((cat: cat) => {
                    if (cat.id === action.payload.image_id) {
                        return {
                            ...cat,
                            votes: { value: action.payload.value }
                        };
                    } else {
                        return cat;
                    }
                }),
            };
        case ActionType.VOTE_DOWN:
            return {
                ...state,
                cats: state.cats.map((cat: cat) => {
                    if (cat.id === action.payload.image_id) {
                        return {
                            ...cat,
                            votes: { value: action.payload.value }
                        };
                    } else {
                        return cat;
                    }
                }),
            };
        case ActionType.MAKE_FAVOURITE:
            return {
                ...state,
                cats: state.cats.map((cat: cat) => {
                    if (cat.id === action.payload.image_id) {
                        return {
                            ...cat,
                            favouriteId: action.payload.data.id,
                        };
                    } else {
                        return cat;
                    }
                }),
            };
        case ActionType.MAKE_UN_FAVOURITE:
            return {
                ...state,
                cats: state.cats.map((cat: cat) => {
                    if (cat.id === action.payload.image_id) {
                        return {
                            ...cat,
                            favouriteId: null,
                        };
                    } else {
                        return cat;
                    }
                }),
            };
        case ActionType.GET_CATS_SUCCESS:
            return {
                ...state,
                loadedCats: true,
                loadedVotes: false,
                cats: action.payload
            };
        case ActionType.GET_VOTES_SUCCESS:
            return {
                ...state,
                loadedVotes: true,
                cats: state.cats.map((cat: cat) => {
                    const selectedVote = action.payload.find(
                        (vote: vote) => vote.image_id === cat.id
                    );
                    if (selectedVote) {
                        return { ...cat, votes: selectedVote, favouriteId: cat.favourite && cat.favourite.id ? cat.favourite.id : null };
                    } else {
                        return { ...cat, votes: 0, favouriteId: cat.favourite && cat.favourite.id ? cat.favourite.id : null };
                    }
                }),
            };
        case ActionType.UPLOAD_CAT_SUCCESS:
            return {
                ...state,
                cats: [...state.cats, action.payload],
            };
        default:
            return state;
    }
}

export default catsReducer;