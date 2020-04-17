import Cookies from 'cookies-js';

const {origin} = window.location;

export class PizzaService {
    _apiBase = origin === 'http://localhost:3000' ? 'http://localhost:9000/api/v1' : '/api/v1';

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
