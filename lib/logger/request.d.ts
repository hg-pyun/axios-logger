import { AxiosRequestConfig } from 'axios';
import { RequestLogConfig } from '../common/types';
declare function requestLogger(request: AxiosRequestConfig, config?: RequestLogConfig): AxiosRequestConfig;
export default requestLogger;
