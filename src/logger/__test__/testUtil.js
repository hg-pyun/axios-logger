export function toCalledWith(method, str, expected = true) {
    const lastMockApiCall = method.mock.calls[method.mock.calls.length - 1];
    const apiCallParams = lastMockApiCall[0];
    if (!expected) {
        expect(apiCallParams.includes(str)).toBeFalsy();
    } else {
        expect(apiCallParams.includes(str)).toBeTruthy();
    }
}

export function toNotCalledWith(method, str) {
    return toCalledWith(method, str, false);
}
