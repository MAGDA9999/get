
// Start function
function demo(){
    var user = document.getElementById('user').value;
    var mail = document.getElementById('mail').value;
    var pass = document.getElementById('pass').value;
    var confirm = document.getElementById('confirm').value;
    var message =document.getElementById('message');
    message.setAttribute('class','text')

    if(user==""&& mail==""&& pass==""&& confirm==""){
        message.innerHTML ='Enter Data In Form';
        return false;
    }else if(user.length<5 || user.length>15){
        message.innerHTML = 'Enter 5-15 char in username';
        return false;
    }else if(mail.indexOf('.')==-1 || mail.indexOf('@','1')==-1){
        message.innerHTML = 'Enter Valid Email';
        return false;
    }else if(pass.length<8){
        message.innerHTML = 'Enter atleast 8 char in password';
        return false;
    }else if(confirm!=pass){
        message.innerHTML = 'Matched Password';
        return false;
    }else{
        return true;
    }

}
// End function