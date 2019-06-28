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
        const prefix = this.config.prefixText ? `[${this.config.prefixText}][${logType}]` : `[Axios][${logType}]`;
        this.printQueue.push(_chalk.default.green(prefix));
        return this;
    }

    makeDateFormat() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vc3RyaW5nLWJ1aWxkZXIudHMiXSwibmFtZXMiOlsiU3RyaW5nQnVpbGRlciIsImNvbnN0cnVjdG9yIiwiY29uZmlnIiwicHJpbnRRdWV1ZSIsIm1ha2VQcmVmaXgiLCJsb2dUeXBlIiwicHJlZml4IiwicHJlZml4VGV4dCIsInB1c2giLCJjaGFsayIsImdyZWVuIiwibWFrZURhdGVGb3JtYXQiLCJkYXRlRm9ybWF0IiwiRGF0ZSIsIm1ha2VVcmwiLCJ1cmwiLCJtYWtlTWV0aG9kIiwibWV0aG9kIiwieWVsbG93IiwidG9VcHBlckNhc2UiLCJtYWtlRGF0YSIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwibWFrZVN0YXR1cyIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJidWlsZCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7O0FBRUEsTUFBTUEsYUFBTixDQUFvQjtBQUloQkMsRUFBQUEsV0FBVyxDQUFDQyxNQUFELEVBQTBCO0FBQUE7O0FBQUE7O0FBQ2pDLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsRUFBbEI7QUFDSDs7QUFFREMsRUFBQUEsVUFBVSxDQUFDQyxPQUFELEVBQWtCO0FBQ3hCLFVBQU1DLE1BQU0sR0FBRyxLQUFLSixNQUFMLENBQVlLLFVBQVosR0FBMEIsSUFBRyxLQUFLTCxNQUFMLENBQVlLLFVBQVcsS0FBSUYsT0FBUSxHQUFoRSxHQUFzRSxXQUFVQSxPQUFRLEdBQXZHO0FBQ0EsU0FBS0YsVUFBTCxDQUFnQkssSUFBaEIsQ0FBcUJDLGVBQU1DLEtBQU4sQ0FBWUosTUFBWixDQUFyQjtBQUNBLFdBQU8sSUFBUDtBQUNIOztBQUVESyxFQUFBQSxjQUFjLEdBQUc7QUFDYixVQUFNQyxVQUFVLEdBQUcseUJBQVcsSUFBSUMsSUFBSixFQUFYLEVBQXVCLEtBQUtYLE1BQUwsQ0FBWVUsVUFBWixJQUEwQixhQUFqRCxDQUFuQjtBQUNBLFNBQUtULFVBQUwsQ0FBZ0JLLElBQWhCLENBQXFCSSxVQUFyQjtBQUNBLFdBQU8sSUFBUDtBQUNIOztBQUVERSxFQUFBQSxPQUFPLENBQUNDLEdBQUQsRUFBZTtBQUNsQixRQUFHQSxHQUFILEVBQVEsS0FBS1osVUFBTCxDQUFnQkssSUFBaEIsQ0FBcUJPLEdBQXJCO0FBQ1IsV0FBTyxJQUFQO0FBQ0g7O0FBRURDLEVBQUFBLFVBQVUsQ0FBQ0MsTUFBRCxFQUFrQjtBQUN4QixRQUFHQSxNQUFILEVBQVcsS0FBS2QsVUFBTCxDQUFnQkssSUFBaEIsQ0FBcUJDLGVBQU1TLE1BQU4sQ0FBYUQsTUFBTSxDQUFDRSxXQUFQLEVBQWIsQ0FBckI7QUFDWCxXQUFPLElBQVA7QUFDSDs7QUFFREMsRUFBQUEsUUFBUSxDQUFDQyxJQUFELEVBQWU7QUFDbkIsUUFBR0EsSUFBSCxFQUFTLEtBQUtsQixVQUFMLENBQWdCSyxJQUFoQixDQUFxQmMsSUFBSSxDQUFDQyxTQUFMLENBQWVGLElBQWYsQ0FBckI7QUFDVCxXQUFPLElBQVA7QUFDSDs7QUFFREcsRUFBQUEsVUFBVSxDQUFDQyxNQUFELEVBQWlCQyxVQUFqQixFQUFzQztBQUM1QyxRQUFHRCxNQUFNLElBQUlDLFVBQWIsRUFBeUIsS0FBS3ZCLFVBQUwsQ0FBZ0JLLElBQWhCLENBQXNCLEdBQUVpQixNQUFPLElBQUdDLFVBQVcsRUFBN0M7QUFDekIsV0FBTyxJQUFQO0FBQ0g7O0FBRURDLEVBQUFBLEtBQUssR0FBRztBQUNKLFdBQU8sS0FBS3hCLFVBQUwsQ0FBZ0J5QixJQUFoQixDQUFxQixHQUFyQixDQUFQO0FBQ0g7O0FBM0NlOztlQThDTDVCLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGF0ZWZvcm1hdCBmcm9tICdkYXRlZm9ybWF0JztcbmltcG9ydCB7IEdsb2JhbExvZ0NvbmZpZyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcblxuY2xhc3MgU3RyaW5nQnVpbGRlciB7XG4gICAgcHJpdmF0ZSBjb25maWc6IEdsb2JhbExvZ0NvbmZpZztcbiAgICBwcml2YXRlIHByaW50UXVldWU6IEFycmF5PHN0cmluZz47XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IEdsb2JhbExvZ0NvbmZpZykge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5wcmludFF1ZXVlID0gW107XG4gICAgfVxuXG4gICAgbWFrZVByZWZpeChsb2dUeXBlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgcHJlZml4ID0gdGhpcy5jb25maWcucHJlZml4VGV4dCA/IGBbJHt0aGlzLmNvbmZpZy5wcmVmaXhUZXh0fV1bJHtsb2dUeXBlfV1gIDogYFtBeGlvc11bJHtsb2dUeXBlfV1gO1xuICAgICAgICB0aGlzLnByaW50UXVldWUucHVzaChjaGFsay5ncmVlbihwcmVmaXgpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbWFrZURhdGVGb3JtYXQoKSB7XG4gICAgICAgIGNvbnN0IGRhdGVGb3JtYXQgPSBkYXRlZm9ybWF0KG5ldyBEYXRlKCksIHRoaXMuY29uZmlnLmRhdGVGb3JtYXQgfHwgJ2lzb0RhdGVUaW1lJyk7XG4gICAgICAgIHRoaXMucHJpbnRRdWV1ZS5wdXNoKGRhdGVGb3JtYXQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtYWtlVXJsKHVybD86IHN0cmluZykge1xuICAgICAgICBpZih1cmwpIHRoaXMucHJpbnRRdWV1ZS5wdXNoKHVybCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1ha2VNZXRob2QobWV0aG9kPzogc3RyaW5nKSB7XG4gICAgICAgIGlmKG1ldGhvZCkgdGhpcy5wcmludFF1ZXVlLnB1c2goY2hhbGsueWVsbG93KG1ldGhvZC50b1VwcGVyQ2FzZSgpKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1ha2VEYXRhKGRhdGE6IG9iamVjdCkge1xuICAgICAgICBpZihkYXRhKSB0aGlzLnByaW50UXVldWUucHVzaChKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1ha2VTdGF0dXMoc3RhdHVzPzpudW1iZXIsIHN0YXR1c1RleHQ/OiBzdHJpbmcpIHtcbiAgICAgICAgaWYoc3RhdHVzICYmIHN0YXR1c1RleHQpIHRoaXMucHJpbnRRdWV1ZS5wdXNoKGAke3N0YXR1c306JHtzdGF0dXNUZXh0fWApO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBidWlsZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpbnRRdWV1ZS5qb2luKCcgJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdCdWlsZGVyOyJdfQ==
