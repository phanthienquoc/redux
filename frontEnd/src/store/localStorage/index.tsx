export function getItem(key) {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : '';
}

export function setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function removeItem(key) {
    localStorage.removeItem(key);
}

export function clearAll() {
    localStorage.clear();
}
