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
        .makeMethod(method)
        .makeUrl(url)
        .makeHeader(headers)
        .makeData(data)
        .build();
    (0, _print.printLog)(log, buildConfig);
    return request;
}

var _default = requestLogger;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dnZXIvcmVxdWVzdC50cyJdLCJuYW1lcyI6WyJyZXF1ZXN0TG9nZ2VyIiwicmVxdWVzdCIsImNvbmZpZyIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJoZWFkZXJzIiwiYnVpbGRDb25maWciLCJzdHJpbmdCdWlsZGVyIiwiU3RyaW5nQnVpbGRlciIsImxvZyIsIm1ha2VMb2dUeXBlV2l0aFByZWZpeCIsIm1ha2VEYXRlRm9ybWF0IiwiRGF0ZSIsIm1ha2VNZXRob2QiLCJtYWtlVXJsIiwibWFrZUhlYWRlciIsIm1ha2VEYXRhIiwiYnVpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7OztBQUVBLFNBQVNBLGFBQVQsQ0FBdUJDLE9BQXZCLEVBQW9EQyxNQUFwRCxFQUErRTtBQUUzRSxRQUFNO0FBQUNDLElBQUFBLEdBQUQ7QUFBTUMsSUFBQUEsTUFBTjtBQUFjQyxJQUFBQSxJQUFkO0FBQW9CQyxJQUFBQTtBQUFwQixNQUErQkwsT0FBckM7QUFDQSxRQUFNTSxXQUFXLEdBQUcsaUNBQW9CTCxNQUFwQixDQUFwQjtBQUVBLFFBQU1NLGFBQWEsR0FBRyxJQUFJQyxzQkFBSixDQUFrQkYsV0FBbEIsQ0FBdEI7QUFDQSxRQUFNRyxHQUFHLEdBQUdGLGFBQWEsQ0FDcEJHLHFCQURPLENBQ2UsU0FEZixFQUVQQyxjQUZPLENBRVEsSUFBSUMsSUFBSixFQUZSLEVBR1BDLFVBSE8sQ0FHSVYsTUFISixFQUlQVyxPQUpPLENBSUNaLEdBSkQsRUFLUGEsVUFMTyxDQUtJVixPQUxKLEVBTVBXLFFBTk8sQ0FNRVosSUFORixFQU9QYSxLQVBPLEVBQVo7QUFTQSx1QkFBU1IsR0FBVCxFQUFjSCxXQUFkO0FBRUEsU0FBT04sT0FBUDtBQUNIOztlQUVjRCxhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXhpb3NSZXF1ZXN0Q29uZmlnIH0gZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgUmVxdWVzdExvZ0NvbmZpZyB9IGZyb20gJy4uL2NvbW1vbi90eXBlcyc7XG5pbXBvcnQgeyBhc3NlbWJsZUJ1aWxkQ29uZmlnIH0gZnJvbSAnLi4vY29tbW9uL2NvbmZpZyc7XG5pbXBvcnQgU3RyaW5nQnVpbGRlciBmcm9tICcuLi9jb21tb24vc3RyaW5nLWJ1aWxkZXInO1xuaW1wb3J0IHsgcHJpbnRMb2cgfSBmcm9tICcuLi9jb21tb24vcHJpbnQnO1xuXG5mdW5jdGlvbiByZXF1ZXN0TG9nZ2VyKHJlcXVlc3Q6IEF4aW9zUmVxdWVzdENvbmZpZywgY29uZmlnPzogUmVxdWVzdExvZ0NvbmZpZykge1xuXG4gICAgY29uc3Qge3VybCwgbWV0aG9kLCBkYXRhLCBoZWFkZXJzfSA9IHJlcXVlc3Q7XG4gICAgY29uc3QgYnVpbGRDb25maWcgPSBhc3NlbWJsZUJ1aWxkQ29uZmlnKGNvbmZpZyk7XG5cbiAgICBjb25zdCBzdHJpbmdCdWlsZGVyID0gbmV3IFN0cmluZ0J1aWxkZXIoYnVpbGRDb25maWcpO1xuICAgIGNvbnN0IGxvZyA9IHN0cmluZ0J1aWxkZXJcbiAgICAgICAgLm1ha2VMb2dUeXBlV2l0aFByZWZpeCgnUmVxdWVzdCcpXG4gICAgICAgIC5tYWtlRGF0ZUZvcm1hdChuZXcgRGF0ZSgpKVxuICAgICAgICAubWFrZU1ldGhvZChtZXRob2QpXG4gICAgICAgIC5tYWtlVXJsKHVybClcbiAgICAgICAgLm1ha2VIZWFkZXIoaGVhZGVycylcbiAgICAgICAgLm1ha2VEYXRhKGRhdGEpXG4gICAgICAgIC5idWlsZCgpO1xuXG4gICAgcHJpbnRMb2cobG9nLCBidWlsZENvbmZpZyk7XG5cbiAgICByZXR1cm4gcmVxdWVzdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdExvZ2dlcjtcbiJdfQ==
