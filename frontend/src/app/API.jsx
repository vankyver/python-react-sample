const DEFAULT_HEADERS = {
    "Content-Type": 'application/json'
};

export default class API {

    /**
     * Send fetch
     * @param request
     * @param requestBody
     * @param rawResponse do not automatically convert response data to JSON
     * @returns {*|Promise.<*>}
     */
    static fetch(request, requestBody, rawResponse) {
        let url = request.url;
        let params = {
            credentials: 'same-origin',
            method: request.method || 'get',
            headers: DEFAULT_HEADERS
        };

        if (params.method !== 'get') {
            params['body'] = JSON.stringify(requestBody)
        } else if (requestBody) {
            url = API.getUrlWithParams(request.url, requestBody)
        }

        return fetch(url, params)
            .then(response => rawResponse ? response : response.json())
    }

    /**
     * Builds query string from object
     * @param url
     * @param params
     * @returns {string}
     */
    static getUrlWithParams(url, params) {
        return url + '?' + Object.keys(params)
                .reduce((a, k) => {
                    a.push(k + '=' + encodeURIComponent(params[k]));
                    return a
                }, []).join('&');
    }
}


API.GET_TASKS = {
    method: 'get',
    url: '/api/tasks'
};

API.PUT_TASK = {
    method: 'put',
    url: '/api/schedule'
};

