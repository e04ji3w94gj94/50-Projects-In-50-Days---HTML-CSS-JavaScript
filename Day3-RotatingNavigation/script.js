const openbtn= document.querySelector('#open');
const closebtn = document.querySelector('#close');
const container = document.querySelector('.container');

openbtn.addEventListener('click',() => {
    container.classList.add('show-nav')
})
closebtn.addEventListener('click',() => {
    container.classList.remove('show-nav')
})