import { RootFetch, Slip } from './adviceSlipModels';
import { axiosBase } from './axiosBase';

export const adviceSlipFetch = async() => {
    let data: Slip = {};

    try {
        
        const resp = await axiosBase.get<RootFetch>('/advice');
        const { advice, id } = resp.data.slip;
        data = {
            id, 
            advice
        };
 

    } catch (error) {
        console.log(`Something went wrong: ${ error }`);
    }

    return data;
}