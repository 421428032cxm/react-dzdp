import * as actionTypes from './actionTypes';
import { fetchHomeAdtData, fetchHomeListData } from '../../../fetch/home/home';

const homeAdAction = (data) => ({
    type: actionTypes.GET_HOME_AD_DATA,
    data
})

const homeListAction = (data, page) => ({
    type: actionTypes.GET_HOME_LIST_DATA,
    data,
    page
})

export const getHomeAdData = () => {
    return (dispatch) => {
        const result = fetchHomeAdtData();
        result.then((response) => {
            return response.json();
        }).then((json) => {
            dispatch(homeAdAction(json.advertising));
        })
    }
}

export const getHomeListData = (cityName, page, totalPage, remainder, prevList) => {
    return (dispatch) => {
        const result = fetchHomeListData(cityName, page, totalPage);
        result.then((response) => {
            return response.json();
        }).then((json) => {
            let newPrevList = prevList.slice();
            if (page < totalPage - 1) {
                for(var i = page * 5; i < 5 * (page + 1); i++) {
                    newPrevList.push(json.list.data[i]);
                }
                dispatch(homeListAction(newPrevList, page));
            }else if(page === totalPage - 1) {
                for(var j = 0; j < remainder; j++) {
                    newPrevList.push(json.list.data[5 * page + j]);
                }
                dispatch(homeListAction(newPrevList));
            }
        })
    }
}

