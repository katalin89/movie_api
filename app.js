
async function getAllFilms(){
    let dataApi= await fetch("https://api.themoviedb.org/3/movie/popular?api_key=29c67b39adde33f44618a80626c264ec&language=en-US&page=1");   
    dataApi=await dataApi.json();
    console.log(dataApi);
    attachCards(dataApi.results);
    console.log(dataApi);

}


getAllFilms();