import { combineReducers } from 'redux';
import catsReducer from './catsReducer';

const reducers = combineReducers({
    catsReducer: catsReducer
})

export default reducers;

export type State = ReturnType<typeof reducers>