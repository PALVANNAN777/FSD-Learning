const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit" , (e)=>{
    let message = [];

    if(name.value === '' || name.value === 'null'){
        message.push("Name is Required")
    }
    
    if(password.value.length<6){
        message.push("The password must contain at least 6 Characters")
    }

    if(password.value.length>20){
        message.push("The Password must be less that 20 Characters")
    }

    if(password.value === 'password'){
        message.push("The password cannot be password")
    }
    
    
    if(message.length>0){
        e.preventDefault()
        errorElement.innerText = message.join(', ')
    }
    
})