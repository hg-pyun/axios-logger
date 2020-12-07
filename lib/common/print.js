'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports.printLog = printLog;

var _config = require('./config');

function printLog(text, buildConfig) {
    var _buildConfig$logger;

    const logger =
        (_buildConfig$logger = buildConfig.logger) !== null && _buildConfig$logger !== void 0
            ? _buildConfig$logger
            : (0, _config.getGlobalConfig)().logger;
    logger(text);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vcHJpbnQudHMiXSwibmFtZXMiOlsicHJpbnRMb2ciLCJ0ZXh0IiwiYnVpbGRDb25maWciLCJsb2dnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFTyxTQUFTQSxRQUFULENBQWtCQyxJQUFsQixFQUFnQ0MsV0FBaEMsRUFBbUQ7QUFBQTs7QUFDdEQsUUFBTUMsTUFBTSwwQkFBR0QsV0FBVyxDQUFDQyxNQUFmLHFFQUF5QiwrQkFBa0JBLE1BQXZEO0FBQ0FBLEVBQUFBLE1BQU0sQ0FBQ0YsSUFBRCxDQUFOO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRHbG9iYWxDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludExvZyh0ZXh0OiBzdHJpbmcsIGJ1aWxkQ29uZmlnPzogYW55KSB7XG4gICAgY29uc3QgbG9nZ2VyID0gYnVpbGRDb25maWcubG9nZ2VyID8/IGdldEdsb2JhbENvbmZpZygpLmxvZ2dlcjtcbiAgICBsb2dnZXIodGV4dCk7XG59XG4iXX0=
