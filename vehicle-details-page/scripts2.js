//index2.html form vehicle-details

const yesButton = document.querySelector('#yes-button');
const noButton = document.querySelector('#no-button');


yesButton.addEventListener("click", function() {
  yesButton.classList.toggle("active");
  noButton.classList.remove("active");
});

noButton.addEventListener("click", function() {
  noButton.classList.toggle("active");
  yesButton.classList.remove("active");
});
