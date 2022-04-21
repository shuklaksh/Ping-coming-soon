const form = document.querySelector('form');
const emailBox = document.getElementById('email');
const msg = "Please provide a valid email address";

const errorMsg = document.createElement('p');
errorMsg.classList.add('error_text');


function checkEmail(e){
    e.preventDefault();
    const email = e.target.querySelector('[type= "text"]').value;
    if(!validateEmail(email)) {
        if(email == "") {
            const MSG = "Whoops! It looks like you forgot to add your email";
            errorMsg.textContent = MSG;
            form.appendChild(errorMsg);
        }
        else{
            errorMsg.textContent = msg;
            console.log("hello");
            form.classList.add('error');
            form.appendChild(errorMsg);
        }
        
    }
    else{
        form.classList.remove('error');
    }
    
}
    

function validateEmail (email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
form.addEventListener('submit',checkEmail);