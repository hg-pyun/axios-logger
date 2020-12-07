import { requestLogger, responseLogger, setGlobalConfig } from '../../index';

import { globalConfig } from '../../common/config';
import { toCalledWith, toNotCalledWith } from './testUtil';

const printLog = jest.fn();
const clonedGlobalConfig = { ...globalConfig, ...{ logger: printLog } };

const axiosResponse = {
    config: {
        url: 'https://github.com/hg-pyun',
        method: 'GET',
    },
    data: 'dummy data',
    status: 500,
    statusText: 'internal server error',
    headers: '',
};
describe('ResponseLogger', () => {
    beforeEach(() => {
        printLog.mockClear();
        setGlobalConfig(clonedGlobalConfig);
    });

    test('response should be return immutable AxiosResponse', () => {
        const mockLogger = jest.fn(responseLogger);
        mockLogger(axiosResponse);
        expect(mockLogger).toReturnWith(axiosResponse);
    });

    test('if config is undefined, logger make default log', () => {
        const {
            status,
            statusText,
            data,
            config: { url, method },
        } = axiosResponse;

        responseLogger(axiosResponse);
        expect(printLog).toHaveBeenCalled();
        toCalledWith(printLog, '[Axios][Response]');
        toCalledWith(printLog, method);
        toCalledWith(printLog, url);
        toCalledWith(printLog, `${status}:${statusText}`);
        toCalledWith(printLog, data);
    });

    test('if global config is defined only, logger make log with options', () => {
        const globalConfig = {
            prefixText: '[global custom prefix]',
        };

        setGlobalConfig(globalConfig);
        responseLogger(axiosResponse);
        expect(printLog).toHaveBeenCalled();
        toCalledWith(printLog, '[global custom prefix]');
    });

    test('if local config is defined only, logger make log with options', () => {
        const localConfig = {
            prefixText: '[local custom prefix]',
        };

        responseLogger(axiosResponse, localConfig);
        expect(printLog).toHaveBeenCalled();
        toCalledWith(printLog, '[local custom prefix]');
    });

    test('if both global and local config are defined, local config should override global config', () => {
        const globalConfig = {
            prefixText: '[global custom prefix]',
        };

        const localConfig = {
            prefixText: '[local custom prefix]',
        };

        setGlobalConfig(globalConfig);
        responseLogger(axiosResponse, localConfig);
        expect(printLog).toHaveBeenCalled();
        toCalledWith(printLog, '[local custom prefix]');
    });

    test('if prefixText is false, remove prefix', () => {
        const globalConfig = {
            prefixText: false,
        };

        setGlobalConfig(globalConfig);
        responseLogger(axiosResponse);
        expect(printLog).toHaveBeenCalled();
        toNotCalledWith(printLog, '[Axios]');
    });

    test('Should log with custom function', () => {
        const globalConfig = {
            prefixText: '[global custom prefix]',
        };

        const customLogger = jest.fn();
        const localConfig = {
            logger: customLogger,
        };

        responseLogger(axiosRequestConfig, localConfig);
        expect(customLogger).toHaveBeenCalled();
    });
});
