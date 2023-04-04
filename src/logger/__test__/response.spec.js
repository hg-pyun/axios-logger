import { responseLogger, setGlobalConfig } from '../../index';
import chalk from 'chalk';

const printLog = jest.fn(() => {});

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

beforeEach(() => {
    printLog.mockClear();
    setGlobalConfig({ logger: printLog });
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
    expect(printLog).toBeCalledWith(expect.stringContaining('[Axios][Response]'));
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
    responseLogger(axiosResponse);
    expect(printLog).toHaveBeenCalled();
    expect(printLog).toBeCalledWith(expect.stringContaining('[global custom prefix]'));
});

test('if local config is defined only, logger make log with options', () => {
    const localConfig = {
        prefixText: '[local custom prefix]',
    };

    responseLogger(axiosResponse, localConfig);
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
    responseLogger(axiosResponse, localConfig);
    expect(printLog).toHaveBeenCalled();
    expect(printLog).toBeCalledWith(expect.stringContaining('[local custom prefix]'));
});

test('if prefixText is false, remove prefix', () => {
    const globalConfig = {
        prefixText: false,
    };

    setGlobalConfig(globalConfig);
    responseLogger(axiosResponse);
    expect(printLog).toHaveBeenCalled();
    expect(printLog).toBeCalledWith(expect.not.stringContaining('[Axios]'));
});

test('if custom logger is respected', () => {
    const customPrintLog = jest.fn(() => {});

    responseLogger(axiosResponse, { logger: customPrintLog });
    expect(printLog).not.toHaveBeenCalled();
    expect(customPrintLog).toHaveBeenCalled();
});

test('if baseUrl is taken into consideration', () => {
    responseLogger({
        ...axiosResponse,
        config: { ...axiosResponse.config, baseURL: 'https://github.com/', url: '/hg-pyun' },
    });
    expect(printLog).toHaveBeenCalled();
    expect(printLog).toBeCalledWith(expect.stringContaining(axiosResponse.config.url));
});

test('test a full response', () => {
    const globalConfig = {
        prefixText: 'TEST',
        dateFormat: 'dd-mm-yyyy HH:MM:ss.l',
        status: true,
        method: true,
        headers: true,
        data: true,
        traceId: '1324567890987654321',
    };

    const {
        status,
        statusText,
        data,
        config: { url, method },
    } = axiosResponse;

    setGlobalConfig(globalConfig);
    responseLogger(axiosResponse);
    expect(printLog).toHaveBeenCalled();
    expect(printLog).toBeCalledWith(expect.stringContaining('[TEST]'));
    expect(printLog).toBeCalledWith(expect.stringContaining('[Response]'));
    expect(printLog).toBeCalledWith(expect.stringContaining(`[${chalk.blue('1324567890987654321')}]`));
    expect(printLog).toBeCalledWith(
        expect.stringMatching(
            new RegExp(
                /\[[01]?\d-(([0-2]?\d)|([3][01]))-((199\d)|([2-9]\d{3})) ([0-1]\d|[2][0-3]):([0-5]\d):([0-5]\d).(\d{0,3})\]/
            )
        )
    );
    expect(printLog).toBeCalledWith(expect.stringContaining(method));
    expect(printLog).toBeCalledWith(expect.stringContaining(url));
    expect(printLog).toBeCalledWith(expect.stringContaining(`${status}:${statusText}`));
    expect(printLog).toBeCalledWith(expect.stringContaining(data));
});
