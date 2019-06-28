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
    const { url, method, data } = request;
    const buildConfig = config ? config : (0, _config.mergeWithGlobalConfig)(config);
    const stringBuilder = new _stringBuilder.default(buildConfig);
    const log = stringBuilder
        .makePrefix('Request')
        .makeDateFormat()
        .makeUrl(url)
        .makeMethod(method)
        .makeData(data)
        .build();
    (0, _print.printLog)(log);
    return request;
}

var _default = requestLogger;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dnZXIvcmVxdWVzdC50cyJdLCJuYW1lcyI6WyJyZXF1ZXN0TG9nZ2VyIiwicmVxdWVzdCIsImNvbmZpZyIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJidWlsZENvbmZpZyIsInN0cmluZ0J1aWxkZXIiLCJTdHJpbmdCdWlsZGVyIiwibG9nIiwibWFrZVByZWZpeCIsIm1ha2VEYXRlRm9ybWF0IiwibWFrZVVybCIsIm1ha2VNZXRob2QiLCJtYWtlRGF0YSIsImJ1aWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxTQUFTQSxhQUFULENBQXVCQyxPQUF2QixFQUFvREMsTUFBcEQsRUFBK0U7QUFFM0UsUUFBTTtBQUFDQyxJQUFBQSxHQUFEO0FBQU1DLElBQUFBLE1BQU47QUFBY0MsSUFBQUE7QUFBZCxNQUFzQkosT0FBNUI7QUFDQSxRQUFNSyxXQUFXLEdBQUdKLE1BQU0sR0FBR0EsTUFBSCxHQUFZLG1DQUFzQkEsTUFBdEIsQ0FBdEM7QUFFQSxRQUFNSyxhQUFhLEdBQUcsSUFBSUMsc0JBQUosQ0FBa0JGLFdBQWxCLENBQXRCO0FBQ0EsUUFBTUcsR0FBRyxHQUFHRixhQUFhLENBQ3BCRyxVQURPLENBQ0ksU0FESixFQUVQQyxjQUZPLEdBR1BDLE9BSE8sQ0FHQ1QsR0FIRCxFQUlQVSxVQUpPLENBSUlULE1BSkosRUFLUFUsUUFMTyxDQUtFVCxJQUxGLEVBTVBVLEtBTk8sRUFBWjtBQVFBLHVCQUFTTixHQUFUO0FBRUEsU0FBT1IsT0FBUDtBQUNIOztlQUVjRCxhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXhpb3NSZXF1ZXN0Q29uZmlnIH0gZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgUmVxdWVzdExvZ0NvbmZpZyB9IGZyb20gJy4uL2NvbW1vbi90eXBlcyc7XG5pbXBvcnQgeyBtZXJnZVdpdGhHbG9iYWxDb25maWcgfSBmcm9tICcuLi9jb21tb24vY29uZmlnJztcbmltcG9ydCBTdHJpbmdCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9zdHJpbmctYnVpbGRlcic7XG5pbXBvcnQgeyBwcmludExvZyB9IGZyb20gJy4uL2NvbW1vbi9wcmludCc7XG5cbmZ1bmN0aW9uIHJlcXVlc3RMb2dnZXIocmVxdWVzdDogQXhpb3NSZXF1ZXN0Q29uZmlnLCBjb25maWc/OiBSZXF1ZXN0TG9nQ29uZmlnKSB7XG5cbiAgICBjb25zdCB7dXJsLCBtZXRob2QsIGRhdGF9ID0gcmVxdWVzdDtcbiAgICBjb25zdCBidWlsZENvbmZpZyA9IGNvbmZpZyA/IGNvbmZpZyA6IG1lcmdlV2l0aEdsb2JhbENvbmZpZyhjb25maWcpO1xuXG4gICAgY29uc3Qgc3RyaW5nQnVpbGRlciA9IG5ldyBTdHJpbmdCdWlsZGVyKGJ1aWxkQ29uZmlnKTtcbiAgICBjb25zdCBsb2cgPSBzdHJpbmdCdWlsZGVyXG4gICAgICAgIC5tYWtlUHJlZml4KCdSZXF1ZXN0JylcbiAgICAgICAgLm1ha2VEYXRlRm9ybWF0KClcbiAgICAgICAgLm1ha2VVcmwodXJsKVxuICAgICAgICAubWFrZU1ldGhvZChtZXRob2QpXG4gICAgICAgIC5tYWtlRGF0YShkYXRhKVxuICAgICAgICAuYnVpbGQoKTtcblxuICAgIHByaW50TG9nKGxvZyk7XG5cbiAgICByZXR1cm4gcmVxdWVzdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdExvZ2dlcjsiXX0=
