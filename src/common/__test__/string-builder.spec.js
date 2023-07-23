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

    expect(result).toContain(date.getFullYear());
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

test('makeData should truncate if data length exceeds dataLimit', () => {
    const config = {
        ...getGlobalConfig(),
        data: true,
        dataLimit: 10,
    };
    const a = '12345678901234567890';
    const sb = new StringBuilder(config);
    const result = sb.makeData(a).build();
    expect(result).toEqual('1234567890...');
});

test('makeData should not truncate if dataLimit is not specified', () => {
    const config = {
        ...getGlobalConfig(),
        data: true,
    };
    const a = '12345678901234567890';
    const sb = new StringBuilder(config);
    const result = sb.makeData(a).build();
    expect(result).toEqual(a);
});

test('makeData should not crash if data has circular references', () => {
    const config = {
        ...getGlobalConfig(),
        data: true,
    };
    const a = {};
    a.b = { a };
    const sb = new StringBuilder(config);
    const result = sb.makeData(a).build();
    expect(result).toEqual('');
});
