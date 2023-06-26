 
import axios from 'axios';
import { endpoint } from '../configs/endpoint';

export const getTop20SOFUsers = async () => {
    const endPoint = endpoint.baseUrl;
    try {
        let res = await axios.get(endPoint);
        return res.data;
    } catch (error) {
        throw new Error();
    }
};