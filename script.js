let userInput=document.querySelector(".searchInput");

let searchButton=document.querySelector(".searchButton");

searchButton.addEventListener("click",getData);

let movieName=document.querySelector(".movieName");

let movieLogo=document.querySelector(".movieLogo");

let movieRating=document.querySelector(".movieRating");

let genre=document.querySelector(".genre");

let plot=document.querySelector(".description");

let cast=document.querySelector(".cast");

let characterstics=document.querySelector(".characterstics");

let released=document.querySelector(".released");

let runTime=document.querySelector(".runtime");



async function getData(){
    const url = `http://www.omdbapi.com/?t=${userInput.value}&apikey=${apikey}`;
try {
	const response = await fetch(url);
	const result = await response.json();

	movieName.innerHTML=(result?.Title).toUpperCase();

	movieRating.innerHTML=result?.imdbRating;
	
	genre.innerHTML=result?.Genre;

	plot.innerHTML=result?.Plot;

	cast.innerHTML=result?.Actors;

	movieLogo.src=result?.Poster;

	released.innerHTML=result?.Released;

	runTime.innerHTML=result?.Runtime;




	console.log(result);
} catch (error) {
	console.error(error);
}
};
 const apikey="2ae2bfeb";






