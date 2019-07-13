'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports.default = void 0;

var _dateformat = _interopRequireDefault(require('dateformat'));

var _chalk = _interopRequireDefault(require('chalk'));

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }
    return obj;
}

class StringBuilder {
    constructor(config) {
        _defineProperty(this, 'config', void 0);

        _defineProperty(this, 'printQueue', void 0);

        this.config = config;
        this.printQueue = [];
    }

    makePrefix(logType) {
        const prefix =
            this.config.prefixText === false ? `[${logType}]` : `[${this.config.prefixText || 'Axios'}][${logType}]`;
        this.printQueue.push(_chalk.default.green(prefix));
        return this;
    }

    makeDateFormat() {
        // @ts-ignore
        const dateFormat = (0, _dateformat.default)(new Date(), this.config.dateFormat || 'isoDateTime');
        this.printQueue.push(dateFormat);
        return this;
    }

    makeUrl(url) {
        if (url) this.printQueue.push(url);
        return this;
    }

    makeMethod(method) {
        if (method) this.printQueue.push(_chalk.default.yellow(method.toUpperCase()));
        return this;
    }

    makeData(data) {
        if (data) this.printQueue.push(JSON.stringify(data));
        return this;
    }

    makeStatus(status, statusText) {
        if (status && statusText) this.printQueue.push(`${status}:${statusText}`);
        return this;
    }

    build() {
        return this.printQueue.join(' ');
    }
}

