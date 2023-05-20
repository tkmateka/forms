const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

let user;

const cancel = (ev) => {
    ev.preventDefault();
    form.reset();
}

const _submit = (ev) => {
    ev.preventDefault();

    if (handleValidations()) {
        let users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
        // Check if user exists
        if (users.find(_user => _user.email === emailInput.value)) {
            // Store the found user
            user = users.filter(_user => _user.email === emailInput.value)[0];

            // Check if password matches
            if (user.password == passwordInput.value) {
                alert(`Logged in successfully`);
                window.open('/home.html', '_self');
            } else {
                alert(`Incorrect password`);
            }
        } else {
            alert(`${emailInput.value} not found`);
        }


    }
}

const handleValidations = () => {
    if (!emailInput.value) {
        alert("Email is required");
        return false;
    }
    if (!passwordInput.value) {
        alert("Password is required");
        return false;
    }

    return true;
}