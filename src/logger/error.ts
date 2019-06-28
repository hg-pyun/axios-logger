import { AxiosError } from 'axios';
import { ErrorLogConfig } from '../common/types';

function errorLogger(error: AxiosError, config: ErrorLogConfig) {
    return Promise.reject(error);
}

export default errorLogger;