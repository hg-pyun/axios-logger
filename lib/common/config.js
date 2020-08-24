'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports.getGlobalConfig = getGlobalConfig;
exports.setGlobalConfig = setGlobalConfig;
exports.assembleBuildConfig = assembleBuildConfig;

function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        keys.push.apply(keys, symbols);
    }
    return keys;
}

function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
            ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
            ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
    }
    return target;
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }
    return obj;
}

let globalConfig = {
    method: true,
    url: true,
    data: true,
    status: true,
    logger: console.log,
    prefixText: 'Axios',
    dateFormat: false,
    headers: false,
};

function getGlobalConfig() {
    return globalConfig;
}

function setGlobalConfig(config) {
    globalConfig = _objectSpread({}, globalConfig, {}, config);
}

function assembleBuildConfig(config) {
    return _objectSpread({}, globalConfig, {}, config);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vY29uZmlnLnRzIl0sIm5hbWVzIjpbImdsb2JhbENvbmZpZyIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJzdGF0dXMiLCJsb2dnZXIiLCJjb25zb2xlIiwibG9nIiwicHJlZml4VGV4dCIsImRhdGVGb3JtYXQiLCJoZWFkZXJzIiwiZ2V0R2xvYmFsQ29uZmlnIiwic2V0R2xvYmFsQ29uZmlnIiwiY29uZmlnIiwiYXNzZW1ibGVCdWlsZENvbmZpZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsWUFBNkIsR0FBRztBQUNoQ0MsRUFBQUEsTUFBTSxFQUFFLElBRHdCO0FBRWhDQyxFQUFBQSxHQUFHLEVBQUUsSUFGMkI7QUFHaENDLEVBQUFBLElBQUksRUFBRSxJQUgwQjtBQUloQ0MsRUFBQUEsTUFBTSxFQUFFLElBSndCO0FBS2hDQyxFQUFBQSxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FMZ0I7QUFNaENDLEVBQUFBLFVBQVUsRUFBRSxPQU5vQjtBQU9oQ0MsRUFBQUEsVUFBVSxFQUFFLEtBUG9CO0FBUWhDQyxFQUFBQSxPQUFPLEVBQUU7QUFSdUIsQ0FBcEM7O0FBV0EsU0FBU0MsZUFBVCxHQUEyQjtBQUN2QixTQUFPWCxZQUFQO0FBQ0g7O0FBRUQsU0FBU1ksZUFBVCxDQUF5QkMsTUFBekIsRUFBa0Q7QUFDOUNiLEVBQUFBLFlBQVkscUJBQ0xBLFlBREssTUFFTGEsTUFGSyxDQUFaO0FBSUg7O0FBRUQsU0FBU0MsbUJBQVQsQ0FBNkJELE1BQTdCLEVBQTZGO0FBQ3pGLDJCQUNPYixZQURQLE1BRU9hLE1BRlA7QUFJSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVycm9yTG9nQ29uZmlnLCBHbG9iYWxMb2dDb25maWcsIFJlcXVlc3RMb2dDb25maWcsIFJlc3BvbnNlTG9nQ29uZmlnIH0gZnJvbSAnLi90eXBlcyc7XG5cbmxldCBnbG9iYWxDb25maWc6IEdsb2JhbExvZ0NvbmZpZyA9IHtcbiAgICBtZXRob2Q6IHRydWUsXG4gICAgdXJsOiB0cnVlLFxuICAgIGRhdGE6IHRydWUsXG4gICAgc3RhdHVzOiB0cnVlLFxuICAgIGxvZ2dlcjogY29uc29sZS5sb2csXG4gICAgcHJlZml4VGV4dDogJ0F4aW9zJyxcbiAgICBkYXRlRm9ybWF0OiBmYWxzZSxcbiAgICBoZWFkZXJzOiBmYWxzZSxcbn07XG5cbmZ1bmN0aW9uIGdldEdsb2JhbENvbmZpZygpIHtcbiAgICByZXR1cm4gZ2xvYmFsQ29uZmlnO1xufVxuXG5mdW5jdGlvbiBzZXRHbG9iYWxDb25maWcoY29uZmlnOiBHbG9iYWxMb2dDb25maWcpIHtcbiAgICBnbG9iYWxDb25maWcgPSB7XG4gICAgICAgIC4uLmdsb2JhbENvbmZpZyxcbiAgICAgICAgLi4uY29uZmlnLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGFzc2VtYmxlQnVpbGRDb25maWcoY29uZmlnPzogUmVxdWVzdExvZ0NvbmZpZyB8IFJlc3BvbnNlTG9nQ29uZmlnIHwgRXJyb3JMb2dDb25maWcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5nbG9iYWxDb25maWcsXG4gICAgICAgIC4uLmNvbmZpZyxcbiAgICB9O1xufVxuXG5leHBvcnQge1xuICAgIGdldEdsb2JhbENvbmZpZyxcbiAgICBzZXRHbG9iYWxDb25maWcsXG4gICAgYXNzZW1ibGVCdWlsZENvbmZpZyxcbn07XG4iXX0=
