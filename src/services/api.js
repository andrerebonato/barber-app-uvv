import moment from "moment";

export function createRequest(
  url,
  method,
  body = {},
  headers = {}
) {
    let options = {
        method: method,
        headers: {
            "content-type": "application/json",
            timezone: moment().format("Z"),
            ...headers,
        },
        body: undefined,
    };

    if (body) options.body = JSON.stringify(body);

    return fetch(url, options);
}

export function sendPost(
  url,
  body,
  headers
) {
    return createRequest(url, "POST", body, headers);
}

export function sendPostFile(url, file, headers) {
    const formData = new FormData();

    formData.append("file", file);

    const options = {
        method: "POST",
        body: formData,
        headers: {
        // 'Content-Type': 'multipart/form-data',
        ...headers,
        },
    };

    return fetch(url, options);
}

export function sendPut(url, body, headers) {
    return createRequest(url, "PUT", body, headers);
}

export function sendGet(url, headers) {
    return createRequest(url, "GET", null, headers);
}

export function sendDelete(url, headers) {
    return createRequest(url, "DELETE", null, headers);
}