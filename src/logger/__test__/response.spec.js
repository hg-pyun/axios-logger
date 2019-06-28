import { responseLogger, setGlobalConfig } from '../../index';
import { printLog } from '../../common/print';

jest.mock('../../common/print');

const axiosResponse = {
    data: 'data',
    status: 500,
    statusText: 'internal server error',
    headers: '',
};

beforeEach(() => {
    printLog.mockClear();
});

test('response should be return immutable AxiosResponse', () => {
    const mockLogger = jest.fn(responseLogger);
    mockLogger(axiosResponse);
    expect(mockLogger).toReturnWith(axiosResponse);
});

test('if config is undefined, logger make default log', () => {
    responseLogger(axiosResponse);
    expect(printLog).toHaveBeenCalled();
    expect(printLog).toBeCalledWith(expect.stringContaining('[Axios Logger]'));
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
