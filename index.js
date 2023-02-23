const buttonCode = document.querySelector('.code-button');

buttonCode.addEventListener('click', (event) => {
    const code = document.querySelector('.my-code');
    code.classList.toggle('active');
})
/*Hamburger menu*/

 const burgerBtn = document.querySelector('.burger-button');
 const menu = document.querySelector('.navbar');

burgerBtn.addEventListener('click', function(){
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
});  

menu.addEventListener('click', function(){
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
});