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
        // @ts-ignore
        const dateFormat = (0, _dateformat.default)(date, this.config.dateFormat || 'isoDateTime');
        this.printQueue.push(dateFormat);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vc3RyaW5nLWJ1aWxkZXIudHMiXSwibmFtZXMiOlsiU3RyaW5nQnVpbGRlciIsImNvbnN0cnVjdG9yIiwiY29uZmlnIiwicHJpbnRRdWV1ZSIsImZpbHRlcmVkSGVhZGVyTGlzdCIsIm1ha2VMb2dUeXBlV2l0aFByZWZpeCIsImxvZ1R5cGUiLCJwcmVmaXgiLCJwcmVmaXhUZXh0IiwicHVzaCIsImNoYWxrIiwiZ3JlZW4iLCJtYWtlRGF0ZUZvcm1hdCIsImRhdGUiLCJkYXRlRm9ybWF0IiwibWFrZUhlYWRlciIsImhlYWRlcnMiLCJoZWFkZXJNYXAiLCJrZXkiLCJpbmNsdWRlcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJtYWtlVXJsIiwidXJsIiwibWFrZU1ldGhvZCIsIm1ldGhvZCIsInllbGxvdyIsInRvVXBwZXJDYXNlIiwibWFrZURhdGEiLCJkYXRhIiwibWFrZVN0YXR1cyIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJidWlsZCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7O0FBRUEsTUFBTUEsYUFBTixDQUFvQjtBQUtoQkMsRUFBQUEsV0FBVyxDQUFDQyxNQUFELEVBQTBCO0FBQUE7O0FBQUE7O0FBQUE7O0FBQ2pDLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQixDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLEtBQXJCLEVBQTRCLE1BQTVCLEVBQW9DLE1BQXBDLEVBQTRDLEtBQTVDLEVBQW1ELE9BQW5ELEVBQTRELGNBQTVELEVBQTRFLGdCQUE1RSxFQUE4RixNQUE5RixFQUFzRyxNQUF0RyxFQUE4RyxZQUE5RyxFQUE0SCx5QkFBNUgsQ0FBMUI7QUFDSDs7QUFFREMsRUFBQUEscUJBQXFCLENBQUNDLE9BQUQsRUFBa0I7QUFDbkMsVUFBTUMsTUFBTSxHQUFHLEtBQUtMLE1BQUwsQ0FBWU0sVUFBWixLQUEyQixLQUEzQixHQUFvQyxJQUFHRixPQUFRLEdBQS9DLEdBQXFELElBQUcsS0FBS0osTUFBTCxDQUFZTSxVQUFaLElBQTBCLE9BQVEsS0FBSUYsT0FBUSxHQUFySDtBQUNBLFNBQUtILFVBQUwsQ0FBZ0JNLElBQWhCLENBQXFCQyxlQUFNQyxLQUFOLENBQVlKLE1BQVosQ0FBckI7QUFDQSxXQUFPLElBQVA7QUFDSDs7QUFFREssRUFBQUEsY0FBYyxDQUFDQyxJQUFELEVBQWE7QUFDdkI7QUFDQSxVQUFNQyxVQUFVLEdBQUcseUJBQVdELElBQVgsRUFBaUIsS0FBS1gsTUFBTCxDQUFZWSxVQUFaLElBQTBCLGFBQTNDLENBQW5CO0FBQ0EsU0FBS1gsVUFBTCxDQUFnQk0sSUFBaEIsQ0FBcUJLLFVBQXJCO0FBQ0EsV0FBTyxJQUFQO0FBQ0g7O0FBRURDLEVBQUFBLFVBQVUsQ0FBQ0MsT0FBRCxFQUE2QztBQUNuRCxRQUFHLEtBQUtkLE1BQUwsQ0FBWWMsT0FBWixJQUF1QkEsT0FBMUIsRUFBbUM7QUFDL0IsWUFBTUMsU0FBMEMsR0FBRyxFQUFuRDs7QUFDQSxXQUFJLElBQUlDLEdBQVIsSUFBZUYsT0FBZixFQUF3QjtBQUNwQixZQUFHLENBQUMsS0FBS1osa0JBQUwsQ0FBd0JlLFFBQXhCLENBQWlDRCxHQUFqQyxDQUFKLEVBQTJDO0FBQ3ZDRCxVQUFBQSxTQUFTLENBQUNDLEdBQUQsQ0FBVCxHQUFpQkYsT0FBTyxDQUFDRSxHQUFELENBQXhCO0FBQ0g7QUFDSjs7QUFFRCxXQUFLZixVQUFMLENBQWdCTSxJQUFoQixDQUFxQlcsSUFBSSxDQUFDQyxTQUFMLENBQWVKLFNBQWYsQ0FBckI7QUFDSDs7QUFDRCxXQUFPLElBQVA7QUFDSDs7QUFFREssRUFBQUEsT0FBTyxDQUFDQyxHQUFELEVBQWU7QUFDbEIsUUFBRyxLQUFLckIsTUFBTCxDQUFZcUIsR0FBWixJQUFtQkEsR0FBdEIsRUFBMkIsS0FBS3BCLFVBQUwsQ0FBZ0JNLElBQWhCLENBQXFCYyxHQUFyQjtBQUMzQixXQUFPLElBQVA7QUFDSDs7QUFFREMsRUFBQUEsVUFBVSxDQUFDQyxNQUFELEVBQWtCO0FBQ3hCLFFBQUcsS0FBS3ZCLE1BQUwsQ0FBWXVCLE1BQVosSUFBc0JBLE1BQXpCLEVBQWlDLEtBQUt0QixVQUFMLENBQWdCTSxJQUFoQixDQUFxQkMsZUFBTWdCLE1BQU4sQ0FBYUQsTUFBTSxDQUFDRSxXQUFQLEVBQWIsQ0FBckI7QUFDakMsV0FBTyxJQUFQO0FBQ0g7O0FBRURDLEVBQUFBLFFBQVEsQ0FBQ0MsSUFBRCxFQUFlO0FBQ25CLFFBQUcsS0FBSzNCLE1BQUwsQ0FBWTJCLElBQVosSUFBb0JBLElBQXZCLEVBQTZCLEtBQUsxQixVQUFMLENBQWdCTSxJQUFoQixDQUFxQlcsSUFBSSxDQUFDQyxTQUFMLENBQWVRLElBQWYsQ0FBckI7QUFDN0IsV0FBTyxJQUFQO0FBQ0g7O0FBRURDLEVBQUFBLFVBQVUsQ0FBQ0MsTUFBRCxFQUFpQkMsVUFBakIsRUFBc0M7QUFDNUMsUUFBR0QsTUFBTSxJQUFJQyxVQUFiLEVBQXlCLEtBQUs3QixVQUFMLENBQWdCTSxJQUFoQixDQUFzQixHQUFFc0IsTUFBTyxJQUFHQyxVQUFXLEVBQTdDO0FBQ3pCLFdBQU8sSUFBUDtBQUNIOztBQUVEQyxFQUFBQSxLQUFLLEdBQUc7QUFDSixXQUFPLEtBQUs5QixVQUFMLENBQWdCK0IsSUFBaEIsQ0FBcUIsR0FBckIsQ0FBUDtBQUNIOztBQTVEZTs7ZUErRExsQyxhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRhdGVmb3JtYXQgZnJvbSAnZGF0ZWZvcm1hdCc7XG5pbXBvcnQgeyBHbG9iYWxMb2dDb25maWcgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5cbmNsYXNzIFN0cmluZ0J1aWxkZXIge1xuICAgIHByaXZhdGUgY29uZmlnOiBHbG9iYWxMb2dDb25maWc7XG4gICAgcHJpdmF0ZSBwcmludFF1ZXVlOiBBcnJheTxzdHJpbmc+O1xuICAgIHByaXZhdGUgZmlsdGVyZWRIZWFkZXJMaXN0OiBBcnJheTxTdHJpbmc+O1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBHbG9iYWxMb2dDb25maWcpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMucHJpbnRRdWV1ZSA9IFtdO1xuICAgICAgICB0aGlzLmZpbHRlcmVkSGVhZGVyTGlzdCA9IFsnY29tbW9uJywgJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb250ZW50LXR5cGUnLCAnY29udGVudC1sZW5ndGgnLCAndmFyeScsICdkYXRlJywgJ2Nvbm5lY3Rpb24nLCAnY29udGVudC1zZWN1cml0eS1wb2xpY3knXTtcbiAgICB9XG5cbiAgICBtYWtlTG9nVHlwZVdpdGhQcmVmaXgobG9nVHlwZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHByZWZpeCA9IHRoaXMuY29uZmlnLnByZWZpeFRleHQgPT09IGZhbHNlID8gYFske2xvZ1R5cGV9XWAgOiBgWyR7dGhpcy5jb25maWcucHJlZml4VGV4dCB8fCAnQXhpb3MnfV1bJHtsb2dUeXBlfV1gO1xuICAgICAgICB0aGlzLnByaW50UXVldWUucHVzaChjaGFsay5ncmVlbihwcmVmaXgpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbWFrZURhdGVGb3JtYXQoZGF0ZTogRGF0ZSkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGRhdGVGb3JtYXQgPSBkYXRlZm9ybWF0KGRhdGUsIHRoaXMuY29uZmlnLmRhdGVGb3JtYXQgfHwgJ2lzb0RhdGVUaW1lJyk7XG4gICAgICAgIHRoaXMucHJpbnRRdWV1ZS5wdXNoKGRhdGVGb3JtYXQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtYWtlSGVhZGVyKGhlYWRlcnM/OiB7IFtrZXk6c3RyaW5nXSA6IHt2YWx1ZTpzdHJpbmd9fSkge1xuICAgICAgICBpZih0aGlzLmNvbmZpZy5oZWFkZXJzICYmIGhlYWRlcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlck1hcDp7IFtrZXk6c3RyaW5nXSA6IHt2YWx1ZTpzdHJpbmd9fSA9IHt9O1xuICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gaGVhZGVycykge1xuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmZpbHRlcmVkSGVhZGVyTGlzdC5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlck1hcFtrZXldID0gaGVhZGVyc1trZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wcmludFF1ZXVlLnB1c2goSlNPTi5zdHJpbmdpZnkoaGVhZGVyTWFwKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbWFrZVVybCh1cmw/OiBzdHJpbmcpIHtcbiAgICAgICAgaWYodGhpcy5jb25maWcudXJsICYmIHVybCkgdGhpcy5wcmludFF1ZXVlLnB1c2godXJsKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbWFrZU1ldGhvZChtZXRob2Q/OiBzdHJpbmcpIHtcbiAgICAgICAgaWYodGhpcy5jb25maWcubWV0aG9kICYmIG1ldGhvZCkgdGhpcy5wcmludFF1ZXVlLnB1c2goY2hhbGsueWVsbG93KG1ldGhvZC50b1VwcGVyQ2FzZSgpKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1ha2VEYXRhKGRhdGE6IG9iamVjdCkge1xuICAgICAgICBpZih0aGlzLmNvbmZpZy5kYXRhICYmIGRhdGEpIHRoaXMucHJpbnRRdWV1ZS5wdXNoKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbWFrZVN0YXR1cyhzdGF0dXM/Om51bWJlciwgc3RhdHVzVGV4dD86IHN0cmluZykge1xuICAgICAgICBpZihzdGF0dXMgJiYgc3RhdHVzVGV4dCkgdGhpcy5wcmludFF1ZXVlLnB1c2goYCR7c3RhdHVzfToke3N0YXR1c1RleHR9YCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGJ1aWxkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmludFF1ZXVlLmpvaW4oJyAnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0J1aWxkZXI7XG4iXX0=
