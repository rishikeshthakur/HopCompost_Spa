import { Response, Headers, RequestOptions, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

export class BaseService {
    handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    save(item: any, url: string, _http: Http) {
        if (!item.Id || item.Id === 0) {
            return _http.post(url, JSON.stringify(item), this.getOptions())
                .catch(this.handleError);
        }

        return _http.put(`${url}/${item.Id}`, JSON.stringify(item), this.getOptions())
                .catch(this.handleError);
    }

    delete(id: number, url: string, _http: Http) {
        return _http.delete(`${url}?id=${id}`, this.getOptions())
            .catch(this.handleError);
    }

    getOptions() : RequestOptions {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({ headers: headers });

        return options;
    }
}
