import * as actionTypes from './actionTypes';

const defaultState = {
    cityName: '北京'
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_CITYNAME:
            let newState = JSON.parse(JSON.stringify(state));
            newState.cityName = action.data
            return newState;
        default:
            return state
    }
}