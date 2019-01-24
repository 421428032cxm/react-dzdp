import { combineReducers } from 'redux';
import homeData from '../containers/Home/store/reducer';
import userInfo from '../containers/User/store/reducer';
import cityData from '../containers/City/store/reducer';
import searchData from '../containers/Search/store/reducer';
import sellerData from '../containers/Detail/store/reducer';

const reducer = combineReducers({
    homeData: homeData,
    cityData: cityData,
    searchData: searchData,
    sellerData: sellerData,
    userInfo: userInfo
})

export default reducer;