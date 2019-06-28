import { AxiosError } from 'axios';
import { ErrorLogConfig } from '../common/types';
declare function errorLoggerWithoutPromise(error: AxiosError, config?: ErrorLogConfig): AxiosError;
declare function errorLogger(error: AxiosError): Promise<never>;
export { errorLogger, errorLoggerWithoutPromise };
