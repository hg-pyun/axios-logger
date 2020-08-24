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

        _defineProperty(this, 'filteredHeaderList', void 0);

        this.config = config;
        this.printQueue = [];
        this.filteredHeaderList = [
            'common',
            'delete',
            'get',
            'head',
            'post',
            'put',
            'patch',
            'content-type',
            'content-length',
            'vary',
            'date',
            'connection',
            'content-security-policy',
        ];
    }

    makeLogTypeWithPrefix(logType) {
        const prefix =
            this.config.prefixText === false ? `[${logType}]` : `[${this.config.prefixText || 'Axios'}][${logType}]`;
        this.printQueue.push(_chalk.default.green(prefix));
        return this;
    }

    makeDateFormat(date) {
        // allow for opting-out of adding the timestamp (as most loggers already add this)
        if (this.config.dateFormat !== false) {
            // @ts-ignore
            const dateFormat = (0, _dateformat.default)(date, this.config.dateFormat || 'isoDateTime');
            this.printQueue.push(dateFormat);
        }

        return this;
    }

    makeHeader(headers) {
        if (this.config.headers && headers) {
            const headerMap = {};

            for (let key in headers) {
                if (!this.filteredHeaderList.includes(key)) {
                    headerMap[key] = headers[key];
                }
            }

            this.printQueue.push(JSON.stringify(headerMap));
        }

        return this;
    }

    makeUrl(url) {
        if (this.config.url && url) this.printQueue.push(url);
        return this;
    }

    makeMethod(method) {
        if (this.config.method && method) this.printQueue.push(_chalk.default.yellow(method.toUpperCase()));
        return this;
    }

    makeData(data) {
        if (this.config.data && data) this.printQueue.push(JSON.stringify(data));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vc3RyaW5nLWJ1aWxkZXIudHMiXSwibmFtZXMiOlsiU3RyaW5nQnVpbGRlciIsImNvbnN0cnVjdG9yIiwiY29uZmlnIiwicHJpbnRRdWV1ZSIsImZpbHRlcmVkSGVhZGVyTGlzdCIsIm1ha2VMb2dUeXBlV2l0aFByZWZpeCIsImxvZ1R5cGUiLCJwcmVmaXgiLCJwcmVmaXhUZXh0IiwicHVzaCIsImNoYWxrIiwiZ3JlZW4iLCJtYWtlRGF0ZUZvcm1hdCIsImRhdGUiLCJkYXRlRm9ybWF0IiwibWFrZUhlYWRlciIsImhlYWRlcnMiLCJoZWFkZXJNYXAiLCJrZXkiLCJpbmNsdWRlcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJtYWtlVXJsIiwidXJsIiwibWFrZU1ldGhvZCIsIm1ldGhvZCIsInllbGxvdyIsInRvVXBwZXJDYXNlIiwibWFrZURhdGEiLCJkYXRhIiwibWFrZVN0YXR1cyIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJidWlsZCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7O0FBRUEsTUFBTUEsYUFBTixDQUFvQjtBQUtoQkMsRUFBQUEsV0FBVyxDQUFDQyxNQUFELEVBQTBCO0FBQUE7O0FBQUE7O0FBQUE7O0FBQ2pDLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQixDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLEtBQXJCLEVBQTRCLE1BQTVCLEVBQW9DLE1BQXBDLEVBQTRDLEtBQTVDLEVBQW1ELE9BQW5ELEVBQTRELGNBQTVELEVBQTRFLGdCQUE1RSxFQUE4RixNQUE5RixFQUFzRyxNQUF0RyxFQUE4RyxZQUE5RyxFQUE0SCx5QkFBNUgsQ0FBMUI7QUFDSDs7QUFFREMsRUFBQUEscUJBQXFCLENBQUNDLE9BQUQsRUFBa0I7QUFDbkMsVUFBTUMsTUFBTSxHQUFHLEtBQUtMLE1BQUwsQ0FBWU0sVUFBWixLQUEyQixLQUEzQixHQUFvQyxJQUFHRixPQUFRLEdBQS9DLEdBQXFELElBQUcsS0FBS0osTUFBTCxDQUFZTSxVQUFaLElBQTBCLE9BQVEsS0FBSUYsT0FBUSxHQUFySDtBQUNBLFNBQUtILFVBQUwsQ0FBZ0JNLElBQWhCLENBQXFCQyxlQUFNQyxLQUFOLENBQVlKLE1BQVosQ0FBckI7QUFDQSxXQUFPLElBQVA7QUFDSDs7QUFFREssRUFBQUEsY0FBYyxDQUFDQyxJQUFELEVBQWE7QUFDdkI7QUFDQSxRQUFJLEtBQUtYLE1BQUwsQ0FBWVksVUFBWixLQUEyQixLQUEvQixFQUFzQztBQUNsQztBQUNBLFlBQU1BLFVBQVUsR0FBRyx5QkFBV0QsSUFBWCxFQUFpQixLQUFLWCxNQUFMLENBQVlZLFVBQVosSUFBMEIsYUFBM0MsQ0FBbkI7QUFDQSxXQUFLWCxVQUFMLENBQWdCTSxJQUFoQixDQUFxQkssVUFBckI7QUFDSDs7QUFDRCxXQUFPLElBQVA7QUFDSDs7QUFFREMsRUFBQUEsVUFBVSxDQUFDQyxPQUFELEVBQTZDO0FBQ25ELFFBQUcsS0FBS2QsTUFBTCxDQUFZYyxPQUFaLElBQXVCQSxPQUExQixFQUFtQztBQUMvQixZQUFNQyxTQUEwQyxHQUFHLEVBQW5EOztBQUNBLFdBQUksSUFBSUMsR0FBUixJQUFlRixPQUFmLEVBQXdCO0FBQ3BCLFlBQUcsQ0FBQyxLQUFLWixrQkFBTCxDQUF3QmUsUUFBeEIsQ0FBaUNELEdBQWpDLENBQUosRUFBMkM7QUFDdkNELFVBQUFBLFNBQVMsQ0FBQ0MsR0FBRCxDQUFULEdBQWlCRixPQUFPLENBQUNFLEdBQUQsQ0FBeEI7QUFDSDtBQUNKOztBQUVELFdBQUtmLFVBQUwsQ0FBZ0JNLElBQWhCLENBQXFCVyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosU0FBZixDQUFyQjtBQUNIOztBQUNELFdBQU8sSUFBUDtBQUNIOztBQUVESyxFQUFBQSxPQUFPLENBQUNDLEdBQUQsRUFBZTtBQUNsQixRQUFHLEtBQUtyQixNQUFMLENBQVlxQixHQUFaLElBQW1CQSxHQUF0QixFQUEyQixLQUFLcEIsVUFBTCxDQUFnQk0sSUFBaEIsQ0FBcUJjLEdBQXJCO0FBQzNCLFdBQU8sSUFBUDtBQUNIOztBQUVEQyxFQUFBQSxVQUFVLENBQUNDLE1BQUQsRUFBa0I7QUFDeEIsUUFBRyxLQUFLdkIsTUFBTCxDQUFZdUIsTUFBWixJQUFzQkEsTUFBekIsRUFBaUMsS0FBS3RCLFVBQUwsQ0FBZ0JNLElBQWhCLENBQXFCQyxlQUFNZ0IsTUFBTixDQUFhRCxNQUFNLENBQUNFLFdBQVAsRUFBYixDQUFyQjtBQUNqQyxXQUFPLElBQVA7QUFDSDs7QUFFREMsRUFBQUEsUUFBUSxDQUFDQyxJQUFELEVBQWU7QUFDbkIsUUFBRyxLQUFLM0IsTUFBTCxDQUFZMkIsSUFBWixJQUFvQkEsSUFBdkIsRUFBNkIsS0FBSzFCLFVBQUwsQ0FBZ0JNLElBQWhCLENBQXFCVyxJQUFJLENBQUNDLFNBQUwsQ0FBZVEsSUFBZixDQUFyQjtBQUM3QixXQUFPLElBQVA7QUFDSDs7QUFFREMsRUFBQUEsVUFBVSxDQUFDQyxNQUFELEVBQWlCQyxVQUFqQixFQUFzQztBQUM1QyxRQUFHRCxNQUFNLElBQUlDLFVBQWIsRUFBeUIsS0FBSzdCLFVBQUwsQ0FBZ0JNLElBQWhCLENBQXNCLEdBQUVzQixNQUFPLElBQUdDLFVBQVcsRUFBN0M7QUFDekIsV0FBTyxJQUFQO0FBQ0g7O0FBRURDLEVBQUFBLEtBQUssR0FBRztBQUNKLFdBQU8sS0FBSzlCLFVBQUwsQ0FBZ0IrQixJQUFoQixDQUFxQixHQUFyQixDQUFQO0FBQ0g7O0FBL0RlOztlQWtFTGxDLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGF0ZWZvcm1hdCBmcm9tICdkYXRlZm9ybWF0JztcbmltcG9ydCB7IEdsb2JhbExvZ0NvbmZpZyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcblxuY2xhc3MgU3RyaW5nQnVpbGRlciB7XG4gICAgcHJpdmF0ZSBjb25maWc6IEdsb2JhbExvZ0NvbmZpZztcbiAgICBwcml2YXRlIHByaW50UXVldWU6IEFycmF5PHN0cmluZz47XG4gICAgcHJpdmF0ZSBmaWx0ZXJlZEhlYWRlckxpc3Q6IEFycmF5PFN0cmluZz47XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IEdsb2JhbExvZ0NvbmZpZykge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5wcmludFF1ZXVlID0gW107XG4gICAgICAgIHRoaXMuZmlsdGVyZWRIZWFkZXJMaXN0ID0gWydjb21tb24nLCAnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbnRlbnQtdHlwZScsICdjb250ZW50LWxlbmd0aCcsICd2YXJ5JywgJ2RhdGUnLCAnY29ubmVjdGlvbicsICdjb250ZW50LXNlY3VyaXR5LXBvbGljeSddO1xuICAgIH1cblxuICAgIG1ha2VMb2dUeXBlV2l0aFByZWZpeChsb2dUeXBlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgcHJlZml4ID0gdGhpcy5jb25maWcucHJlZml4VGV4dCA9PT0gZmFsc2UgPyBgWyR7bG9nVHlwZX1dYCA6IGBbJHt0aGlzLmNvbmZpZy5wcmVmaXhUZXh0IHx8ICdBeGlvcyd9XVske2xvZ1R5cGV9XWA7XG4gICAgICAgIHRoaXMucHJpbnRRdWV1ZS5wdXNoKGNoYWxrLmdyZWVuKHByZWZpeCkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtYWtlRGF0ZUZvcm1hdChkYXRlOiBEYXRlKSB7XG4gICAgICAgIC8vIGFsbG93IGZvciBvcHRpbmctb3V0IG9mIGFkZGluZyB0aGUgdGltZXN0YW1wIChhcyBtb3N0IGxvZ2dlcnMgYWxyZWFkeSBhZGQgdGhpcylcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmRhdGVGb3JtYXQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCBkYXRlRm9ybWF0ID0gZGF0ZWZvcm1hdChkYXRlLCB0aGlzLmNvbmZpZy5kYXRlRm9ybWF0IHx8ICdpc29EYXRlVGltZScpO1xuICAgICAgICAgICAgdGhpcy5wcmludFF1ZXVlLnB1c2goZGF0ZUZvcm1hdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbWFrZUhlYWRlcihoZWFkZXJzPzogeyBba2V5OnN0cmluZ10gOiB7dmFsdWU6c3RyaW5nfX0pIHtcbiAgICAgICAgaWYodGhpcy5jb25maWcuaGVhZGVycyAmJiBoZWFkZXJzKSB7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJNYXA6eyBba2V5OnN0cmluZ10gOiB7dmFsdWU6c3RyaW5nfX0gPSB7fTtcbiAgICAgICAgICAgIGZvcihsZXQga2V5IGluIGhlYWRlcnMpIHtcbiAgICAgICAgICAgICAgICBpZighdGhpcy5maWx0ZXJlZEhlYWRlckxpc3QuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJNYXBba2V5XSA9IGhlYWRlcnNba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucHJpbnRRdWV1ZS5wdXNoKEpTT04uc3RyaW5naWZ5KGhlYWRlck1hcCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1ha2VVcmwodXJsPzogc3RyaW5nKSB7XG4gICAgICAgIGlmKHRoaXMuY29uZmlnLnVybCAmJiB1cmwpIHRoaXMucHJpbnRRdWV1ZS5wdXNoKHVybCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1ha2VNZXRob2QobWV0aG9kPzogc3RyaW5nKSB7XG4gICAgICAgIGlmKHRoaXMuY29uZmlnLm1ldGhvZCAmJiBtZXRob2QpIHRoaXMucHJpbnRRdWV1ZS5wdXNoKGNoYWxrLnllbGxvdyhtZXRob2QudG9VcHBlckNhc2UoKSkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtYWtlRGF0YShkYXRhOiBvYmplY3QpIHtcbiAgICAgICAgaWYodGhpcy5jb25maWcuZGF0YSAmJiBkYXRhKSB0aGlzLnByaW50UXVldWUucHVzaChKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1ha2VTdGF0dXMoc3RhdHVzPzpudW1iZXIsIHN0YXR1c1RleHQ/OiBzdHJpbmcpIHtcbiAgICAgICAgaWYoc3RhdHVzICYmIHN0YXR1c1RleHQpIHRoaXMucHJpbnRRdWV1ZS5wdXNoKGAke3N0YXR1c306JHtzdGF0dXNUZXh0fWApO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBidWlsZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpbnRRdWV1ZS5qb2luKCcgJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdCdWlsZGVyO1xuIl19
