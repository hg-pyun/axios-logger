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
    const buildConfig = (0, _config.assembleBuildConfig)(config);
    const stringBuilder = new _stringBuilder.default(buildConfig);
    const log = stringBuilder
        .makeLogTypeWithPrefix('Response')
        .makeDateFormat(new Date())
        .makeMethod(method)
        .makeUrl(url)
        .makeStatus(status, statusText)
        .makeHeader(headers)
        .makeData(data)
        .build();
    (0, _print.printLog)(log);
    return response;
}

var _default = responseLogger;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dnZXIvcmVzcG9uc2UudHMiXSwibmFtZXMiOlsicmVzcG9uc2VMb2dnZXIiLCJyZXNwb25zZSIsImNvbmZpZyIsInVybCIsIm1ldGhvZCIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJkYXRhIiwiaGVhZGVycyIsImJ1aWxkQ29uZmlnIiwic3RyaW5nQnVpbGRlciIsIlN0cmluZ0J1aWxkZXIiLCJsb2ciLCJtYWtlTG9nVHlwZVdpdGhQcmVmaXgiLCJtYWtlRGF0ZUZvcm1hdCIsIkRhdGUiLCJtYWtlTWV0aG9kIiwibWFrZVVybCIsIm1ha2VTdGF0dXMiLCJtYWtlSGVhZGVyIiwibWFrZURhdGEiLCJidWlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQUNBOzs7O0FBRUEsU0FBU0EsY0FBVCxDQUF3QkMsUUFBeEIsRUFBaURDLE1BQWpELEVBQTZFO0FBQ3pFLFFBQU07QUFBQ0EsSUFBQUEsTUFBTSxFQUFFO0FBQUNDLE1BQUFBLEdBQUQ7QUFBTUMsTUFBQUE7QUFBTixLQUFUO0FBQXdCQyxJQUFBQSxNQUF4QjtBQUFnQ0MsSUFBQUEsVUFBaEM7QUFBNENDLElBQUFBLElBQTVDO0FBQWtEQyxJQUFBQTtBQUFsRCxNQUE2RFAsUUFBbkU7QUFDQSxRQUFNUSxXQUFXLEdBQUcsaUNBQW9CUCxNQUFwQixDQUFwQjtBQUVBLFFBQU1RLGFBQWEsR0FBRyxJQUFJQyxzQkFBSixDQUFrQkYsV0FBbEIsQ0FBdEI7QUFDQSxRQUFNRyxHQUFHLEdBQUdGLGFBQWEsQ0FDcEJHLHFCQURPLENBQ2UsVUFEZixFQUVQQyxjQUZPLENBRVEsSUFBSUMsSUFBSixFQUZSLEVBR1BDLFVBSE8sQ0FHSVosTUFISixFQUlQYSxPQUpPLENBSUNkLEdBSkQsRUFLUGUsVUFMTyxDQUtJYixNQUxKLEVBS1lDLFVBTFosRUFNUGEsVUFOTyxDQU1JWCxPQU5KLEVBT1BZLFFBUE8sQ0FPRWIsSUFQRixFQVFQYyxLQVJPLEVBQVo7QUFVQSx1QkFBU1QsR0FBVDtBQUVBLFNBQU9YLFFBQVA7QUFDSDs7ZUFFY0QsYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBSZXNwb25zZUxvZ0NvbmZpZyB9IGZyb20gJy4uL2NvbW1vbi90eXBlcyc7XG5pbXBvcnQgeyBhc3NlbWJsZUJ1aWxkQ29uZmlnIH0gZnJvbSAnLi4vY29tbW9uL2NvbmZpZyc7XG5pbXBvcnQgU3RyaW5nQnVpbGRlciBmcm9tICcuLi9jb21tb24vc3RyaW5nLWJ1aWxkZXInO1xuaW1wb3J0IHsgcHJpbnRMb2cgfSBmcm9tICcuLi9jb21tb24vcHJpbnQnO1xuXG5mdW5jdGlvbiByZXNwb25zZUxvZ2dlcihyZXNwb25zZTogQXhpb3NSZXNwb25zZSwgY29uZmlnPzogUmVzcG9uc2VMb2dDb25maWcpIHtcbiAgICBjb25zdCB7Y29uZmlnOiB7dXJsLCBtZXRob2R9LCBzdGF0dXMsIHN0YXR1c1RleHQsIGRhdGEsIGhlYWRlcnN9ID0gcmVzcG9uc2U7XG4gICAgY29uc3QgYnVpbGRDb25maWcgPSBhc3NlbWJsZUJ1aWxkQ29uZmlnKGNvbmZpZyk7XG5cbiAgICBjb25zdCBzdHJpbmdCdWlsZGVyID0gbmV3IFN0cmluZ0J1aWxkZXIoYnVpbGRDb25maWcpO1xuICAgIGNvbnN0IGxvZyA9IHN0cmluZ0J1aWxkZXJcbiAgICAgICAgLm1ha2VMb2dUeXBlV2l0aFByZWZpeCgnUmVzcG9uc2UnKVxuICAgICAgICAubWFrZURhdGVGb3JtYXQobmV3IERhdGUoKSlcbiAgICAgICAgLm1ha2VNZXRob2QobWV0aG9kKVxuICAgICAgICAubWFrZVVybCh1cmwpXG4gICAgICAgIC5tYWtlU3RhdHVzKHN0YXR1cywgc3RhdHVzVGV4dClcbiAgICAgICAgLm1ha2VIZWFkZXIoaGVhZGVycylcbiAgICAgICAgLm1ha2VEYXRhKGRhdGEpXG4gICAgICAgIC5idWlsZCgpO1xuXG4gICAgcHJpbnRMb2cobG9nKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVzcG9uc2VMb2dnZXI7XG4iXX0=
