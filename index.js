import Validate from './app/Validation.js';
import Regex from './app/Regex.js';


// get elements

const sign_up_form = document.querySelector('#sign_up');
const msg = document.querySelector('.msg');


//form submit

sign_up_form.addEventListener('submit', function(e){
    e.preventDefault();

    let name = this.querySelector('input[name="name"]').value;
    let email = this.querySelector('input[name="email"]').value;
    let cell = this.querySelector('input[name="cell"]').value;
    let username = this.querySelector('input[name="username"]').value;
    let pass = this.querySelector('input[name="pass"]').value;
    let cpass = this.querySelector('input[name="cpass"]').value;
    
 

    if(Validate.emphty(name) || Validate.emphty(email) || Validate.emphty(cell) || Validate.emphty(username) || Validate.emphty(pass)){

        msg.innerHTML= Validate.setmsg('All fields are required');

    }else if(Regex.emailCheck(email) == false){

        msg.innerHTML= Validate.setmsg('Invalid email address');

    }else if(Regex.cellCheck(cell) == false){

        msg.innerHTML= Validate.setmsg('Invalid phone number');

    }else if(Validate.passConfirm(pass,cpass) == false){

        msg.innerHTML = Validate.setMsg('Password does not match');
        
    }else{

        msg.innerHTML= Validate.setmsg('Success', 'success');
    }



});