import { getGlobalConfig, getGlobalConfigWithMerge, setGlobalConfig } from '../config';

describe('unit test', () => {
    test('setGlobalConfig should set config. getGlobalConfig should return globalConfig object.', () => {
        const globalConfig = {
            data: true,
            url: true,
        };

        setGlobalConfig(globalConfig);
        expect(getGlobalConfig()).toEqual(globalConfig);
    });

    test('getGlobalConfigWithMerge should return merged with globalConfig object.', () => {
        const globalConfig = {
            data: true,
            url: true,
        };

        setGlobalConfig(globalConfig);
        const mergedConfig = getGlobalConfigWithMerge({
            dateFormat: 'hh:mm:ss',
            data: false,
        });

        expect(mergedConfig).toEqual({
            dateFormat: 'hh:mm:ss',
            data: false,
            url: true,
        });
    });
});
