document.addEventListener('DOMContentLoaded', function(event){

var displaySignin = document.querySelector('button.signin');
var modalWindow = document.querySelector('div.modal');
var close = document.querySelector('button.close');
var modal = document.querySelector('.getstarted');
var submit = document.querySelector('.submit');
var user = document.querySelector('#user');
var pass = document.querySelector('#pass');

displaySignin.addEventListener('click', function(){
  modalWindow.style.display = 'block';
});

close.addEventListener('click', function(){
  modal.style.display = 'none';
});

submit.addEventListener('click', function(){
  user.className = "error";
  pass.className = "error";
});

user.addEventListener('mouseover', function(){
  user.classList.remove("error");
});

pass.addEventListener('mouseover', function(){
  pass.classList.remove("error");
});
});
