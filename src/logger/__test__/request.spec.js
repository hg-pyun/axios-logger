import { requestLogger, setGlobalConfig } from '../../index';
import chalk from 'chalk';

const printLog = jest.fn(() => {});

const axiosRequestConfig = {
    data: {
        id: 1,
        text: 'this is dummy log',
    },
    method: 'GET',
    url: 'https://github.com/hg-pyun',
};

beforeEach(() => {
    printLog.mockClear();
    setGlobalConfig({ logger: printLog });
});

test('request should be return immutable AxiosRequestConfig', () => {
    const mockLogger = jest.fn(requestLogger);
    mockLogger(axiosRequestConfig);
    expect(mockLogger).toReturnWith(axiosRequestConfig);
});

test('if config is undefined, logger make default log', () => {
    requestLogger(axiosRequestConfig);
    expect(printLog).toHaveBeenCalled();
    expect(printLog).toBeCalledWith(expect.stringContaining('[Axios][Request]'));
    expect(printLog).toBeCalledWith(expect.stringContaining(axiosRequestConfig.method));
    expect(printLog).toBeCalledWith(expect.stringContaining(axiosRequestConfig.url));
    expect(printLog).toBeCalledWith(expect.stringContaining(JSON.stringify(axiosRequestConfig.data)));
});

test('if global config is defined only, logger make log with options', () => {
    const globalConfig = {
        prefixText: '[global custom prefix]',
    };

    setGlobalConfig(globalConfig);
    requestLogger(axiosRequestConfig);
    expect(printLog).toHaveBeenCalled();
    expect(printLog).toBeCalledWith(expect.stringContaining('[global custom prefix]'));
});

test('if local config is defined only, logger make log with options', () => {
    const localConfig = {
        prefixText: '[local custom prefix]',
    };

    requestLogger(axiosRequestConfig, localConfig);
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
    requestLogger(axiosRequestConfig, localConfig);
    expect(printLog).toHaveBeenCalled();
    expect(printLog).toBeCalledWith(expect.stringContaining('[local custom prefix]'));
});

test('if prefixText is false, remove prefix', () => {
    const globalConfig = {
        prefixText: false,
    };

    setGlobalConfig(globalConfig);
    requestLogger(axiosRequestConfig);
    expect(printLog).toHaveBeenCalled();
    expect(printLog).toBeCalledWith(expect.not.stringContaining('[Axios]'));
});

test('if custom logger is respected', () => {
    const customPrintLog = jest.fn(() => {});

    requestLogger(axiosRequestConfig, { logger: customPrintLog });
    expect(printLog).not.toHaveBeenCalled();
    expect(customPrintLog).toHaveBeenCalled();
});

test('if baseUrl is taken into consideration', () => {
    requestLogger({ ...axiosRequestConfig, baseURL: 'https://github.com/', url: '/hg-pyun' });
    expect(printLog).toHaveBeenCalled();
    expect(printLog).toBeCalledWith(expect.stringContaining(axiosRequestConfig.url));
});

test('test a full request', () => {
    const globalConfig = {
        prefixText: 'TEST',
        dateFormat: 'dd-mm-yyyy HH:MM:ss.l',
        status: true,
        method: true,
        headers: true,
        data: true,
        traceId: '1324567890987654321',
    };

    setGlobalConfig(globalConfig);
    requestLogger({ ...axiosRequestConfig, baseURL: 'https://github.com/', url: '/hg-pyun' });
    expect(printLog).toHaveBeenCalled();
    expect(printLog).toBeCalledWith(expect.stringContaining('[TEST]'));
    expect(printLog).toBeCalledWith(expect.stringContaining('[Request]'));
    expect(printLog).toBeCalledWith(expect.stringContaining(`[${chalk.blue('1324567890987654321')}]`));
    expect(printLog).toBeCalledWith(
        expect.stringMatching(
            new RegExp(
                /\[[01]?\d-(([0-2]?\d)|([3][01]))-((199\d)|([2-9]\d{3})) ([0-1]\d|[2][0-3]):([0-5]\d):([0-5]\d).(\d{0,3})\]/
            )
        )
    );
    expect(printLog).toBeCalledWith(expect.stringContaining(axiosRequestConfig.method));
    expect(printLog).toBeCalledWith(expect.stringContaining(axiosRequestConfig.url));
    expect(printLog).toBeCalledWith(expect.stringContaining(JSON.stringify(axiosRequestConfig.data)));
});
