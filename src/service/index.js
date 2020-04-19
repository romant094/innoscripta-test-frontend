import {SERVER} from '../constants';

const {origin} = window.location;
const apiUrl = origin === 'http://localhost:3000' ? `${SERVER}/api/v1` : '/api/v1';

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
