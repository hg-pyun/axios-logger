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
    url: true,
    method: true,
    data: true,
    status: true,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vY29uZmlnLnRzIl0sIm5hbWVzIjpbImdsb2JhbENvbmZpZyIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJzdGF0dXMiLCJnZXRHbG9iYWxDb25maWciLCJzZXRHbG9iYWxDb25maWciLCJjb25maWciLCJhc3NlbWJsZUJ1aWxkQ29uZmlnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxZQUE2QixHQUFHO0FBQ2hDQyxFQUFBQSxHQUFHLEVBQUUsSUFEMkI7QUFFaENDLEVBQUFBLE1BQU0sRUFBRSxJQUZ3QjtBQUdoQ0MsRUFBQUEsSUFBSSxFQUFFLElBSDBCO0FBSWhDQyxFQUFBQSxNQUFNLEVBQUU7QUFKd0IsQ0FBcEM7O0FBT0EsU0FBU0MsZUFBVCxHQUEyQjtBQUN2QixTQUFPTCxZQUFQO0FBQ0g7O0FBRUQsU0FBU00sZUFBVCxDQUF5QkMsTUFBekIsRUFBa0Q7QUFDOUNQLEVBQUFBLFlBQVkscUJBQ0xBLFlBREssTUFFTE8sTUFGSyxDQUFaO0FBSUg7O0FBRUQsU0FBU0MsbUJBQVQsQ0FBNkJELE1BQTdCLEVBQTZGO0FBQ3pGLDJCQUNPUCxZQURQLE1BRU9PLE1BRlA7QUFJSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVycm9yTG9nQ29uZmlnLCBHbG9iYWxMb2dDb25maWcsIFJlcXVlc3RMb2dDb25maWcsIFJlc3BvbnNlTG9nQ29uZmlnIH0gZnJvbSAnLi90eXBlcyc7XG5cbmxldCBnbG9iYWxDb25maWc6IEdsb2JhbExvZ0NvbmZpZyA9IHtcbiAgICB1cmw6IHRydWUsXG4gICAgbWV0aG9kOiB0cnVlLFxuICAgIGRhdGE6IHRydWUsXG4gICAgc3RhdHVzOiB0cnVlLFxufTtcblxuZnVuY3Rpb24gZ2V0R2xvYmFsQ29uZmlnKCkge1xuICAgIHJldHVybiBnbG9iYWxDb25maWc7XG59XG5cbmZ1bmN0aW9uIHNldEdsb2JhbENvbmZpZyhjb25maWc6IEdsb2JhbExvZ0NvbmZpZykge1xuICAgIGdsb2JhbENvbmZpZyA9IHtcbiAgICAgICAgLi4uZ2xvYmFsQ29uZmlnLFxuICAgICAgICAuLi5jb25maWcsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gYXNzZW1ibGVCdWlsZENvbmZpZyhjb25maWc/OiBSZXF1ZXN0TG9nQ29uZmlnIHwgUmVzcG9uc2VMb2dDb25maWcgfCBFcnJvckxvZ0NvbmZpZykge1xuICAgIHJldHVybiB7XG4gICAgICAgIC4uLmdsb2JhbENvbmZpZyxcbiAgICAgICAgLi4uY29uZmlnLFxuICAgIH07XG59XG5cbmV4cG9ydCB7XG4gICAgZ2V0R2xvYmFsQ29uZmlnLFxuICAgIHNldEdsb2JhbENvbmZpZyxcbiAgICBhc3NlbWJsZUJ1aWxkQ29uZmlnLFxufTsiXX0=
