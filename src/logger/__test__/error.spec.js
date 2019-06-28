import { setGlobalConfig } from '../../index';
import { printLog } from '../../common/print';
import { errorLoggerWithoutPromise } from '../error';

jest.mock('../../common/print');

const axiosError = {
    code: 500,
};

beforeEach(() => {
    printLog.mockClear();
});

test('response should be return immutable axiosError', () => {
    const mockLogger = jest.fn(errorLoggerWithoutPromise);
    mockLogger(axiosError);
    expect(mockLogger).toReturnWith(axiosError);
});

test('if config is undefined, logger make default log', () => {
    errorLoggerWithoutPromise(axiosError);
    expect(printLog).toHaveBeenCalled();
    expect(printLog).toBeCalledWith(expect.stringContaining('[Axios Logger]'));
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
