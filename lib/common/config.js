'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports.getGlobalConfig = getGlobalConfig;
exports.setGlobalConfig = setGlobalConfig;
exports.mergeWithGlobalConfig = mergeWithGlobalConfig;

function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(
                Object.getOwnPropertySymbols(source).filter(function(sym) {
                    return Object.getOwnPropertyDescriptor(source, sym).enumerable;
                })
            );
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
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

let globalConfig;

function getGlobalConfig() {
    return globalConfig;
}

function setGlobalConfig(config) {
    globalConfig = config;
}

function mergeWithGlobalConfig(config) {
    return _objectSpread({}, globalConfig, config);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vY29uZmlnLnRzIl0sIm5hbWVzIjpbImdsb2JhbENvbmZpZyIsImdldEdsb2JhbENvbmZpZyIsInNldEdsb2JhbENvbmZpZyIsImNvbmZpZyIsIm1lcmdlV2l0aEdsb2JhbENvbmZpZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLFlBQUo7O0FBRUEsU0FBU0MsZUFBVCxHQUEyQjtBQUN2QixTQUFPRCxZQUFQO0FBQ0g7O0FBRUQsU0FBU0UsZUFBVCxDQUF5QkMsTUFBekIsRUFBa0Q7QUFDOUNILEVBQUFBLFlBQVksR0FBR0csTUFBZjtBQUNIOztBQUVELFNBQVNDLHFCQUFULENBQStCRCxNQUEvQixFQUErRjtBQUMzRiwyQkFDT0gsWUFEUCxFQUVPRyxNQUZQO0FBSUgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFcnJvckxvZ0NvbmZpZywgR2xvYmFsTG9nQ29uZmlnLCBSZXF1ZXN0TG9nQ29uZmlnLCBSZXNwb25zZUxvZ0NvbmZpZyB9IGZyb20gJy4vdHlwZXMnO1xuXG5sZXQgZ2xvYmFsQ29uZmlnOiBHbG9iYWxMb2dDb25maWc7XG5cbmZ1bmN0aW9uIGdldEdsb2JhbENvbmZpZygpIHtcbiAgICByZXR1cm4gZ2xvYmFsQ29uZmlnO1xufVxuXG5mdW5jdGlvbiBzZXRHbG9iYWxDb25maWcoY29uZmlnOiBHbG9iYWxMb2dDb25maWcpIHtcbiAgICBnbG9iYWxDb25maWcgPSBjb25maWc7XG59XG5cbmZ1bmN0aW9uIG1lcmdlV2l0aEdsb2JhbENvbmZpZyhjb25maWc/OiBSZXF1ZXN0TG9nQ29uZmlnIHwgUmVzcG9uc2VMb2dDb25maWcgfCBFcnJvckxvZ0NvbmZpZykge1xuICAgIHJldHVybiB7XG4gICAgICAgIC4uLmdsb2JhbENvbmZpZyxcbiAgICAgICAgLi4uY29uZmlnLFxuICAgIH07XG59XG5cbmV4cG9ydCB7XG4gICAgZ2V0R2xvYmFsQ29uZmlnLFxuICAgIHNldEdsb2JhbENvbmZpZyxcbiAgICBtZXJnZVdpdGhHbG9iYWxDb25maWcsXG59OyJdfQ==
