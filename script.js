// form validation //
const form = document.getElementById("form");
const username = document.getElementById("jūsų-vardas");
const email = document.getElementById("el-paštas");
const phone = document.getElementById("telefono-numeris");
const message = document.getElementById("zinutė");
const checkbox = document.getElementById("check");

let usernameValid, phoneValid, emailValid, messageValid, checkboxValid;
usernameValid = phoneValid = emailValid = messageValid = checkboxValid = false;

checkFormValidity();

username.addEventListener('blur', (e) => {
    e.preventDefault();
    requiredCheck(username.value.trim(), username, 'error-name', usernameValid);
});

email.addEventListener('blur', (e) => {
    e.preventDefault();
    requiredCheck(email.value.trim(), email, 'error-email');
    emailIsValid(email.value.trim(), email, 'error-email');
});

phone.addEventListener('blur', (e) => {
    e.preventDefault();
    requiredCheck(phone.value.trim(), phone, 'error-phone');
    numberCheck(phone.value.trim(), phone, 'error-phone');
});

message.addEventListener('blur', (e) => {
    e.preventDefault();
    requiredCheck(message.value.trim(), message, 'error-message');
});

checkbox.addEventListener('change', (e) => {
    e.preventDefault();
    requiredCheck(checkbox.checked, checkbox, 'error-checkbox');
});

function numberCheck (value, input, id) {
    let errorMessage = document.getElementById(id);
    
    if(isNaN(value)) {
        errorMessage.innerText = "Įvestas neteisingas telefono numeris";
        errorMessage.className = "error";
        input.className = 'err';
        phoneValid = false;
    }
    checkFormValidity();
}


function requiredCheck(value, input, id) {
    let errorMessage = document.getElementById(id);

    if(value === '' || value === false) {
        errorMessage.innerText = "Privalomas laukas";
        errorMessage.className = "error";
        value === '' ? input.className = 'err' : input.className = 'error-checkbox';
       
        switch(id) {
            case 'error-name':
                usernameValid = false;
              break;
            case 'error-email':
                emailValid = false;
              break;
            case 'error-phone':
                phoneValid = false;
              break;
            case 'error-message':
                messageValid = false;
              break;
            case 'error-checkbox':
                checkboxValid = false;
              break;
          }
    } else {
        input.className = '';
        errorMessage.className = "hide";

        switch(id) {
            case 'error-name':
                usernameValid = true;
              break;
            case 'error-email':
                emailValid = true;
              break;
            case 'error-phone':
                phoneValid = true;
              break;
            case 'error-message':
                messageValid = true;
              break;
            case 'error-checkbox':
                checkboxValid = true;
              break;
            default:
                usernameValid = true;
          }
    }
    checkFormValidity();
}

function emailIsValid (value, input, id) {
    let errorMessage = document.getElementById(id);
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    if (!valid && value !== '') {
        errorMessage.innerText = "Įvestas neteisingas el. paštas";
        errorMessage.className = "error";
        input.className = 'err';
        emailValid = false;
    }
    checkFormValidity();
}

function checkFormValidity () {
    if (usernameValid && phoneValid && emailValid && messageValid &&checkboxValid) {
        document.getElementById("submit-button").disabled = false;
    } else {
        document.getElementById("submit-button").disabled = true;
    }
}

// navigation scroll //
const navLinks = document.querySelectorAll("nav ul li a");

for (const navLink of navLinks) {
    navLink.addEventListener('click', linkClickHandler)
}

function linkClickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    document.getElementById("burger-toggle").checked = false;


    let offset = document.querySelector(href).offsetTop;
    offset = offset - 70;
 
  scrollTo({
    top: offset,
    behavior: "smooth"
  });

}

// carousel slider //
const carousel = document.querySelector(".carousel");
const rightArrow = document.querySelector(".arrow-svg-right");
const leftArrow = document.querySelector(".arrow-svg-left");

let offset = 0;
const max = 120;

rightArrow.addEventListener("click", function() {
  if (offset < max) {
    offset += 30;
    carousel.style.transform = `translateX(${-offset}%)`;
  }
});

leftArrow.addEventListener("click", function() {
  if(offset !== 0) {
    offset -= 30;
    carousel.style.transform = `translateX(${-offset}%)`;
  }
});