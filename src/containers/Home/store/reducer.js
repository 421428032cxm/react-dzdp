import * as actionTypes from './actionTypes';

const defaultState = {
    advertising: [],
    list: [],
    page: 0,
    totalPage: 6,
    remainder: 3
}

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch(action.type) {
        case actionTypes.GET_HOME_AD_DATA:
            newState.advertising = action.data;
            return newState;
        case actionTypes.GET_HOME_LIST_DATA:
            newState.list = action.data;
            newState.page = action.page;
            return newState;
        default:
            return state
    }
}