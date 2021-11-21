const ajaxGet = (url, timeout) => {
    return new Promise ((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.timeout = timeout;

        xhr.onload = () => {
            resolve(xhr.response)
        }

        xhr.onerror = (err) => {
            reject(err)
        }
    })
}