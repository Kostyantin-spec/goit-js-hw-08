import throttle from 'lodash.throttle';


// const formEl = document.querySelector('.feedback-form');
// const emailInp = document.querySelector('input[name="email"]');
// const passInp = document.querySelector('textarea[name="message"]');
// const submitBtn = document.querySelector('button[type="submit"]');

// submitBtn.classList.add('submit');

// formEl.addEventListener('submit', formSubmitHadler)

// function formSubmitHadler(event) {
//     event.preventDefault();

//     const form = event.currentTarget.elements;
//     const email = form.email.value;
//     const message = form.message.value;
    
//     if (!message || !email) return alert('All the fields should be filled!')

//     const formDataObj = {
//         email,
//         message,
//     }
//    const formData = new FormData(event.currentTarget);

//     formData.forEach((value, name) => {
//         const formDataCheck = {};

//         formDataCheck[name] = value;
        
//     })
//      console.log('Object form data', formDataObj);
    

//     formEl.reset();
// }

const STORAGE_KEY = 'feedback-msg';

const refs = {
    input: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
};

refs.input.addEventListener('email', throttle(onFormSubmit, 500));
refs.textarea.addEventListener('message', throttle(onTextareaInput, 500));

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
    const message = evt.currentTarget.value;

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

