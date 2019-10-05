'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports.default = void 0;

var _config = require('../common/config');

var _stringBuilder = _interopRequireDefault(require('../common/string-builder'));

var _print = require('../common/print');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function responseLogger(response, config) {
    const {
        config: { url, method },
        status,
        statusText,
        data,
        headers,
    } = response;
    const buildConfig = config ? config : (0, _config.mergeWithGlobalConfig)(config);
    const stringBuilder = new _stringBuilder.default(buildConfig);
    const log = stringBuilder
        .makePrefix('Response')
        .makeDateFormat()
        .makeUrl(url)
        .makeMethod(method)
        .makeStatus(status, statusText)
        .makeHeader(headers)
        .makeData(data)
        .build();
    (0, _print.printLog)(log);
    return response;
}

var _default = responseLogger;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dnZXIvcmVzcG9uc2UudHMiXSwibmFtZXMiOlsicmVzcG9uc2VMb2dnZXIiLCJyZXNwb25zZSIsImNvbmZpZyIsInVybCIsIm1ldGhvZCIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJkYXRhIiwiaGVhZGVycyIsImJ1aWxkQ29uZmlnIiwic3RyaW5nQnVpbGRlciIsIlN0cmluZ0J1aWxkZXIiLCJsb2ciLCJtYWtlUHJlZml4IiwibWFrZURhdGVGb3JtYXQiLCJtYWtlVXJsIiwibWFrZU1ldGhvZCIsIm1ha2VTdGF0dXMiLCJtYWtlSGVhZGVyIiwibWFrZURhdGEiLCJidWlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQUNBOzs7O0FBRUEsU0FBU0EsY0FBVCxDQUF3QkMsUUFBeEIsRUFBaURDLE1BQWpELEVBQTZFO0FBQ3pFLFFBQU07QUFBQ0EsSUFBQUEsTUFBTSxFQUFFO0FBQUNDLE1BQUFBLEdBQUQ7QUFBTUMsTUFBQUE7QUFBTixLQUFUO0FBQXdCQyxJQUFBQSxNQUF4QjtBQUFnQ0MsSUFBQUEsVUFBaEM7QUFBNENDLElBQUFBLElBQTVDO0FBQWtEQyxJQUFBQTtBQUFsRCxNQUE2RFAsUUFBbkU7QUFDQSxRQUFNUSxXQUFXLEdBQUdQLE1BQU0sR0FBR0EsTUFBSCxHQUFZLG1DQUFzQkEsTUFBdEIsQ0FBdEM7QUFFQSxRQUFNUSxhQUFhLEdBQUcsSUFBSUMsc0JBQUosQ0FBa0JGLFdBQWxCLENBQXRCO0FBQ0EsUUFBTUcsR0FBRyxHQUFHRixhQUFhLENBQ3BCRyxVQURPLENBQ0ksVUFESixFQUVQQyxjQUZPLEdBR1BDLE9BSE8sQ0FHQ1osR0FIRCxFQUlQYSxVQUpPLENBSUlaLE1BSkosRUFLUGEsVUFMTyxDQUtJWixNQUxKLEVBS1lDLFVBTFosRUFNUFksVUFOTyxDQU1JVixPQU5KLEVBT1BXLFFBUE8sQ0FPRVosSUFQRixFQVFQYSxLQVJPLEVBQVo7QUFVQSx1QkFBU1IsR0FBVDtBQUVBLFNBQU9YLFFBQVA7QUFDSDs7ZUFFY0QsYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBSZXNwb25zZUxvZ0NvbmZpZyB9IGZyb20gJy4uL2NvbW1vbi90eXBlcyc7XG5pbXBvcnQgeyBtZXJnZVdpdGhHbG9iYWxDb25maWcgfSBmcm9tICcuLi9jb21tb24vY29uZmlnJztcbmltcG9ydCBTdHJpbmdCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9zdHJpbmctYnVpbGRlcic7XG5pbXBvcnQgeyBwcmludExvZyB9IGZyb20gJy4uL2NvbW1vbi9wcmludCc7XG5cbmZ1bmN0aW9uIHJlc3BvbnNlTG9nZ2VyKHJlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlLCBjb25maWc/OiBSZXNwb25zZUxvZ0NvbmZpZykge1xuICAgIGNvbnN0IHtjb25maWc6IHt1cmwsIG1ldGhvZH0sIHN0YXR1cywgc3RhdHVzVGV4dCwgZGF0YSwgaGVhZGVyc30gPSByZXNwb25zZTtcbiAgICBjb25zdCBidWlsZENvbmZpZyA9IGNvbmZpZyA/IGNvbmZpZyA6IG1lcmdlV2l0aEdsb2JhbENvbmZpZyhjb25maWcpO1xuXG4gICAgY29uc3Qgc3RyaW5nQnVpbGRlciA9IG5ldyBTdHJpbmdCdWlsZGVyKGJ1aWxkQ29uZmlnKTtcbiAgICBjb25zdCBsb2cgPSBzdHJpbmdCdWlsZGVyXG4gICAgICAgIC5tYWtlUHJlZml4KCdSZXNwb25zZScpXG4gICAgICAgIC5tYWtlRGF0ZUZvcm1hdCgpXG4gICAgICAgIC5tYWtlVXJsKHVybClcbiAgICAgICAgLm1ha2VNZXRob2QobWV0aG9kKVxuICAgICAgICAubWFrZVN0YXR1cyhzdGF0dXMsIHN0YXR1c1RleHQpXG4gICAgICAgIC5tYWtlSGVhZGVyKGhlYWRlcnMpXG4gICAgICAgIC5tYWtlRGF0YShkYXRhKVxuICAgICAgICAuYnVpbGQoKTtcblxuICAgIHByaW50TG9nKGxvZyk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlc3BvbnNlTG9nZ2VyOyJdfQ==
