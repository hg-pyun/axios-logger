import { getGlobalConfig, assembleBuildConfig, setGlobalConfig } from '../config';

test('Default globalConfig properties should be all true', () => {
    expect(getGlobalConfig()).toEqual({
        url: true,
        method: true,
        data: true,
        status: true,
    });
});

test('setGlobalConfig should set config. getGlobalConfig should return globalConfig object.', () => {
    const globalConfig = {
        data: true,
        url: true,
    };

    setGlobalConfig(globalConfig);
    expect(getGlobalConfig()).toEqual(globalConfig);
});

test('assembleBuildConfig should return merged with globalConfig object.', () => {
    const globalConfig = {
        data: true,
        url: true,
    };

    setGlobalConfig(globalConfig);
    const buildConfig = assembleBuildConfig({
        dateFormat: 'hh:mm:ss',
        data: false,
    });

    expect(buildConfig).toEqual({
        dateFormat: 'hh:mm:ss',
        data: false,
        url: true,
    });
});
