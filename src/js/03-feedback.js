import throttle from 'lodash.throttle';


const formEl = document.querySelector('.feedback-form');
const emailInp = document.querySelector('input[name="email"]');
const passInp = document.querySelector('textarea[name="message"]');
const submitBtn = document.querySelector('button[type="submit"]');

submitBtn.classList.add('submit');

formEl.addEventListener('submit', formSubmitHadler)

function formSubmitHadler(event) {
    event.preventDefault();

    const form = event.currentTarget.elements;
    const email = form.email.value;
    const message = form.message.value;
    
    if (!message || !email) return alert('All the fields should be filled!')

    const formDataObj = {
        email,
        message,
    }
   const formData = new FormData(event.currentTarget);

    formData.forEach((value, name) => {
        const formDataCheck = {};

        formDataCheck[name] = value;
        
    })
     console.log('Object form data', formDataObj);
    

    formEl.reset();
}