var _default = StringBuilder;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vc3RyaW5nLWJ1aWxkZXIudHMiXSwibmFtZXMiOlsiU3RyaW5nQnVpbGRlciIsImNvbnN0cnVjdG9yIiwiY29uZmlnIiwicHJpbnRRdWV1ZSIsIm1ha2VQcmVmaXgiLCJsb2dUeXBlIiwicHJlZml4IiwicHJlZml4VGV4dCIsInB1c2giLCJjaGFsayIsImdyZWVuIiwibWFrZURhdGVGb3JtYXQiLCJkYXRlRm9ybWF0IiwiRGF0ZSIsIm1ha2VVcmwiLCJ1cmwiLCJtYWtlTWV0aG9kIiwibWV0aG9kIiwieWVsbG93IiwidG9VcHBlckNhc2UiLCJtYWtlRGF0YSIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwibWFrZVN0YXR1cyIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJidWlsZCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7O0FBRUEsTUFBTUEsYUFBTixDQUFvQjtBQUloQkMsRUFBQUEsV0FBVyxDQUFDQyxNQUFELEVBQTBCO0FBQUE7O0FBQUE7O0FBQ2pDLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsRUFBbEI7QUFDSDs7QUFFREMsRUFBQUEsVUFBVSxDQUFDQyxPQUFELEVBQTBCO0FBQ2hDLFVBQU1DLE1BQU0sR0FBRyxLQUFLSixNQUFMLENBQVlLLFVBQVosS0FBMkIsS0FBM0IsR0FBb0MsSUFBR0YsT0FBUSxHQUEvQyxHQUFxRCxJQUFHLEtBQUtILE1BQUwsQ0FBWUssVUFBWixJQUEwQixPQUFRLEtBQUlGLE9BQVEsR0FBckg7QUFDQSxTQUFLRixVQUFMLENBQWdCSyxJQUFoQixDQUFxQkMsZUFBTUMsS0FBTixDQUFZSixNQUFaLENBQXJCO0FBQ0EsV0FBTyxJQUFQO0FBQ0g7O0FBRURLLEVBQUFBLGNBQWMsR0FBRztBQUNiO0FBQ0EsVUFBTUMsVUFBVSxHQUFHLHlCQUFXLElBQUlDLElBQUosRUFBWCxFQUF1QixLQUFLWCxNQUFMLENBQVlVLFVBQVosSUFBMEIsYUFBakQsQ0FBbkI7QUFDQSxTQUFLVCxVQUFMLENBQWdCSyxJQUFoQixDQUFxQkksVUFBckI7QUFDQSxXQUFPLElBQVA7QUFDSDs7QUFFREUsRUFBQUEsT0FBTyxDQUFDQyxHQUFELEVBQWU7QUFDbEIsUUFBR0EsR0FBSCxFQUFRLEtBQUtaLFVBQUwsQ0FBZ0JLLElBQWhCLENBQXFCTyxHQUFyQjtBQUNSLFdBQU8sSUFBUDtBQUNIOztBQUVEQyxFQUFBQSxVQUFVLENBQUNDLE1BQUQsRUFBa0I7QUFDeEIsUUFBR0EsTUFBSCxFQUFXLEtBQUtkLFVBQUwsQ0FBZ0JLLElBQWhCLENBQXFCQyxlQUFNUyxNQUFOLENBQWFELE1BQU0sQ0FBQ0UsV0FBUCxFQUFiLENBQXJCO0FBQ1gsV0FBTyxJQUFQO0FBQ0g7O0FBRURDLEVBQUFBLFFBQVEsQ0FBQ0MsSUFBRCxFQUFlO0FBQ25CLFFBQUdBLElBQUgsRUFBUyxLQUFLbEIsVUFBTCxDQUFnQkssSUFBaEIsQ0FBcUJjLElBQUksQ0FBQ0MsU0FBTCxDQUFlRixJQUFmLENBQXJCO0FBQ1QsV0FBTyxJQUFQO0FBQ0g7O0FBRURHLEVBQUFBLFVBQVUsQ0FBQ0MsTUFBRCxFQUFpQkMsVUFBakIsRUFBc0M7QUFDNUMsUUFBR0QsTUFBTSxJQUFJQyxVQUFiLEVBQXlCLEtBQUt2QixVQUFMLENBQWdCSyxJQUFoQixDQUFzQixHQUFFaUIsTUFBTyxJQUFHQyxVQUFXLEVBQTdDO0FBQ3pCLFdBQU8sSUFBUDtBQUNIOztBQUVEQyxFQUFBQSxLQUFLLEdBQUc7QUFDSixXQUFPLEtBQUt4QixVQUFMLENBQWdCeUIsSUFBaEIsQ0FBcUIsR0FBckIsQ0FBUDtBQUNIOztBQTVDZTs7ZUErQ0w1QixhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRhdGVmb3JtYXQgZnJvbSAnZGF0ZWZvcm1hdCc7XG5pbXBvcnQgeyBHbG9iYWxMb2dDb25maWcgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5cbmNsYXNzIFN0cmluZ0J1aWxkZXIge1xuICAgIHByaXZhdGUgY29uZmlnOiBHbG9iYWxMb2dDb25maWc7XG4gICAgcHJpdmF0ZSBwcmludFF1ZXVlOiBBcnJheTxzdHJpbmc+O1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBHbG9iYWxMb2dDb25maWcpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMucHJpbnRRdWV1ZSA9IFtdO1xuICAgIH1cblxuICAgIG1ha2VQcmVmaXgobG9nVHlwZTogc3RyaW5nIHwgZmFsc2UpIHtcbiAgICAgICAgY29uc3QgcHJlZml4ID0gdGhpcy5jb25maWcucHJlZml4VGV4dCA9PT0gZmFsc2UgPyBgWyR7bG9nVHlwZX1dYCA6IGBbJHt0aGlzLmNvbmZpZy5wcmVmaXhUZXh0IHx8ICdBeGlvcyd9XVske2xvZ1R5cGV9XWA7XG4gICAgICAgIHRoaXMucHJpbnRRdWV1ZS5wdXNoKGNoYWxrLmdyZWVuKHByZWZpeCkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtYWtlRGF0ZUZvcm1hdCgpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBkYXRlRm9ybWF0ID0gZGF0ZWZvcm1hdChuZXcgRGF0ZSgpLCB0aGlzLmNvbmZpZy5kYXRlRm9ybWF0IHx8ICdpc29EYXRlVGltZScpO1xuICAgICAgICB0aGlzLnByaW50UXVldWUucHVzaChkYXRlRm9ybWF0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbWFrZVVybCh1cmw/OiBzdHJpbmcpIHtcbiAgICAgICAgaWYodXJsKSB0aGlzLnByaW50UXVldWUucHVzaCh1cmwpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtYWtlTWV0aG9kKG1ldGhvZD86IHN0cmluZykge1xuICAgICAgICBpZihtZXRob2QpIHRoaXMucHJpbnRRdWV1ZS5wdXNoKGNoYWxrLnllbGxvdyhtZXRob2QudG9VcHBlckNhc2UoKSkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtYWtlRGF0YShkYXRhOiBvYmplY3QpIHtcbiAgICAgICAgaWYoZGF0YSkgdGhpcy5wcmludFF1ZXVlLnB1c2goSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtYWtlU3RhdHVzKHN0YXR1cz86bnVtYmVyLCBzdGF0dXNUZXh0Pzogc3RyaW5nKSB7XG4gICAgICAgIGlmKHN0YXR1cyAmJiBzdGF0dXNUZXh0KSB0aGlzLnByaW50UXVldWUucHVzaChgJHtzdGF0dXN9OiR7c3RhdHVzVGV4dH1gKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW50UXVldWUuam9pbignICcpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nQnVpbGRlcjsiXX0=
