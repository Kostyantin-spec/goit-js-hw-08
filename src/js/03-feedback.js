import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-msg';

const formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('textarea[name="message"'),
    email: document.querySelector('input[name="email"]'),
};

refs.form.addEventListener('email', throttle(onFormSubmit, 500));
//refs.textarea.addEventListener('message', throttle(onTextareaInput, 500));

// refs.form.addEventListener('input',e => {
//     consolr.log(e.target.name);
//     console.log(e.target.value);

//     formData[e.target.name] = e.target.value;
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    
// });

refs.form.addEventListener('input', throttle(onFormInput,500));
function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON>stringify(formData));
}


populateTextarea();




//Останавливаем поведение по умалчанию
//Убираем сообщение из хранилища
//Очищаем форму


function onFormSubmit(evt) {
    evt.preventDefault();

    refs.textarea.value = "";
    refs.email.value = "";
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

//Получить значение поля
//Сохранить его в хранилище

// function onTextareaInput(evt) {
//     const message = evt.target.value;

//     localStorage.setItem(STORAGE_KEY, message);
// }

//Получаем значение из хранилеща
//Если там чтото біло, обновляем DOM

function populateTextarea() {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData !== null) {   
    //console.log(savedData);
    refs.textarea.value = savedData;
    refs.email.value = savedData.email;
    }
}

// function initForm() {
//     if (persistedFilters) {
//         persistedFilters = JSON.parse(persistedFilters);
//         console.log(persistedFilters);
//     }
// }
