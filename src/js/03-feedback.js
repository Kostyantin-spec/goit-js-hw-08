import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-msg';

const formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('textarea[name="message"'),
    email: document.querySelector('input[name="email"]'),
};

refs.form.addEventListener('submit', throttle(onFormSubmit, 500));

refs.form.addEventListener('input', throttle(onFormInput,500));
function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

window.addEventListener("load", populateTextarea);

function onFormSubmit(evt) {
    evt.preventDefault();

    refs.textarea.value = "";
    refs.email.value = "";
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
}

function populateTextarea() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedData !== null) {   
    console.log(savedData);
    refs.textarea.value = savedData.message;
    refs.email.value = savedData.email;
    }
}

