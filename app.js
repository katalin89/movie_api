let data;

async function getAllFilms(){
    let dataApi= await fetch("https://api.themoviedb.org/3/movie/popular?api_key=29c67b39adde33f44618a80626c264ec&language=en-US&page=1");   
    dataApi=await dataApi.json();
    console.log(dataApi);
    attachCards(dataApi.results,".films");
    data = dataApi.results;
}

getAllFilms();


let filmContainer=document.querySelector(".films");


let btnSearch=document.querySelector('.search');
let inp3=document.querySelector('.titleInput');


btnSearch.addEventListener("click",()=>{
  let details = document.querySelector('.title');
  details.innerHTML='';

  let text=document.createElement("h3");
  text.textContent= "Please enter title:"

  let input = document.createElement("input");
  input.classList.add('searchInput');

  let button = document.createElement("button");
  button.textContent= "Search";
   
  button.addEventListener("click",()=>{
    searchMoviesAndShowResult();
  });

  details.appendChild(text);
  details.appendChild(input);
  details.appendChild(button);
})