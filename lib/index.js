'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true,
});
Object.defineProperty(exports, 'setGlobalConfig', {
    enumerable: true,
    get: function() {
        return _config.setGlobalConfig;
    },
});
Object.defineProperty(exports, 'requestLogger', {
    enumerable: true,
    get: function() {
        return _request.default;
    },
});
Object.defineProperty(exports, 'responseLogger', {
    enumerable: true,
    get: function() {
        return _response.default;
    },
});
Object.defineProperty(exports, 'errorLogger', {
    enumerable: true,
    get: function() {
        return _error.errorLogger;
    },
});

var _config = require('./common/config');

var _request = _interopRequireDefault(require('./logger/request'));

var _response = _interopRequireDefault(require('./logger/response'));

var _error = require('./logger/error');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNldEdsb2JhbENvbmZpZyB9IGZyb20gJy4vY29tbW9uL2NvbmZpZyc7XG5pbXBvcnQgcmVxdWVzdExvZ2dlciBmcm9tICcuL2xvZ2dlci9yZXF1ZXN0JztcbmltcG9ydCByZXNwb25zZUxvZ2dlciBmcm9tICcuL2xvZ2dlci9yZXNwb25zZSc7XG5pbXBvcnQgeyBlcnJvckxvZ2dlciB9IGZyb20gJy4vbG9nZ2VyL2Vycm9yJztcblxuZXhwb3J0IHsgc2V0R2xvYmFsQ29uZmlnLCByZXF1ZXN0TG9nZ2VyLCByZXNwb25zZUxvZ2dlciwgZXJyb3JMb2dnZXIgfTsiXX0=
