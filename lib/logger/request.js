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

function requestLogger(request, config) {
    const { url, method, data, headers } = request;
    const buildConfig = (0, _config.assembleBuildConfig)(config);
    const stringBuilder = new _stringBuilder.default(buildConfig);
    const log = stringBuilder
        .makeLogTypeWithPrefix('Request')
        .makeDateFormat(new Date())
        .makeUrl(url)
        .makeMethod(method)
        .makeHeader(headers)
        .makeData(data)
        .build();
    (0, _print.printLog)(log);
    return request;
}

var _default = requestLogger;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dnZXIvcmVxdWVzdC50cyJdLCJuYW1lcyI6WyJyZXF1ZXN0TG9nZ2VyIiwicmVxdWVzdCIsImNvbmZpZyIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJoZWFkZXJzIiwiYnVpbGRDb25maWciLCJzdHJpbmdCdWlsZGVyIiwiU3RyaW5nQnVpbGRlciIsImxvZyIsIm1ha2VMb2dUeXBlV2l0aFByZWZpeCIsIm1ha2VEYXRlRm9ybWF0IiwiRGF0ZSIsIm1ha2VVcmwiLCJtYWtlTWV0aG9kIiwibWFrZUhlYWRlciIsIm1ha2VEYXRhIiwiYnVpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7OztBQUVBLFNBQVNBLGFBQVQsQ0FBdUJDLE9BQXZCLEVBQW9EQyxNQUFwRCxFQUErRTtBQUUzRSxRQUFNO0FBQUNDLElBQUFBLEdBQUQ7QUFBTUMsSUFBQUEsTUFBTjtBQUFjQyxJQUFBQSxJQUFkO0FBQW9CQyxJQUFBQTtBQUFwQixNQUErQkwsT0FBckM7QUFDQSxRQUFNTSxXQUFXLEdBQUcsaUNBQW9CTCxNQUFwQixDQUFwQjtBQUVBLFFBQU1NLGFBQWEsR0FBRyxJQUFJQyxzQkFBSixDQUFrQkYsV0FBbEIsQ0FBdEI7QUFDQSxRQUFNRyxHQUFHLEdBQUdGLGFBQWEsQ0FDcEJHLHFCQURPLENBQ2UsU0FEZixFQUVQQyxjQUZPLENBRVEsSUFBSUMsSUFBSixFQUZSLEVBR1BDLE9BSE8sQ0FHQ1gsR0FIRCxFQUlQWSxVQUpPLENBSUlYLE1BSkosRUFLUFksVUFMTyxDQUtJVixPQUxKLEVBTVBXLFFBTk8sQ0FNRVosSUFORixFQU9QYSxLQVBPLEVBQVo7QUFTQSx1QkFBU1IsR0FBVDtBQUVBLFNBQU9ULE9BQVA7QUFDSDs7ZUFFY0QsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF4aW9zUmVxdWVzdENvbmZpZyB9IGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IFJlcXVlc3RMb2dDb25maWcgfSBmcm9tICcuLi9jb21tb24vdHlwZXMnO1xuaW1wb3J0IHsgYXNzZW1ibGVCdWlsZENvbmZpZyB9IGZyb20gJy4uL2NvbW1vbi9jb25maWcnO1xuaW1wb3J0IFN0cmluZ0J1aWxkZXIgZnJvbSAnLi4vY29tbW9uL3N0cmluZy1idWlsZGVyJztcbmltcG9ydCB7IHByaW50TG9nIH0gZnJvbSAnLi4vY29tbW9uL3ByaW50JztcblxuZnVuY3Rpb24gcmVxdWVzdExvZ2dlcihyZXF1ZXN0OiBBeGlvc1JlcXVlc3RDb25maWcsIGNvbmZpZz86IFJlcXVlc3RMb2dDb25maWcpIHtcblxuICAgIGNvbnN0IHt1cmwsIG1ldGhvZCwgZGF0YSwgaGVhZGVyc30gPSByZXF1ZXN0O1xuICAgIGNvbnN0IGJ1aWxkQ29uZmlnID0gYXNzZW1ibGVCdWlsZENvbmZpZyhjb25maWcpO1xuXG4gICAgY29uc3Qgc3RyaW5nQnVpbGRlciA9IG5ldyBTdHJpbmdCdWlsZGVyKGJ1aWxkQ29uZmlnKTtcbiAgICBjb25zdCBsb2cgPSBzdHJpbmdCdWlsZGVyXG4gICAgICAgIC5tYWtlTG9nVHlwZVdpdGhQcmVmaXgoJ1JlcXVlc3QnKVxuICAgICAgICAubWFrZURhdGVGb3JtYXQobmV3IERhdGUoKSlcbiAgICAgICAgLm1ha2VVcmwodXJsKVxuICAgICAgICAubWFrZU1ldGhvZChtZXRob2QpXG4gICAgICAgIC5tYWtlSGVhZGVyKGhlYWRlcnMpXG4gICAgICAgIC5tYWtlRGF0YShkYXRhKVxuICAgICAgICAuYnVpbGQoKTtcblxuICAgIHByaW50TG9nKGxvZyk7XG5cbiAgICByZXR1cm4gcmVxdWVzdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdExvZ2dlcjsiXX0=
