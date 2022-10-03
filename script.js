const input = document.querySelector(".search");

const url =
  "https://api.unsplash.com/search/photos?query=" +
  input.value +
  "&per_page=2&client_id=34JNzm_MQs2Fqtbk8rnqv-w1uTg8A5lYDugu9rQgiEE";
fetch(url)
.then((response) => {
  console.log(response);
});
