import { AxiosResponse } from 'axios';
import { ResponseLogConfig } from '../common/types';

function responseLogger(response: AxiosResponse, config: ResponseLogConfig) {
    return response;
}

export default responseLogger;