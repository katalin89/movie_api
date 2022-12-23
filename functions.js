//https://api.themoviedb.org/3/search/movie?api_key=29c67b39adde33f44618a80626c264ec&query=Jack+Reacher


function createCard(obj){
    let div=document.createElement("div");
    div.classList.add('card');

    let imagine=document.createElement("img");
    imagine.classList.add('imagine');
    imagine.src="https://image.tmdb.org/t/p/w500/" + obj.backdrop_path;


    div.appendChild(imagine);

    return div;
}



function attachCards(arr){
    let container=document.querySelector(".films");

    container.innerHTML="";
    for(let i=0;i<arr.length;i++){
        container.appendChild(createCard(arr[i]))
    }
}

// fetch("https://api.themoviedb.org/3/search/movie?api_key=29c67b39adde33f44618a80626c264ec&query=Jack+Reacher")
// .then(dataApi=>{
//     return dataApi.json();

// }).then(dataApi=>{
//     console.log(dataApi);
    
//})

async function getAllFilms(){
    let dataApi=await fetch("https://api.themoviedb.org/3/search/movie?api_key=29c67b39adde33f44618a80626c264ec&query=Jack+Reacher");
    dataApi=await dataApi.json();
    console.log(dataApi);
    attachCards(dataApi.results);
}


/*

async function getAllEmployee(){
    let dataApi= await fetch("https://randomuser.me/api/?results=9");
    dataApi=await dataApi.json();
    console.log(dataApi);
    attachCards(dataApi.results);
}

function createCard(obj){
    let div=document.createElement("div");
    div.classList.add('card');

    let imagine=document.createElement("img");
    imagine.classList.add('image');
    imagine.src=obj.picture.medium;
    div.appendChild(imagine);

    let name=document.createElement('h1');
    name.classList.add('name');
    name.textContent=(obj.name.first+" "+obj.name.last);
    div.appendChild(name);

    let email=document.createElement('p');
    email.classList.add('email');
    email.textContent=obj.email;
    div.appendChild(email);

    let registered=document.createElement("footer");
    registered.classList.add('registered');
    registered.textContent=obj.registered.date;
    div.appendChild(registered);
    

return div;

}


function attachCards(arr){
    let container=document.querySelector(".container");

    container.innerHTML="";
    for(let i=0;i<arr.length;i++){
        container.appendChild(createCard(arr[i]))
    }
}

function createButton(number){
    let div=document.createElement("button");
    div.classList.add("buttons");

    let btn=document.createElement("button");
    btn.classList.add("button");
    btn.textContent=number;
    div.appendChild(btn);
    return div;
}


function createButtons(nr){
    let btn=document.querySelector(".buttons");
    for(let i=1;i<=nr;i++){
           btn.appendChild( createButton(i));
    }
}

// function createModal(obj){
//     let div=document.createElement('div');
//     div.classList.add('container-modal');

//     let imagine=document.createElement("img");
//     imagine.classList.add('image');
//     imagine.src=obj.picture.medium;
//     div.appendChild(imagine);

//     let name=document.createElement('h1');
//     name.classList.add('name');
//     name.textContent=obj.title+" "+obj.first+" "+obj.last;
//     div.appendChild(name);

//     let email=document.createElement('p');
//     email.classList.add('email');
//     email.textContent=obj.email;
//     div.appendChild(email);

//     let phone=document.createElement('p');
//     phone.classList.add('phone');
//     phone.textContent=obj.phone;
//     div.appendChild(phone);

//     let registered=document.createElement("footer");
//     registered.classList.add('registered');
//     registered.textContent=obj.registered.date+" "+obj.registered.age;
//     div.appendChild(registered);

//     let dob=document.querySelector("p");
//     dob.classList.add('dateofb')
//     dob.textContent=obj.dob.date+" "+obj.dob.age;
//     div.appendChild(dob);

//     return div;
// }


///cum se da data ca si parametru 
function returnObj(data,nume){
        for(let i=0;i<data.length;i++){
            let numePers=data[i].name.first+" "+data[i].name.last;
            if(numePers==nume)
            return data[i];
        }
            return -1;
} 

function createCardModal(obj){
    let div=document.createElement('div');
    div.classList.add('modal-card');

    let div2=document.createElement('div');
    div2.classList.add('x');

    let btnX=document.createElement('button');
    btnX.classList.add('btnX');
    btnX.textContent="x";

    btnX.addEventListener("click",()=>{
        let modal=document.querySelector(".modal");
        modal.innerHTML="";
        modal.classList.add("hide");
    })

    div2.appendChild(btnX);
    div.append(div2);

    let imagine=document.createElement('img');
    imagine.src=obj.picture.medium;
    div.appendChild(imagine);

    let div3=document.createElement('div');
    div3.classList.add('directii');

    div3.innerHTML=`
    <button class="left"><i class="fa-solid fa-caret-left"></i></button>
    <button class="right"><i class="fa-solid fa-caret-right"></i></button>
    `
    let btnLeft=div3.querySelector(".left");

    btnLeft.addEventListener("click",()=>{ 
       let t=returnPrevious(obj.name.first);
        let card=createCardModal(t);
        let modal=document.querySelector(".modal");
        modal.innerHTML="";
        modal.appendChild(card);       
    })

    let btnRight=div3.querySelector('.right');

    btnRight.addEventListener("click",()=>{
        let t=returnNext(obj.name.first);
        let card=createCardModal(t);
        let modal=document.querySelector(".modal");
        modal.innerHTML="";
        modal.appendChild(card);
    })

    
    div.appendChild(div3);
    
    let name=document.createElement('h1');
    name.textContent=obj.name.first+" "+obj.name.last;
   
    div.appendChild(name);

    let dob=document.createElement('p');
    dob.textContent="Date of birth: " + obj.dob.date;
    div.appendChild(dob);

    let nationality=document.createElement('p');
    nationality.textContent="Nationality :" + obj.nat;
    div.appendChild(nationality);

    let phone=document.createElement('p');
    phone.textContent="Phone:" + obj.phone;
    div.appendChild(phone);

    let email=document.createElement('p');
    email.textContent=obj.email;
    div.appendChild(email);

    let data=document.createElement('p');
    data.textContent=obj.registered.date;
    div.appendChild(data);

    return div;
}
function returnPrevious(name){
    for(let i=0;i<data.length;i++){
        let numePers=data[i].first+" "+data[i].name.last;
        if(data[i].name.first==name){
            return data[i-1];
        }
    }
    return-1;
}

function returnNext(name){
    for(let i=0;i<data.length-1;i++){
        let numePers=data[i].name.first+" "+data[i].name.last;
        if(data[i].name.first==name){
            return data[i+1];
        }
    }

    return -1;
}


*/