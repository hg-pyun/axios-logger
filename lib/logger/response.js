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
    } = response;
    const buildConfig = config ? config : (0, _config.mergeWithGlobalConfig)(config);
    const stringBuilder = new _stringBuilder.default(buildConfig);
    const log = stringBuilder
        .makePrefix('Response')
        .makeDateFormat()
        .makeUrl(url)
        .makeMethod(method)
        .makeStatus(status, statusText)
        .makeData(data)
        .build();
    (0, _print.printLog)(log);
    return response;
}

var _default = responseLogger;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dnZXIvcmVzcG9uc2UudHMiXSwibmFtZXMiOlsicmVzcG9uc2VMb2dnZXIiLCJyZXNwb25zZSIsImNvbmZpZyIsInVybCIsIm1ldGhvZCIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJkYXRhIiwiYnVpbGRDb25maWciLCJzdHJpbmdCdWlsZGVyIiwiU3RyaW5nQnVpbGRlciIsImxvZyIsIm1ha2VQcmVmaXgiLCJtYWtlRGF0ZUZvcm1hdCIsIm1ha2VVcmwiLCJtYWtlTWV0aG9kIiwibWFrZVN0YXR1cyIsIm1ha2VEYXRhIiwiYnVpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7OztBQUVBLFNBQVNBLGNBQVQsQ0FBd0JDLFFBQXhCLEVBQWlEQyxNQUFqRCxFQUE2RTtBQUN6RSxRQUFNO0FBQUNBLElBQUFBLE1BQU0sRUFBRTtBQUFDQyxNQUFBQSxHQUFEO0FBQU1DLE1BQUFBO0FBQU4sS0FBVDtBQUF3QkMsSUFBQUEsTUFBeEI7QUFBZ0NDLElBQUFBLFVBQWhDO0FBQTRDQyxJQUFBQTtBQUE1QyxNQUFvRE4sUUFBMUQ7QUFDQSxRQUFNTyxXQUFXLEdBQUdOLE1BQU0sR0FBR0EsTUFBSCxHQUFZLG1DQUFzQkEsTUFBdEIsQ0FBdEM7QUFFQSxRQUFNTyxhQUFhLEdBQUcsSUFBSUMsc0JBQUosQ0FBa0JGLFdBQWxCLENBQXRCO0FBQ0EsUUFBTUcsR0FBRyxHQUFHRixhQUFhLENBQ3BCRyxVQURPLENBQ0ksVUFESixFQUVQQyxjQUZPLEdBR1BDLE9BSE8sQ0FHQ1gsR0FIRCxFQUlQWSxVQUpPLENBSUlYLE1BSkosRUFLUFksVUFMTyxDQUtJWCxNQUxKLEVBS1lDLFVBTFosRUFNUFcsUUFOTyxDQU1FVixJQU5GLEVBT1BXLEtBUE8sRUFBWjtBQVNBLHVCQUFTUCxHQUFUO0FBRUEsU0FBT1YsUUFBUDtBQUNIOztlQUVjRCxjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXhpb3NSZXNwb25zZSB9IGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IFJlc3BvbnNlTG9nQ29uZmlnIH0gZnJvbSAnLi4vY29tbW9uL3R5cGVzJztcbmltcG9ydCB7IG1lcmdlV2l0aEdsb2JhbENvbmZpZyB9IGZyb20gJy4uL2NvbW1vbi9jb25maWcnO1xuaW1wb3J0IFN0cmluZ0J1aWxkZXIgZnJvbSAnLi4vY29tbW9uL3N0cmluZy1idWlsZGVyJztcbmltcG9ydCB7IHByaW50TG9nIH0gZnJvbSAnLi4vY29tbW9uL3ByaW50JztcblxuZnVuY3Rpb24gcmVzcG9uc2VMb2dnZXIocmVzcG9uc2U6IEF4aW9zUmVzcG9uc2UsIGNvbmZpZz86IFJlc3BvbnNlTG9nQ29uZmlnKSB7XG4gICAgY29uc3Qge2NvbmZpZzoge3VybCwgbWV0aG9kfSwgc3RhdHVzLCBzdGF0dXNUZXh0LCBkYXRhfSA9IHJlc3BvbnNlO1xuICAgIGNvbnN0IGJ1aWxkQ29uZmlnID0gY29uZmlnID8gY29uZmlnIDogbWVyZ2VXaXRoR2xvYmFsQ29uZmlnKGNvbmZpZyk7XG5cbiAgICBjb25zdCBzdHJpbmdCdWlsZGVyID0gbmV3IFN0cmluZ0J1aWxkZXIoYnVpbGRDb25maWcpO1xuICAgIGNvbnN0IGxvZyA9IHN0cmluZ0J1aWxkZXJcbiAgICAgICAgLm1ha2VQcmVmaXgoJ1Jlc3BvbnNlJylcbiAgICAgICAgLm1ha2VEYXRlRm9ybWF0KClcbiAgICAgICAgLm1ha2VVcmwodXJsKVxuICAgICAgICAubWFrZU1ldGhvZChtZXRob2QpXG4gICAgICAgIC5tYWtlU3RhdHVzKHN0YXR1cywgc3RhdHVzVGV4dClcbiAgICAgICAgLm1ha2VEYXRhKGRhdGEpXG4gICAgICAgIC5idWlsZCgpO1xuXG4gICAgcHJpbnRMb2cobG9nKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVzcG9uc2VMb2dnZXI7Il19
