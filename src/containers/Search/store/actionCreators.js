import * as actionTypes from './actionTypes';
import { fetchSearchResult } from '../../../fetch/search/search';

const searchResultAction = (data) => ({
    type: actionTypes.GET_SEARCH_RESULT_DATA,
    data
})

export const getSearchResult = (page, cityName, type, keyword) => {
    return (dispatch) => {
        const result = fetchSearchResult(page, cityName, type, keyword);
        result.then((response) => {
            return response.json();
        }).then((json) => {
            console.log(json);
            dispatch(searchResultAction(json.data))
        })
    }
}

