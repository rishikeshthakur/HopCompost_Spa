"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var BaseService = (function () {
    function BaseService() {
    }
    BaseService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    BaseService.prototype.save = function (item, url, _http) {
        if (!item.Id || item.Id === 0) {
            return _http.post(url, JSON.stringify(item), this.getOptions())
                .catch(this.handleError);
        }
        return _http.put(url + "/" + item.Id, JSON.stringify(item), this.getOptions())
            .catch(this.handleError);
    };
    BaseService.prototype.delete = function (id, url, _http) {
        return _http.delete(url + "?id=" + id, this.getOptions())
            .catch(this.handleError);
    };
    BaseService.prototype.getOptions = function () {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    return BaseService;
}());
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map