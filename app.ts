const a = document.getElementById("name") as HTMLInputElement
const b = document.getElementById("searchbtn") as HTMLButtonElement
const c = document.getElementById("result") as HTMLElement

interface Movie{
    Title : string;
    Year : string;
    Plot: string;
    Poster : string;
    Response:string;

}
b.addEventListener("click",() => {
const mn : string = a.value;
const url = `https://www.omdbapi.com/?t=${mn}&apikey=2b02b9dd`;
fetch(url)
.then((response) => response.json())
    .then((data:Movie)=>{
        if(data.Response === "False") {
            c.innerHTML = "Movie not found";
            return;
        }
    c.innerHTML = `<h2>${data.Title} ${data.Year}</h2>
    <img src = "${data.Poster}" width = "200" >
    <p>${data.Plot}</p>`
    });
});
