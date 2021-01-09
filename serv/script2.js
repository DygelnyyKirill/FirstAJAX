const url = 'https://raw.githubusercontent.com/smelukov/cities.json'
const myButton = document.querySelector('#myButton');
const list = document.querySelector('#list');


myButton.addEventListener('click', async () => {
    const response = await fetch(url);
    const cities = await response.json();
    const fragment = document.createDocumentFragment();

    list.addEventListener('click', e => {
        if (e.target.tagName === 'LI') {
            console.log(e.target.textContent);
        }
    });

    for (const city of cities) {
        const li = document.createElement('li');
        li.textContent = city.name;
        fragment.appendChild(li);
    }

    list.appendChild(fragment);

})

// alert("helloworld") 