import StringBuilder from '../string-builder';
import { getGlobalConfig } from '../config';

test('makeLogTypeWithPrefix should add prefix text', () => {
    const sb = new StringBuilder(getGlobalConfig());
    const result = sb.makeLogTypeWithPrefix('Request').build();

    expect(result).toContain('[Axios][Request]');
});

test('makeDateFormat should add date', () => {
    const sb = new StringBuilder({
        dateFormat: 'yyyy',
    });
    const date = new Date();
    const result = sb.makeDateFormat(date).build();

    expect(result).toContain(date.getFullYear().toString());
});

test('makeDateFormat with dateFormat = false, does not add the timestamp', () => {
    const sb = new StringBuilder({
        dateFormat: false,
    });
    const date = new Date();
    const result = sb.makeDateFormat(date).build();

    expect(result).toBe('');
});

test('makeHeaders should add headers', () => {
    const sb = new StringBuilder({
        headers: true,
    });

    const headers = {
        'foo-header': 'foo',
        'bar-header': 'bar',
    };

    const result = sb.makeHeader(headers).build();

    expect(result).toContain(JSON.stringify(headers));
});

test('makeUrl should add url', () => {
    const sb = new StringBuilder(getGlobalConfig());
    const result = sb.makeUrl('https://github.com/hg-pyun').build();

    expect(result).toContain('https://github.com/hg-pyun');
});

test('makeParams should add params', () => {
    const sb = new StringBuilder({ params: true });
    const params = { param1: 'value1', param2: 'value2' };
    const result = sb.makeParams(params).build();

    expect(result).toContain(JSON.stringify(params));
});

test('makeParams should add params URLSearchParams', () => {
    const sb = new StringBuilder({ params: true });
    const data = new URLSearchParams({ param1: 'value1', param2: 'value2' });
    const result = sb.makeParams(data).build();

    expect(result).toContain(JSON.stringify(data));
});

test('makeMethod should add method with upper case', () => {
    const sb = new StringBuilder(getGlobalConfig());
    const result = sb.makeMethod('get').build();

    expect(result).toContain('GET');
});

test('makeStatus should add status', () => {
    const sb = new StringBuilder(getGlobalConfig());
    const result = sb.makeStatus(200, 'OK').build();

    expect(result).toContain('200:OK');
});

test('makeData should string if URLSearchParams passed', () => {
    const data = new URLSearchParams({ param1: 'value1', param2: 'value2' });
    const sb = new StringBuilder(getGlobalConfig());
    const result = sb.makeData(data).build();
    expect(result).toContain(JSON.stringify(data));
});

test('makeData should not stringify data if configured not to', () => {
    const config = {
        ...getGlobalConfig(),
        data: false,
    };
    const a = {};
    const b = {};
    a.b = b;
    b.a = a;
    const sb = new StringBuilder(config);
    const result = sb.makeData(a).build();
    expect(result).toEqual('');
});

test('combineURLs should combine the base URL with the relative URL', () => {
    const sb = new StringBuilder(getGlobalConfig());
    const result = sb.combineURLs('https://github.com', '/users/hg-pyun');

    expect(result).toBe('https://github.com/users/hg-pyun');
});

test(`combineURLs should not combine the base and relative URL's if the relative one is a complete URL`, () => {
    const sb = new StringBuilder(getGlobalConfig());
    const result = sb.combineURLs('https://github.com', 'https://github.com/users/hg-pyun');

    expect(result).toBe('https://github.com/users/hg-pyun');
});

test('combineURLs should return the base URL when the relative URL is empty', () => {
    const sb = new StringBuilder(getGlobalConfig());
    const result = sb.combineURLs('https://github.com', '');

    expect(result).toBe('https://github.com');
});

test('combineURLs should return the relative URL when the base URL is empty', () => {
    const sb = new StringBuilder(getGlobalConfig());
    const result = sb.combineURLs('', 'https://github.com/users/hg-pyun');

    expect(result).toBe('https://github.com/users/hg-pyun');
});

test('combineURLs should return the relative URL when the base URL is undefined', () => {
    const sb = new StringBuilder(getGlobalConfig());
    const result = sb.combineURLs(undefined, 'https://github.com/users/hg-pyun');

    expect(result).toBe('https://github.com/users/hg-pyun');
});

test('combineURLs should return the relative URL when the base URL have a path', () => {
    const sb = new StringBuilder(getGlobalConfig());
    const result = sb.combineURLs('https://github.com/users', '/hg-pyun');

    expect(result).toBe('https://github.com/users/hg-pyun');
});

test('combineURLs should return the relative URL when the base URL have a complex path', () => {
    const sb = new StringBuilder(getGlobalConfig());
    const result = sb.combineURLs('https://github.com/foo/bar/', '//hg-pyun');

    expect(result).toBe('https://github.com/foo/bar/hg-pyun');
});
