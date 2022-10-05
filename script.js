const input = document.querySelector(".search");
const container = document.querySelector('.container');

document.querySelector('.fa-magnifying-glass').onclick =( ) => {
  apiRequest()
  container.innerHTML = "";
}
input.onkeydown = (key) => {
  if(key.code == 'Enter'){
    apiRequest()
  }
}

apiRequest = () => {
  const url =
    "https://api.unsplash.com/search/photos?query=" +
    input.value +
    "&per_page=15&client_id=gzW7SclKMoE2twTl7ftCBpV9kfUNTXpxP9UTGS1i1kI";
  fetch(url)
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })

    .then((data) => {
      loadImages(data);
    })

    .catch((error) => console.log(error));
};

const loadImages = (data) => {
for ( let i = 0; i < data.results.length; i++)
{
  let image = document.createElement("div");
    image.className = "img";
    image.style.backgroundImage =  "url("+data.results[i].urls.raw + "&w=1366&h=768"+")";
    container.appendChild(image);
}
}
