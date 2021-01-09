const myButton = document.querySelector('#myButton');
const result = document.querySelector('#result');

myButton.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'content.txt');
    xhr.send();
});
alert('hello')