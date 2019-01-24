import { get } from '../get';

export const fetchHomeAdtData = () => {
    return get('api/homeAd.json');
}

export const fetchHomeListData = (city, page) => {
    const result = get('/api/homelist.json?city=' + encodeURIComponent(city) + '&page=' + page);
    return result;
}