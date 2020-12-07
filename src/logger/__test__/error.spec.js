import { setGlobalConfig } from '../../index';
import { errorLoggerWithoutPromise } from '../error';
import { globalConfig } from '../../common/config';
import { toCalledWith, toNotCalledWith } from './testUtil';

const printLog = jest.fn();
const clonedGlobalConfig = { ...globalConfig, ...{ logger: printLog } };

const axiosError = {
    code: 500,
    config: {
        method: 'GET',
        url: 'https://github.com/hg-pyun',
    },
    response: {
        data: 'dummy data',
        status: 500,
        statusText: 'internal server error',
        headers: '',
    },
};
describe('ErrorLogger', () => {
    beforeEach(() => {
        printLog.mockClear();
        setGlobalConfig(clonedGlobalConfig);
    });

    test('response should be return immutable axiosError', () => {
        const mockLogger = jest.fn(errorLoggerWithoutPromise);
        mockLogger(axiosError);
        expect(mockLogger).toReturnWith(axiosError);
    });

    test('if config is undefined, logger make default log', () => {
        const {
            config: { url, method },
            response: { data, status, statusText },
        } = axiosError;

        errorLoggerWithoutPromise(axiosError);
        expect(printLog).toHaveBeenCalled();
        toCalledWith(printLog, '[Axios][Error]');
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
        errorLoggerWithoutPromise(axiosError);
        expect(printLog).toHaveBeenCalled();
        toCalledWith(printLog, '[global custom prefix]');
    });

    test('if local config is defined only, logger make log with options', () => {
        const localConfig = {
            prefixText: '[local custom prefix]',
        };

        errorLoggerWithoutPromise(axiosError, localConfig);
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
        errorLoggerWithoutPromise(axiosError, localConfig);
        expect(printLog).toHaveBeenCalled();
        toCalledWith(printLog, '[local custom prefix]');
    });

    test('if prefixText is false, remove prefix', () => {
        const globalConfig = {
            prefixText: false,
        };

        setGlobalConfig(globalConfig);
        errorLoggerWithoutPromise(axiosError);
        expect(printLog).toHaveBeenCalled();
        toNotCalledWith(printLog, '[Axios]');
    });
});
