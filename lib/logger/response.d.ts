import { AxiosResponse } from 'axios';
import { ResponseLogConfig } from '../common/types';
declare function responseLogger(response: AxiosResponse, config?: ResponseLogConfig): AxiosResponse<any>;
export default responseLogger;
