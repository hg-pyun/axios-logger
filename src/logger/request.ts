import { AxiosRequestConfig } from 'axios';
import { RequestLogConfig } from '../common/types';

function requestLogger(request: AxiosRequestConfig, config: RequestLogConfig) {

    return request;
}

export default requestLogger;