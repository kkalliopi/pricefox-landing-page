

//choose all vehicles in hero-section-cta-vehicle-selection class to addEventListener click
function init(){
   const buttons =  document.querySelectorAll(".hero-section-vehicle");
   for (var i = 0; i < buttons.length; i += 1) {
       buttons[i].addEventListener("click", function(e){
           chooseVehicle(e);           
       });
   }
} 

//Style the selected vehicle as well as the rest of the vehicles
function chooseVehicle(e) {
   const vehicles =  document.querySelectorAll(".hero-section-vehicle");
   for (var i = 0; i < vehicles.length; ++i) {
      vehicles[i].classList.remove('selected-vehicle');
   }

   e.target.classList.toggle('selected-vehicle');
}



window.onload =  init();






// adding addEventListener() to the button of hero-section-cta-sign-and-compare form
const form = document.querySelector("form");
const plate = document.getElementById("license-plate");
const plateError = document.querySelector(".error");

//check if the value in the input field is valid.If it is and there is a visible message,hide it.Otherwise show the error message.
plate.addEventListener("input", (event) => {
            
    if (plate.validity.valid) {
        plateError.textContent = ""; 
        plateError.className = "error";
    } else {
        showError();
    }
});


//check if the value is valid,let the form submit.Otherwise show the error message and prevent from submit by canceling the event.          
form.addEventListener("submit", (event) => {
            
    if (!plate.validity.valid) {
        showError();
        event.preventDefault();
    }
});

//show the error message if the value is missing or if it's too short
function showError() {
    if (plate.validity.valueMissing) {
        plateError.textContent = "Η πινακίδα θα πρέπει να περιέχει 3 γράμματα ακολουθούμενα από 4 αριθμούς,χωρίς κενό ενδιάμεσα,π.χ. IPO3245";
    } else if (plate.validity.tooShort) {
        plateError.textContent = `Η πινακίδα θα πρέπει να περιέχει 3 γράμματα ακολουθούμενα από 4 αριθμούς,χωρίς κενό ενδιάμεσα,π.χ. IPO3245 `;
    } 
    plateError.textContent = `Η πινακίδα θα πρέπει να περιέχει 3 γράμματα ακολουθούμενα από 4 αριθμούς,χωρίς κενό ενδιάμεσα,π.χ. IPO3245 `;
    plateError.className = "error active";
}



























/*const cardContainer = document.querySelector(".carousel-container");
const nextButton = document.getElementById("carousel-arrow-next");
const prevButton = document.getElementById("carousel-arrow-prev");


nextButton.addEventListener("click", () => {
  cardContainer.scrollLeft += 300;
});

prevButton.addEventListener("click", () => {
  cardContainer.scrollLeft -= 300;
});


setInterval(() => {
  cardContainer.scrollLeft += 300;
}, 2 * 1000);*/



const carousel = document.querySelector('.carousel-container');
const carouselWrapper = document.querySelector('.carousel-wrapper');
const prev = document.querySelector('#carousel-arrow-prev');
const next = document.querySelector('#carousel-arrow-next');
var direction ;


next.addEventListener('click', function() {
  const carouselChildren = document.querySelectorAll('.carousel-card-content');
  const firstElement = carouselChildren[0];

  console.log('before:: first:', firstElement, 'first.parent:', firstElement.parentNode);
  carousel.removeChild(firstElement);
  console.log('remove:: first:', firstElement, 'first.parent:', firstElement.parentNode);
  carousel.appendChild(firstElement);
  console.log('append:: first:', firstElement, 'first.parent:', firstElement.parentNode);
});

