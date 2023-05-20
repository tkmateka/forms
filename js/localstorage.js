console.log('Hey there');

const setItem = (key, value) => {
    if (typeof key !== "string" || typeof value !== "string") {
        alert("Local Storage only accepts string key value pairs");
        return;
    }

    browser.application.localStorage.storage[key] = value;
    console.log('Our Local Storage', browser);
}

const getItem = (key) => {
    return browser.application.localStorage.storage[key];
}

const browser = {
    application: {
        localStorage: {
            storage: {},
            setItem: setItem,
            getItem: getItem
        },
        sessionStorage: {},
        cookies: {}
    }
}

const _localStorage = browser.application.localStorage;

console.log(localStorage.setItem('firstName', 'Tukiso'));
console.log(localStorage.setItem('lastName', 'Mateka'));

console.log(localStorage.setItem('firstName', 'kabelo'));
console.log(localStorage.setItem('lastName', 'mayweather'));

console.log(localStorage.getItem('firstName'));
console.log(localStorage.getItem('lastName'));