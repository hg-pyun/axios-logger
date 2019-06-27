import { AxiosRequestConfig } from 'axios';

function requestLogger(request: AxiosRequestConfig) {
    return request;
}

export default requestLogger;