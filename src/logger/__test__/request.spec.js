import { requestLogger, setGlobalConfig } from '../../index';
import { printLog } from '../../common/print';

jest.mock('../../common/print');

const axiosRequestConfig = {
    data: 'dummy',
};

beforeEach(() => {
    printLog.mockClear();
});

test('request should be return immutable AxiosRequestConfig', () => {
    const mockLogger = jest.fn(requestLogger);
    mockLogger(axiosRequestConfig);
    expect(mockLogger).toReturnWith(axiosRequestConfig);
});

test('if config is undefined, logger make default log', () => {
    requestLogger(axiosRequestConfig);
    expect(printLog).toHaveBeenCalled();
    expect(printLog).toBeCalledWith(expect.stringContaining('[Axios Logger]'));
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
