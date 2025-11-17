const a = document.getElementById("name");
const b = document.getElementById("searchbtn");
const c = document.getElementById("result");
b.addEventListener("click",function(){
    const mn = a.value; 
    console.log("User typed:",mn);
    const url = `https://www.omdbapi.com/?t=${mn}&apikey=2b02b9dd`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if(data.response === "False"){
            c.innerHTML = "movie not found";            
            return;
        }
        c.innerHTML = `<h2>${data.Title} ${data.Year}</h2>
        <img src = "${data.Poster}" width = "200"> 
        <p>${data.Plot}</p>`
      console.log(data);
    });
});
