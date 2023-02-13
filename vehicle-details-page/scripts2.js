//index2.html form vehicle-details

const yesButton = document.querySelector('#yes-button');
const noButton = document.querySelector('#no-button');
const transferDate = document.querySelector('.vehicle-details-transfer-date');

//when yes buuton clicked, the tranfer-date input be displayed
yesButton.addEventListener("click", function() {
  
  yesButton.classList.add("active");
  noButton.classList.remove("active");
  transferDate.classList.remove("hidden");
});

noButton.addEventListener("click", function() {
  noButton.classList.add("active");
  yesButton.classList.remove("active");
  transferDate.classList.add("hidden");
});