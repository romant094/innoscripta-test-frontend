const {origin} = window.location;

export class PizzaService {
    _apiBase = origin === 'http://localhost:3000' ? 'http://localhost:9000/api' : '/api';

    request = async (url, method = 'GET', data = null) => {
        try {
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
        } catch (e) {
            console.error('Error:', e.message)
        }
    }
}
