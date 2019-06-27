import { AxiosError } from 'axios';

function errorLogger(error: AxiosError) {
    return Promise.reject(error);
}

export default errorLogger;