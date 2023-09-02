let psrd = document.getElementById('psrd');
let tooglebtn = document.getElementById('tooglebtn');


let lowerCase = document.getElementById('lower');
let upperCase = document.getElementById('upper');
let digit = document.getElementById('number');
let specialCase = document.getElementById('special');
let minlength = document.getElementById('length');


function checkPsrd(data){

    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#\$%\^&\*])');
    const length = new RegExp('(?=.{8,})');

    if(lower.test(data)){
        lowerCase.classList.add('valid');
    }else{
        lowerCase.classList.remove('valid');
    }

    if(upper.test(data)){
        upperCase.classList.add('valid');
    }else{
        upperCase.classList.remove('valid');
    }

    if(number.test(data)){
        digit.classList.add('valid');
    }else{
        digit.classList.remove('valid');
    }

    if(special.test(data)){
        specialCase.classList.add('valid');
    }else{
        specialCase.classList.remove('valid');
    }

    if(length.test(data)){
        minlength.classList.add('valid');
    }else{
        minlength.classList.remove('valid');
    }

    
}

//show hide password
tooglebtn.onclick = function(){
    if(psrd.type === 'password'){
        psrd.setAttribute('type','text');
        tooglebtn.classList.add('hide');
    }else{
        psrd.setAttribute('type','password');
        tooglebtn.classList.remove('hide');
    }
}