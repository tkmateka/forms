const form = document.getElementById('form');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

const cancel = (ev) => {
    ev.preventDefault();
    form.reset();
}

const _submit = (ev) => {
    ev.preventDefault();

    if (handleValidations()) {
        let users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
        // Store Data
        let newUser = {
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            email: emailInput.value,
            password: passwordInput.value,
        };

        if (users.filter(_user => _user.email === newUser.email).length > 0) {
            alert(`${newUser.email} already exists`);
            return false;
        }

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        form.reset();
        alert(`${newUser.firstName} added successfully`);
        window.open('/login.html', '_self');
    }
}

const handleValidations = () => {
    if (!firstNameInput.value) {
        alert("First Name is required");
        return false;
    }
    if (!lastNameInput.value) {
        alert("Last Name is required");
        return false;
    }
    if (!emailInput.value) {
        alert("Email is required");
        return false;
    }
    if (!passwordInput.value) {
        alert("Password is required");
        return false;
    }
    if (passwordInput.value !== confirmPasswordInput.value) {
        alert("Password doesn't match");
        return false;
    }

    return true;
}