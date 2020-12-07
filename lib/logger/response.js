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
    (0, _print.printLog)(log, buildConfig);
    return response;
}

var _default = responseLogger;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dnZXIvcmVzcG9uc2UudHMiXSwibmFtZXMiOlsicmVzcG9uc2VMb2dnZXIiLCJyZXNwb25zZSIsImNvbmZpZyIsInVybCIsIm1ldGhvZCIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJkYXRhIiwiaGVhZGVycyIsImJ1aWxkQ29uZmlnIiwic3RyaW5nQnVpbGRlciIsIlN0cmluZ0J1aWxkZXIiLCJsb2ciLCJtYWtlTG9nVHlwZVdpdGhQcmVmaXgiLCJtYWtlRGF0ZUZvcm1hdCIsIkRhdGUiLCJtYWtlTWV0aG9kIiwibWFrZVVybCIsIm1ha2VTdGF0dXMiLCJtYWtlSGVhZGVyIiwibWFrZURhdGEiLCJidWlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQUNBOzs7O0FBRUEsU0FBU0EsY0FBVCxDQUF3QkMsUUFBeEIsRUFBaURDLE1BQWpELEVBQTZFO0FBQ3pFLFFBQU07QUFBQ0EsSUFBQUEsTUFBTSxFQUFFO0FBQUNDLE1BQUFBLEdBQUQ7QUFBTUMsTUFBQUE7QUFBTixLQUFUO0FBQXdCQyxJQUFBQSxNQUF4QjtBQUFnQ0MsSUFBQUEsVUFBaEM7QUFBNENDLElBQUFBLElBQTVDO0FBQWtEQyxJQUFBQTtBQUFsRCxNQUE2RFAsUUFBbkU7QUFDQSxRQUFNUSxXQUFXLEdBQUcsaUNBQW9CUCxNQUFwQixDQUFwQjtBQUVBLFFBQU1RLGFBQWEsR0FBRyxJQUFJQyxzQkFBSixDQUFrQkYsV0FBbEIsQ0FBdEI7QUFDQSxRQUFNRyxHQUFHLEdBQUdGLGFBQWEsQ0FDcEJHLHFCQURPLENBQ2UsVUFEZixFQUVQQyxjQUZPLENBRVEsSUFBSUMsSUFBSixFQUZSLEVBR1BDLFVBSE8sQ0FHSVosTUFISixFQUlQYSxPQUpPLENBSUNkLEdBSkQsRUFLUGUsVUFMTyxDQUtJYixNQUxKLEVBS1lDLFVBTFosRUFNUGEsVUFOTyxDQU1JWCxPQU5KLEVBT1BZLFFBUE8sQ0FPRWIsSUFQRixFQVFQYyxLQVJPLEVBQVo7QUFVQSx1QkFBU1QsR0FBVCxFQUFjSCxXQUFkO0FBRUEsU0FBT1IsUUFBUDtBQUNIOztlQUVjRCxjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXhpb3NSZXNwb25zZSB9IGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IFJlc3BvbnNlTG9nQ29uZmlnIH0gZnJvbSAnLi4vY29tbW9uL3R5cGVzJztcbmltcG9ydCB7IGFzc2VtYmxlQnVpbGRDb25maWcgfSBmcm9tICcuLi9jb21tb24vY29uZmlnJztcbmltcG9ydCBTdHJpbmdCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9zdHJpbmctYnVpbGRlcic7XG5pbXBvcnQgeyBwcmludExvZyB9IGZyb20gJy4uL2NvbW1vbi9wcmludCc7XG5cbmZ1bmN0aW9uIHJlc3BvbnNlTG9nZ2VyKHJlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlLCBjb25maWc/OiBSZXNwb25zZUxvZ0NvbmZpZykge1xuICAgIGNvbnN0IHtjb25maWc6IHt1cmwsIG1ldGhvZH0sIHN0YXR1cywgc3RhdHVzVGV4dCwgZGF0YSwgaGVhZGVyc30gPSByZXNwb25zZTtcbiAgICBjb25zdCBidWlsZENvbmZpZyA9IGFzc2VtYmxlQnVpbGRDb25maWcoY29uZmlnKTtcblxuICAgIGNvbnN0IHN0cmluZ0J1aWxkZXIgPSBuZXcgU3RyaW5nQnVpbGRlcihidWlsZENvbmZpZyk7XG4gICAgY29uc3QgbG9nID0gc3RyaW5nQnVpbGRlclxuICAgICAgICAubWFrZUxvZ1R5cGVXaXRoUHJlZml4KCdSZXNwb25zZScpXG4gICAgICAgIC5tYWtlRGF0ZUZvcm1hdChuZXcgRGF0ZSgpKVxuICAgICAgICAubWFrZU1ldGhvZChtZXRob2QpXG4gICAgICAgIC5tYWtlVXJsKHVybClcbiAgICAgICAgLm1ha2VTdGF0dXMoc3RhdHVzLCBzdGF0dXNUZXh0KVxuICAgICAgICAubWFrZUhlYWRlcihoZWFkZXJzKVxuICAgICAgICAubWFrZURhdGEoZGF0YSlcbiAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICBwcmludExvZyhsb2csIGJ1aWxkQ29uZmlnKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVzcG9uc2VMb2dnZXI7XG4iXX0=
