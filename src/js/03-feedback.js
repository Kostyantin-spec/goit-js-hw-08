import throttle from 'lodash.throttle';




const STORAGE_KEY = 'feedback-msg';

const formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('email', throttle(onFormSubmit, 500));
refs.textarea.addEventListener('message', throttle(onTextareaInput, 500));

refs.form.addEventListener('input',e => {
    //consolr.log(e.target.name);
    //console.log(e.target.value);

    formData[e.target.name] = e.target.value;

    console.log(formData);
})

//Останавливаем поведение по умалчанию
//Убираем сообщение из хранилища
//Очищаем форму


function onFormSubmit(evt) {
    evt.preventDefault();

    console.log('Отправляем форму');

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

//Получить значение поля
//Сохранить его в хранилище

function onTextareaInput(evt) {
    const message = evt.target.value;

    localStorage.setItem(STORAGE_KEY, message);
}

//Получаем значение из хранилеща
//Если там чтото біло, обновляем DOM

function populateMessageOutput() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if (savedMessage) {   
    console.log(savedMessage);
    refs.textarea.value = savedMessage;
    }
}

