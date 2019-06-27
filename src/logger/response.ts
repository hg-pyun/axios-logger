import { AxiosResponse } from 'axios';

function responseLogger(response: AxiosResponse) {
    return response;
}

export default responseLogger;