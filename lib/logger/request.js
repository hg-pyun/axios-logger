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
    const buildConfig = config ? config : (0, _config.mergeWithGlobalConfig)(config);
    const stringBuilder = new _stringBuilder.default(buildConfig);
    const log = stringBuilder
        .makePrefix('Request')
        .makeDateFormat()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dnZXIvcmVxdWVzdC50cyJdLCJuYW1lcyI6WyJyZXF1ZXN0TG9nZ2VyIiwicmVxdWVzdCIsImNvbmZpZyIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJoZWFkZXJzIiwiYnVpbGRDb25maWciLCJzdHJpbmdCdWlsZGVyIiwiU3RyaW5nQnVpbGRlciIsImxvZyIsIm1ha2VQcmVmaXgiLCJtYWtlRGF0ZUZvcm1hdCIsIm1ha2VVcmwiLCJtYWtlTWV0aG9kIiwibWFrZUhlYWRlciIsIm1ha2VEYXRhIiwiYnVpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7OztBQUVBLFNBQVNBLGFBQVQsQ0FBdUJDLE9BQXZCLEVBQW9EQyxNQUFwRCxFQUErRTtBQUUzRSxRQUFNO0FBQUNDLElBQUFBLEdBQUQ7QUFBTUMsSUFBQUEsTUFBTjtBQUFjQyxJQUFBQSxJQUFkO0FBQW9CQyxJQUFBQTtBQUFwQixNQUErQkwsT0FBckM7QUFDQSxRQUFNTSxXQUFXLEdBQUdMLE1BQU0sR0FBR0EsTUFBSCxHQUFZLG1DQUFzQkEsTUFBdEIsQ0FBdEM7QUFFQSxRQUFNTSxhQUFhLEdBQUcsSUFBSUMsc0JBQUosQ0FBa0JGLFdBQWxCLENBQXRCO0FBQ0EsUUFBTUcsR0FBRyxHQUFHRixhQUFhLENBQ3BCRyxVQURPLENBQ0ksU0FESixFQUVQQyxjQUZPLEdBR1BDLE9BSE8sQ0FHQ1YsR0FIRCxFQUlQVyxVQUpPLENBSUlWLE1BSkosRUFLUFcsVUFMTyxDQUtJVCxPQUxKLEVBTVBVLFFBTk8sQ0FNRVgsSUFORixFQU9QWSxLQVBPLEVBQVo7QUFTQSx1QkFBU1AsR0FBVDtBQUVBLFNBQU9ULE9BQVA7QUFDSDs7ZUFFY0QsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF4aW9zUmVxdWVzdENvbmZpZyB9IGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IFJlcXVlc3RMb2dDb25maWcgfSBmcm9tICcuLi9jb21tb24vdHlwZXMnO1xuaW1wb3J0IHsgbWVyZ2VXaXRoR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vY29tbW9uL2NvbmZpZyc7XG5pbXBvcnQgU3RyaW5nQnVpbGRlciBmcm9tICcuLi9jb21tb24vc3RyaW5nLWJ1aWxkZXInO1xuaW1wb3J0IHsgcHJpbnRMb2cgfSBmcm9tICcuLi9jb21tb24vcHJpbnQnO1xuXG5mdW5jdGlvbiByZXF1ZXN0TG9nZ2VyKHJlcXVlc3Q6IEF4aW9zUmVxdWVzdENvbmZpZywgY29uZmlnPzogUmVxdWVzdExvZ0NvbmZpZykge1xuXG4gICAgY29uc3Qge3VybCwgbWV0aG9kLCBkYXRhLCBoZWFkZXJzfSA9IHJlcXVlc3Q7XG4gICAgY29uc3QgYnVpbGRDb25maWcgPSBjb25maWcgPyBjb25maWcgOiBtZXJnZVdpdGhHbG9iYWxDb25maWcoY29uZmlnKTtcblxuICAgIGNvbnN0IHN0cmluZ0J1aWxkZXIgPSBuZXcgU3RyaW5nQnVpbGRlcihidWlsZENvbmZpZyk7XG4gICAgY29uc3QgbG9nID0gc3RyaW5nQnVpbGRlclxuICAgICAgICAubWFrZVByZWZpeCgnUmVxdWVzdCcpXG4gICAgICAgIC5tYWtlRGF0ZUZvcm1hdCgpXG4gICAgICAgIC5tYWtlVXJsKHVybClcbiAgICAgICAgLm1ha2VNZXRob2QobWV0aG9kKVxuICAgICAgICAubWFrZUhlYWRlcihoZWFkZXJzKVxuICAgICAgICAubWFrZURhdGEoZGF0YSlcbiAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICBwcmludExvZyhsb2cpO1xuXG4gICAgcmV0dXJuIHJlcXVlc3Q7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3RMb2dnZXI7Il19
