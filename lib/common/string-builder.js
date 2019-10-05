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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vc3RyaW5nLWJ1aWxkZXIudHMiXSwibmFtZXMiOlsiU3RyaW5nQnVpbGRlciIsImNvbnN0cnVjdG9yIiwiY29uZmlnIiwicHJpbnRRdWV1ZSIsImZpbHRlcmVkSGVhZGVyTGlzdCIsIm1ha2VQcmVmaXgiLCJsb2dUeXBlIiwicHJlZml4IiwicHJlZml4VGV4dCIsInB1c2giLCJjaGFsayIsImdyZWVuIiwibWFrZURhdGVGb3JtYXQiLCJkYXRlRm9ybWF0IiwiRGF0ZSIsIm1ha2VIZWFkZXIiLCJoZWFkZXJzIiwiaGVhZGVyTWFwIiwia2V5IiwiaW5jbHVkZXMiLCJKU09OIiwic3RyaW5naWZ5IiwibWFrZVVybCIsInVybCIsIm1ha2VNZXRob2QiLCJtZXRob2QiLCJ5ZWxsb3ciLCJ0b1VwcGVyQ2FzZSIsIm1ha2VEYXRhIiwiZGF0YSIsIm1ha2VTdGF0dXMiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiYnVpbGQiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7OztBQUVBLE1BQU1BLGFBQU4sQ0FBb0I7QUFLaEJDLEVBQUFBLFdBQVcsQ0FBQ0MsTUFBRCxFQUEwQjtBQUFBOztBQUFBOztBQUFBOztBQUNqQyxTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsU0FBS0Msa0JBQUwsR0FBMEIsQ0FBQyxRQUFELEVBQVcsUUFBWCxFQUFxQixLQUFyQixFQUE0QixNQUE1QixFQUFvQyxNQUFwQyxFQUE0QyxLQUE1QyxFQUFtRCxPQUFuRCxFQUE0RCxjQUE1RCxFQUE0RSxnQkFBNUUsRUFBOEYsTUFBOUYsRUFBc0csTUFBdEcsRUFBOEcsWUFBOUcsRUFBNEgseUJBQTVILENBQTFCO0FBQ0g7O0FBRURDLEVBQUFBLFVBQVUsQ0FBQ0MsT0FBRCxFQUEwQjtBQUNoQyxVQUFNQyxNQUFNLEdBQUcsS0FBS0wsTUFBTCxDQUFZTSxVQUFaLEtBQTJCLEtBQTNCLEdBQW9DLElBQUdGLE9BQVEsR0FBL0MsR0FBcUQsSUFBRyxLQUFLSixNQUFMLENBQVlNLFVBQVosSUFBMEIsT0FBUSxLQUFJRixPQUFRLEdBQXJIO0FBQ0EsU0FBS0gsVUFBTCxDQUFnQk0sSUFBaEIsQ0FBcUJDLGVBQU1DLEtBQU4sQ0FBWUosTUFBWixDQUFyQjtBQUNBLFdBQU8sSUFBUDtBQUNIOztBQUVESyxFQUFBQSxjQUFjLEdBQUc7QUFDYjtBQUNBLFVBQU1DLFVBQVUsR0FBRyx5QkFBVyxJQUFJQyxJQUFKLEVBQVgsRUFBdUIsS0FBS1osTUFBTCxDQUFZVyxVQUFaLElBQTBCLGFBQWpELENBQW5CO0FBQ0EsU0FBS1YsVUFBTCxDQUFnQk0sSUFBaEIsQ0FBcUJJLFVBQXJCO0FBQ0EsV0FBTyxJQUFQO0FBQ0g7O0FBRURFLEVBQUFBLFVBQVUsQ0FBQ0MsT0FBRCxFQUE2QztBQUNuRCxRQUFHLEtBQUtkLE1BQUwsQ0FBWWMsT0FBWixJQUF1QkEsT0FBMUIsRUFBbUM7QUFDL0IsWUFBTUMsU0FBMEMsR0FBRyxFQUFuRDs7QUFDQSxXQUFJLElBQUlDLEdBQVIsSUFBZUYsT0FBZixFQUF3QjtBQUNwQixZQUFHLENBQUMsS0FBS1osa0JBQUwsQ0FBd0JlLFFBQXhCLENBQWlDRCxHQUFqQyxDQUFKLEVBQTJDO0FBQ3ZDRCxVQUFBQSxTQUFTLENBQUNDLEdBQUQsQ0FBVCxHQUFpQkYsT0FBTyxDQUFDRSxHQUFELENBQXhCO0FBQ0g7QUFDSjs7QUFFRCxXQUFLZixVQUFMLENBQWdCTSxJQUFoQixDQUFxQlcsSUFBSSxDQUFDQyxTQUFMLENBQWVKLFNBQWYsQ0FBckI7QUFDSDs7QUFDRCxXQUFPLElBQVA7QUFDSDs7QUFFREssRUFBQUEsT0FBTyxDQUFDQyxHQUFELEVBQWU7QUFDbEIsUUFBR0EsR0FBSCxFQUFRLEtBQUtwQixVQUFMLENBQWdCTSxJQUFoQixDQUFxQmMsR0FBckI7QUFDUixXQUFPLElBQVA7QUFDSDs7QUFFREMsRUFBQUEsVUFBVSxDQUFDQyxNQUFELEVBQWtCO0FBQ3hCLFFBQUdBLE1BQUgsRUFBVyxLQUFLdEIsVUFBTCxDQUFnQk0sSUFBaEIsQ0FBcUJDLGVBQU1nQixNQUFOLENBQWFELE1BQU0sQ0FBQ0UsV0FBUCxFQUFiLENBQXJCO0FBQ1gsV0FBTyxJQUFQO0FBQ0g7O0FBRURDLEVBQUFBLFFBQVEsQ0FBQ0MsSUFBRCxFQUFlO0FBQ25CLFFBQUdBLElBQUgsRUFBUyxLQUFLMUIsVUFBTCxDQUFnQk0sSUFBaEIsQ0FBcUJXLElBQUksQ0FBQ0MsU0FBTCxDQUFlUSxJQUFmLENBQXJCO0FBQ1QsV0FBTyxJQUFQO0FBQ0g7O0FBRURDLEVBQUFBLFVBQVUsQ0FBQ0MsTUFBRCxFQUFpQkMsVUFBakIsRUFBc0M7QUFDNUMsUUFBR0QsTUFBTSxJQUFJQyxVQUFiLEVBQXlCLEtBQUs3QixVQUFMLENBQWdCTSxJQUFoQixDQUFzQixHQUFFc0IsTUFBTyxJQUFHQyxVQUFXLEVBQTdDO0FBQ3pCLFdBQU8sSUFBUDtBQUNIOztBQUVEQyxFQUFBQSxLQUFLLEdBQUc7QUFDSixXQUFPLEtBQUs5QixVQUFMLENBQWdCK0IsSUFBaEIsQ0FBcUIsR0FBckIsQ0FBUDtBQUNIOztBQTVEZTs7ZUErRExsQyxhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRhdGVmb3JtYXQgZnJvbSAnZGF0ZWZvcm1hdCc7XG5pbXBvcnQgeyBHbG9iYWxMb2dDb25maWcgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5cbmNsYXNzIFN0cmluZ0J1aWxkZXIge1xuICAgIHByaXZhdGUgY29uZmlnOiBHbG9iYWxMb2dDb25maWc7XG4gICAgcHJpdmF0ZSBwcmludFF1ZXVlOiBBcnJheTxzdHJpbmc+O1xuICAgIHByaXZhdGUgZmlsdGVyZWRIZWFkZXJMaXN0OiBBcnJheTxTdHJpbmc+O1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBHbG9iYWxMb2dDb25maWcpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMucHJpbnRRdWV1ZSA9IFtdO1xuICAgICAgICB0aGlzLmZpbHRlcmVkSGVhZGVyTGlzdCA9IFsnY29tbW9uJywgJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb250ZW50LXR5cGUnLCAnY29udGVudC1sZW5ndGgnLCAndmFyeScsICdkYXRlJywgJ2Nvbm5lY3Rpb24nLCAnY29udGVudC1zZWN1cml0eS1wb2xpY3knXTtcbiAgICB9XG5cbiAgICBtYWtlUHJlZml4KGxvZ1R5cGU6IHN0cmluZyB8IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHByZWZpeCA9IHRoaXMuY29uZmlnLnByZWZpeFRleHQgPT09IGZhbHNlID8gYFske2xvZ1R5cGV9XWAgOiBgWyR7dGhpcy5jb25maWcucHJlZml4VGV4dCB8fCAnQXhpb3MnfV1bJHtsb2dUeXBlfV1gO1xuICAgICAgICB0aGlzLnByaW50UXVldWUucHVzaChjaGFsay5ncmVlbihwcmVmaXgpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbWFrZURhdGVGb3JtYXQoKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgZGF0ZUZvcm1hdCA9IGRhdGVmb3JtYXQobmV3IERhdGUoKSwgdGhpcy5jb25maWcuZGF0ZUZvcm1hdCB8fCAnaXNvRGF0ZVRpbWUnKTtcbiAgICAgICAgdGhpcy5wcmludFF1ZXVlLnB1c2goZGF0ZUZvcm1hdCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1ha2VIZWFkZXIoaGVhZGVycz86IHsgW2tleTpzdHJpbmddIDoge3ZhbHVlOnN0cmluZ319KSB7XG4gICAgICAgIGlmKHRoaXMuY29uZmlnLmhlYWRlcnMgJiYgaGVhZGVycykge1xuICAgICAgICAgICAgY29uc3QgaGVhZGVyTWFwOnsgW2tleTpzdHJpbmddIDoge3ZhbHVlOnN0cmluZ319ID0ge307XG4gICAgICAgICAgICBmb3IobGV0IGtleSBpbiBoZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuZmlsdGVyZWRIZWFkZXJMaXN0LmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyTWFwW2tleV0gPSBoZWFkZXJzW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnByaW50UXVldWUucHVzaChKU09OLnN0cmluZ2lmeShoZWFkZXJNYXApKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtYWtlVXJsKHVybD86IHN0cmluZykge1xuICAgICAgICBpZih1cmwpIHRoaXMucHJpbnRRdWV1ZS5wdXNoKHVybCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1ha2VNZXRob2QobWV0aG9kPzogc3RyaW5nKSB7XG4gICAgICAgIGlmKG1ldGhvZCkgdGhpcy5wcmludFF1ZXVlLnB1c2goY2hhbGsueWVsbG93KG1ldGhvZC50b1VwcGVyQ2FzZSgpKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1ha2VEYXRhKGRhdGE6IG9iamVjdCkge1xuICAgICAgICBpZihkYXRhKSB0aGlzLnByaW50UXVldWUucHVzaChKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1ha2VTdGF0dXMoc3RhdHVzPzpudW1iZXIsIHN0YXR1c1RleHQ/OiBzdHJpbmcpIHtcbiAgICAgICAgaWYoc3RhdHVzICYmIHN0YXR1c1RleHQpIHRoaXMucHJpbnRRdWV1ZS5wdXNoKGAke3N0YXR1c306JHtzdGF0dXNUZXh0fWApO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBidWlsZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpbnRRdWV1ZS5qb2luKCcgJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdCdWlsZGVyOyJdfQ==
