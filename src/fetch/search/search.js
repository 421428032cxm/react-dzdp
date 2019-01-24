import { get } from '../get';

export const fetchSearchResult = (page, cityName, type, keyword) => {
    const result = get('/api/searchResult.json');
    return result;
}