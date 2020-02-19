// const data = {title: "java"};



const input = document.querySelector('.query-search');
const button = document.querySelector('.btn');
const researchInput = document.querySelector('.research-input');
const researchAll = document.querySelector('.research-all');



// const researchInput = document.createElement('div');
// researchInput.classList.add('research-input')
// const researchAll = document.createElement('div');
// researchInput.classList.add('research-all')


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
    console.log(1111111111111, arr);
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


button.addEventListener('click', (e)=> {
    const value = input.value;
    console.log(value);
    
    fetch('/search', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title: value})
    }
    )
    .then(res => res.json())
    // .then(res=> console.log())
    .then(res=> renderDataInput(res.data))
    .catch(console.log)
})



 fetch(`/all` )
 .then(res=>res.json())
 .then(res=> renderDataAll(res.data))
 .catch(err=> console.log(err));


 const item = document.createElement('div');
 item.classList.add('item')



//  fetch(`/all` )
//  .then(res=>res.json())
//  .then(res=>{
//     for(i=0; i<data.length; i++){
//     const item = document.createElement('div');
//     item.classList.add('item')
//     item.textContent =  res.data[i]._source.authors[0] ;
//     research.appendChild(item);

//     const description = document.createElement('div');
//     item.classList.add('item')
//     item.textContent =  res.data[i]._source.authors[0] ;
//     console.log(item);
//     research.appendChild(item);
// }

// })
//  .catch(err=> console.log(err));