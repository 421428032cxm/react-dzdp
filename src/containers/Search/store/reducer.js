import * as actionTypes from './actionTypes';

const defaultState = {
    data: []
}

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch(action.type) {
        case actionTypes.GET_SEARCH_RESULT_DATA:
            newState.data = action.data;
            return newState;
        default:
            return state
    }
}