import { get } from '../get';

export const fetchSellerInfo = () => {
    const result = get('/api/food.json');
    return result;
}