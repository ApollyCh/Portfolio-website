const container = document.getElementById("comic-container");

// Get the comic identifier
const urlSearchParams = new URLSearchParams(window.location.search);
const email = 'a.chernikova@innopolis.university';

fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`)
  .then(response => response.json())
  .then(data => {

    const id = data;
    return fetch(`https://fwd.innopolis.university/api/comic?id=${id}`);
  })
  .then(response => response.json())
  .then(comic => {
    // Render the comic
    const img = document.createElement("img");
    img.src = comic.img;
    img.alt = comic.alt;
    
    const title = document.createElement("h2");
    title.innerText = comic.title;
    
    const date = document.createElement("p");
    date.innerText = new Date(comic.year, comic.month - 1, comic.day).toLocaleDateString();
    
    container.append(title, date, img);
  })
  .catch(error => {
    console.error(error);
    container.innerHTML = "Failed to load XKCD comic";
  });