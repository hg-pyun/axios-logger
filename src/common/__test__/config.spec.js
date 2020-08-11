import { getGlobalConfig, assembleBuildConfig, setGlobalConfig } from '../config';

const DEFAULT_PREFIX = 'Axios';

test('Default globalConfig properties should match the expected (and documented) values', () => {
    expect(getGlobalConfig()).toEqual({
        method: true,
        url: true,
        data: true,
        status: true,
        prefixText: DEFAULT_PREFIX,
        headers: false,
    });
});

test('setGlobalConfig should set config. getGlobalConfig should return globalConfig object.', () => {
    const globalConfig = {
        data: true,
        url: false,
    };

    setGlobalConfig(globalConfig);
    expect(getGlobalConfig()).toEqual({
        method: true,
        url: false,
        data: true,
        status: true,
        prefixText: DEFAULT_PREFIX,
        headers: false,
    });
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
        method: true,
        url: true,
        data: false,
        status: true,
        prefixText: DEFAULT_PREFIX,
        headers: false,
    });
});
