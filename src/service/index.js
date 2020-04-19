import {HEROKU_API_URI, LOCAL_API_URI} from '../constants';

const {origin} = window.location;
const apiUrl = origin === 'http://localhost:3000' ? HEROKU_API_URI : LOCAL_API_URI;

export class PizzaService {
    _apiBase = apiUrl;

    request = async (url, method = 'GET', data = null) => {
        const headers = {};
        let body;

        if (data) {
            headers['Content-Type'] = 'application/json';
            body = JSON.stringify(data)
        }

        const response = await fetch(this._apiBase + url, {
            method,
            headers,
            body
        });
        return await response.json()
    }
}
