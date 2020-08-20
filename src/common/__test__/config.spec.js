import { getGlobalConfig, assembleBuildConfig, setGlobalConfig } from '../config';

const customLoggerFunction = console.info;

test('Default globalConfig properties should be all true + console should be the logger', () => {
    expect(getGlobalConfig()).toEqual({
        method: true,
        url: true,
        data: true,
        status: true,
        logger: console.log,
    });
});

test('setGlobalConfig should set config. getGlobalConfig should return globalConfig object.', () => {
    const globalConfig = {
        data: true,
        url: false,
        logger: customLoggerFunction,
    };

    setGlobalConfig(globalConfig);
    expect(getGlobalConfig()).toEqual({
        method: true,
        url: false,
        data: true,
        status: true,
        logger: customLoggerFunction,
    });
});

test('assembleBuildConfig should return merged with globalConfig object.', () => {
    const globalConfig = {
        data: true,
        url: true,
        logger: console.log,
    };

    setGlobalConfig(globalConfig);
    const buildConfig = assembleBuildConfig({
        dateFormat: 'hh:mm:ss',
        data: false,
    });

    expect(buildConfig).toEqual({
        dateFormat: 'hh:mm:ss',
        method: true,
        url: true,
        data: false,
        status: true,
        logger: console.log,
    });
});
