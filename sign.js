let cred = JSON.parse(localStorage.getItem('cred')) || {};
/* use as reference
let obj = {
    'shalini' : ['hi','hello']
}
let name= 'shalini';
console.log(obj[`${name}`][1]);
*/
console.log(cred);
function check(){
    let name= document.querySelector('.js-name').value;
    let pass= document.querySelector('.js-pass').value;
    let email = document.querySelector('.js-email').value;
    //console.log(typeof name,name)
    if(cred.hasOwnProperty(name)){
        if(pass === cred[`${name}`][0] && cred[`${name}`][1] === email){
            window.location.href='index2.html';
            alert('Welcome back!');
        }else{
            alert('Wrong name or password! Try again');
        }
    }
    else{
        alert('You are not signed up! Please sign up first');
    }
    
}
function signup(){
    let name= document.querySelector('.js-name').value;
    let pass= document.querySelector('.js-pass').value;
    let email = document.querySelector('.js-email').value;
    cred[`${name}`] = [pass, email];
    localStorage.setItem('cred', JSON.stringify(cred));
    location.href="signin.html";
    alert('You are signed up!');

}
