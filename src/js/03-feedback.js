import throttle from 'lodash.throttle';

//jQuery(window).on('scroll', _.throttle(updatePosition, 100));

//var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
//jQuery(element).on('click', throttled);

//jQuery(window).on('popstate', throttled.cancel);
//const formEl = document.querySelector('.login-form');
//const emailInp = document.querySelector('input[name="email"]');
//const passInp = document.querySelector('input[name="password"]');
//const submitBtn = document.querySelector('button[type="submit"]');

//submitBtn.classList.add('submit');

formEl.addEventListener('submit', formSubmitHadler)

function formSubmitHadler(event) {
    event.preventDefault();

    const form = event.currentTarget.elements;
    const email = form.email.value;
    const password = form.password.value;
    
    if (!password || !email) return alert('All the fields should be filled!')

    const formDataObj = {
        email,
        password,
    }
   const formData = new FormData(event.currentTarget);

    formData.forEach((value, name) => {
        const formDataCheck = {};

        formDataCheck[name] = value;
        //console.log('Data inside FORM DATA CLASS', formDataCheck);
    })
     console.log('Object form data', formDataObj);
    // console.log('Class Form Data', formData);

    formEl.reset();
}



