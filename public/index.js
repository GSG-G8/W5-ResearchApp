
const input = document.querySelector('.query-search');
const button = document.querySelector('.btn');
const researchInput = document.querySelector('.research-input');
const researchAll = document.querySelector('.research-all');

const renderDataAll = (arr)=> {
    arr.map(el=> {
        const div = document.createElement('div');
        div.classList.add('content');
        const title = document.createElement('h2');
        title.textContent = el._source.title;
        div.appendChild(title);

        const description = document.createElement('p');
        description.textContent = el._source.description.slice(0,100);
        div.appendChild(description);

        const author = document.createElement('p');
        author.textContent = el._source.authors;
        div.appendChild(author);

       researchAll.appendChild(div);


    })
}

const renderDataInput = (arr)=> {
    arr.map(el=> {
        const div = document.createElement('div');
        div.classList.add('content')
        const title = document.createElement('h2');
        title.textContent = el._source.title;
        div.appendChild(title);

        const description = document.createElement('p');
        description.textContent = el._source.description;
        div.appendChild(description);

        const author = document.createElement('p');
        author.textContent = el._source.authors;
        div.appendChild(author);

        researchInput.appendChild(div);
    })
}

<<<<<<< HEAD


button.addEventListener('click', (e)=> {
    const value = input.value;
||||||| merged common ancestors

button.addEventListener('click', (e)=> {
    const value = input.value;
=======
    if(!value === ''){
    button.addEventListener('click', (e)=> {
    const value = input.value.trim();
>>>>>>> f43fc91e48a123feb101ac6bc5bfd955d5c6a31f
    console.log(value);


    fetch('/search', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title: value})
    }
    )
    .then(res => res.json())
    .then(res=> renderDataInput(res.data))
    .catch(console.log)
})
    }
    
 fetch(`/all` )
 .then(res=>res.json())
 .then(res=> renderDataAll(res.data))
 .catch(err=> console.log(err));


<<<<<<< HEAD
 
||||||| merged common ancestors
 const item = document.createElement('div');
 item.classList.add('item')
 
=======
 const item = document.createElement('div');
 item.classList.add('item')
>>>>>>> f43fc91e48a123feb101ac6bc5bfd955d5c6a31f
