import { requestLogger, setGlobalConfig } from '../../index';

import { globalConfig } from '../../common/config';
import { toCalledWith, toNotCalledWith } from './testUtil';

const printLog = jest.fn();
const clonedGlobalConfig = { ...globalConfig, ...{ logger: printLog } };

const axiosRequestConfig = {
    data: {
        id: 1,
        text: 'this is dummy log',
    },
    method: 'GET',
    url: 'https://github.com/hg-pyun',
};

describe('RequestLogger', () => {
    beforeEach(() => {
        printLog.mockClear();
        setGlobalConfig(clonedGlobalConfig);
    });

    test('request should be return immutable AxiosRequestConfig', () => {
        const mockLogger = jest.fn(requestLogger);
        mockLogger(axiosRequestConfig);
        expect(mockLogger).toReturnWith(axiosRequestConfig);
    });

    test('if config is undefined, logger make default log', () => {
        requestLogger(axiosRequestConfig);

        expect(printLog).toHaveBeenCalled();
        toCalledWith(printLog, '[Axios][Request]');
        toCalledWith(printLog, axiosRequestConfig.method);
        toCalledWith(printLog, axiosRequestConfig.url);
        toCalledWith(printLog, JSON.stringify(axiosRequestConfig.data));
    });

    test('if global config is defined only, logger make log with options', () => {
        const globalConfig = {
            prefixText: '[global custom prefix]',
        };

        setGlobalConfig(globalConfig);
        requestLogger(axiosRequestConfig);
        expect(printLog).toHaveBeenCalled();
        toCalledWith(printLog, '[global custom prefix]');
    });

    test('if local config is defined only, logger make log with options', () => {
        const localConfig = {
            prefixText: '[local custom prefix]',
        };

        requestLogger(axiosRequestConfig, localConfig);
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

        requestLogger(axiosRequestConfig, localConfig);
        expect(printLog).toHaveBeenCalled();
        toCalledWith(printLog, '[local custom prefix]');
    });

    test('if prefixText is false, remove prefix', () => {
        const globalConfig = {
            prefixText: false,
        };

        setGlobalConfig(globalConfig);
        requestLogger(axiosRequestConfig);
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

        requestLogger(axiosRequestConfig, localConfig);
        expect(customLogger).toHaveBeenCalled();
    });
});
