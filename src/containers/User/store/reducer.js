import * as actionTypes from './actionTypes';

const defaultState = {
    login: false
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.USERINFO_UPDATE:
            return action.data;
        default:
            return state
    }
}