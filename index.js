const buttonCode = document.querySelector('.code-button');

buttonCode.addEventListener('click', (event) => {
    const code = document.querySelector('.my-code');
    code.classList.toggle('active');
})