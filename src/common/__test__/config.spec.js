import { getGlobalConfig, mergeWithGlobalConfig, setGlobalConfig } from '../config';

test('setGlobalConfig should set config. getGlobalConfig should return globalConfig object.', () => {
    const globalConfig = {
        data: true,
        url: true,
    };

    setGlobalConfig(globalConfig);
    expect(getGlobalConfig()).toEqual(globalConfig);
});

test('mergeWithGlobalConfig should return merged with globalConfig object.', () => {
    const globalConfig = {
        data: true,
        url: true,
    };

    setGlobalConfig(globalConfig);
    const mergedConfig = mergeWithGlobalConfig({
        dateFormat: 'hh:mm:ss',
        data: false,
    });

    expect(mergedConfig).toEqual({
        dateFormat: 'hh:mm:ss',
        data: false,
        url: true,
    });
});
