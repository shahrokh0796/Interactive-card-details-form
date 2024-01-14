import "./index.html";
import "../styles/styles.scss";
import bgMainMobileSrc from "../src/images/bg-main-mobile.png";
import tick from "../src/images/icon-complete.svg";


const nameField = document.querySelector("#name");
const acNumberField = document.querySelector("#ac-number");
const mmField = document.querySelector("input[placeholder=MM]");
const yyField = document.querySelector("input[placeholder=YY]");
const cvcField = document.querySelector("#cvc");
const nameFieldError = document.querySelector(".nameError");
const numberFieldError = document.querySelector(".numberError");
const dateFieldsError =  document.querySelector(".yyError");
const cvcFieldError =  document.querySelector(".cvcError");
const form = document.querySelector(".form");
const iACN = document.querySelector(".iACN");
const iACVCN = document.querySelector(".iACVCN");
const bgMainMobile = document.querySelector(".blue-background img");
const formRight = document.querySelector(".formRight");
const cvc = document.querySelector(".cvc");
const acc = document.querySelector(".acn");
const loadingMessage = document.querySelector("#loading");

iACN.addEventListener("input", (e) => {
    let acountVal = iACN.value;
    if (acountVal) {
        let result = acountVal.match(/.{1,4}/g);
        acc.textContent = result.join(" ");
    } 
    
    if(acountVal.length === 4 || acountVal.length === 9 || 
        acountVal.length === 14 || acountVal.length === 19) {
        iACN.value += " ";
    }
});
iACVCN.addEventListener("input", (e) => {
    cvc.textContent = e.target.value;
});
if (window.innerWidth <= 630) {
    bgMainMobile.src= `${bgMainMobileSrc}`;
}


const isRequired = (value) => value === "" ? false : true;

function showError(input, errorEl, message) {
    input.classList.remove("success");
    input.classList.add("error");
    errorEl.style.color= 'red';
    errorEl.textContent = message;

}

function showSuccess(input, errorEl) {
    input.classList.remove('error');
    input.classList.add("success");
    errorEl.textContent = "";
}


function isNameValid() {
    let valid = false;
        
    if (!isRequired(nameField.value.trim())) {
        showError(nameField, nameFieldError, "name field can't be empty");
    } else {
        showSuccess(nameField, nameFieldError);
        valid = true;
    }
    return valid;
}

function accountNumberValid() {
    let valid = false;

    let acNumber =  acNumberField.value.trim();
    let toInt = parseInt(acNumber);

    if (isNaN(toInt)){
        showError(acNumberField, numberFieldError, "Wrong, format, numbers only");
    } else if (!isRequired(acNumber)) {
        showError(acNumberField, numberFieldError, "This field can't be empty");
    } else {
        showSuccess(acNumberField, numberFieldError);
        
        valid = true;
    }
    return valid;
}

function isMonthValid() {
    let valid = false;
    let mm = mmField.value.trim();
    if (mm.length === 0) {
        showError(mmField, dateFieldsError, "cant't be blank");
    } else if (isNaN(mm)) {
        showError(mmField, dateFieldsError, "Must be numbers")
    } else {
        showSuccess(mmField, dateFieldsError);
        valid = true;
    }
    return valid;
}

function isYearValid() {
    let valid = false;
        
    let yy = yyField.value.trim();
    if (yy.length === 0) {
        showError(yyField, dateFieldsError, "cant't be blank");
    } else if (isNaN(yy)) {
        showError(yyField, dateFieldsError, "Must be digits")
    } else {
        showSuccess(yyField, dateFieldsError);
        valid = true;
    }
    return valid;
}

function isCVCValid() {
    let valid = false;
    let cvc = cvcField.value.trim();
    if (cvc.length === 0) {
        showError(cvcField, cvcFieldError, "cant't be blank");
    } else if (isNaN(cvc)) {
        showError(cvcField, cvcFieldError, "Must be digits");
    } else {
        showSuccess(cvcField, cvcFieldError);
        valid = true;
    }
    return valid;
}


form.addEventListener('submit', async function(e) {
    e.preventDefault();
    let isnameV = isNameValid(),
    isAccNumberV = accountNumberValid(),
    isMonthV = isMonthValid(),
    isYV = isYearValid(),
    isCvcV = isCVCValid();
    hide(loadingMessage);
    let isFormValid = isnameV && isAccNumberV && isMonthV && isYV && isCvcV;
    
    console.log(isFormValid, "<--------");

    if (isFormValid) {
    try {
        hideformRightChildren();
        show(loadingMessage);
        await submitForm(isFormValid);
    } catch (error) {
    
        hideformRightChildren();
    } finally {
        hide(loadingMessage);
        thankyouMessage();
    }
}
});

function hide (el) {el.style.display = "none";}
function show (el) {el.style.display = "";}
function thankyouMessage () {
    formRight.innerHTML = `<div class='mainTwo flex column center'><div><img src=${tick} alt='tick icon'></div><h2> Thank you!</h2><p>We have added your card details.</p><button class='btn'>Continue</button></div>`;
}

function hideformRightChildren() {
    let formRightChildren = Array.from(formRight.children);
    formRightChildren.splice(0, 1);
    for (let i=0; i< formRightChildren.length; i+=1) {
        formRightChildren[i].style.display = 'none';
    }
}

function submitForm(valid) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            if (valid) {
                resolve();
            } else {
                reject();
            }
        }, 1500);
    });
}



