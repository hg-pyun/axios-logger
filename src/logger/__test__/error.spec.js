import { setGlobalConfig } from '../../index';
import { errorLoggerWithoutPromise } from '../error';

const printLog = jest.fn(() => {});

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

beforeEach(() => {
    printLog.mockClear();
    setGlobalConfig({ logger: printLog });
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
    expect(printLog).toBeCalledWith(expect.stringContaining('[Axios][Error]'));
    expect(printLog).toBeCalledWith(expect.stringContaining(method));
    expect(printLog).toBeCalledWith(expect.stringContaining(url));
    expect(printLog).toBeCalledWith(expect.stringContaining(`${status}:${statusText}`));
    expect(printLog).toBeCalledWith(expect.stringContaining(data));
});

test('if global config is defined only, logger make log with options', () => {
    const globalConfig = {
        prefixText: '[global custom prefix]',
    };

    setGlobalConfig(globalConfig);
    errorLoggerWithoutPromise(axiosError);
    expect(printLog).toHaveBeenCalled();
    expect(printLog).toBeCalledWith(expect.stringContaining('[global custom prefix]'));
});

test('if local config is defined only, logger make log with options', () => {
    const localConfig = {
        prefixText: '[local custom prefix]',
    };

    errorLoggerWithoutPromise(axiosError, localConfig);
    expect(printLog).toHaveBeenCalled();
    expect(printLog).toBeCalledWith(expect.stringContaining('[local custom prefix]'));
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
    expect(printLog).toBeCalledWith(expect.stringContaining('[local custom prefix]'));
});

test('if prefixText is false, remove prefix', () => {
    const globalConfig = {
        prefixText: false,
    };

    setGlobalConfig(globalConfig);
    errorLoggerWithoutPromise(axiosError);
    expect(printLog).toHaveBeenCalled();
    expect(printLog).toBeCalledWith(expect.not.stringContaining('[Axios]'));
});

test('if custom logger is respected', () => {
    const customPrintLog = jest.fn(() => {});

    errorLoggerWithoutPromise(axiosError, { logger: customPrintLog });
    expect(printLog).not.toHaveBeenCalled();
    expect(customPrintLog).toHaveBeenCalled();
});

test('if baseUrl is taken into consideration', () => {
    errorLoggerWithoutPromise({
        ...axiosError,
        config: {
            ...axiosError.config,
            baseURL: 'https://github.com/',
            url: '/hg-pyun',
        },
    });
    expect(printLog).toHaveBeenCalled();
    expect(printLog).toBeCalledWith(expect.stringContaining(axiosError.config.url));
});
