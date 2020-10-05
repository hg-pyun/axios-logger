import { setGlobalConfig } from '../../index';
import { printError } from '../../common/print';
import { errorLoggerWithoutPromise } from '../error';

jest.mock('../../common/print');

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
    printError.mockClear();
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
    expect(printError).toHaveBeenCalled();
    expect(printError).toBeCalledWith(expect.stringContaining('[Axios][Error]'));
    expect(printError).toBeCalledWith(expect.stringContaining(method));
    expect(printError).toBeCalledWith(expect.stringContaining(url));
    expect(printError).toBeCalledWith(expect.stringContaining(`${status}:${statusText}`));
    expect(printError).toBeCalledWith(expect.stringContaining(data));
});

test('if global config is defined only, logger make log with options', () => {
    const globalConfig = {
        prefixText: '[global custom prefix]',
    };

    setGlobalConfig(globalConfig);
    errorLoggerWithoutPromise(axiosError);
    expect(printError).toHaveBeenCalled();
    expect(printError).toBeCalledWith(expect.stringContaining('[global custom prefix]'));
});

test('if local config is defined only, logger make log with options', () => {
    const localConfig = {
        prefixText: '[local custom prefix]',
    };

    errorLoggerWithoutPromise(axiosError, localConfig);
    expect(printError).toHaveBeenCalled();
    expect(printError).toBeCalledWith(expect.stringContaining('[local custom prefix]'));
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
    expect(printError).toHaveBeenCalled();
    expect(printError).toBeCalledWith(expect.stringContaining('[local custom prefix]'));
});

test('if prefixText is false, remove prefix', () => {
    const globalConfig = {
        prefixText: false,
    };

    setGlobalConfig(globalConfig);
    errorLoggerWithoutPromise(axiosError);
    expect(printError).toHaveBeenCalled();
    expect(printError).toBeCalledWith(expect.not.stringContaining('[Axios]'));
});
