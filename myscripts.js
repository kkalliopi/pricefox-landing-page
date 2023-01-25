"use strict";

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
function chooseVehicle( e ){
   const vehicles =  document.querySelectorAll(".hero-section-vehicle");
   for( var i =0; i < vehicles.length; ++i ){
      vehicles[i].style.color = '#737373';
      vehicles[i].style = '';

   }
   e.target.style.color = '#012e4b';
   e.target.style.border = '1px solid rgba(187,192,209,.4)';
   e.target.style.padding = '10px 8px 10px 40px';
   e.target.style.background = 'url("https://s3.eu-central-1.amazonaws.com/assets.pricefox.gr/greece/pricefox.gr/production/gr/images/ci/new-landing/orange-car.png") no-repeat center';
   e.target.style.backgroundSize = '26px 14px';
   e.target.style.backgroundPosition = '8%';
   e.target.style.borderRadius = '5px';
}



window.onload =  init();






  // adding addEventListener() to the button of hero-section-cta-sign-and-compare form
  const form = document.querySelector("form");
  const sign = document.getElementById("license-plate");
  const signError = document.querySelector("div.error");
   
  //check if the value in the input field is valid.If it is and there is a visible message,hide it.Otherwise show the error message.
  sign.addEventListener("input", (event) => {
              
      if (sign.validity.valid) {
          signError.textContent = ""; 
          signError.className = "error";
      } else {
          showError();
      }
  });


  //check if the value is valid,let the form submit.Otherwise show the error message and prevent from submit by canceling the event.          
  form.addEventListener("submit", (event) => {
                
      if (!sign.validity.valid) {
          showError();
          event.preventDefault();
      }
  });
  
  //show the error message if the value is missing or if it's too short
  function showError() {
      if (sign.validity.valueMissing) {
          signError.textContent = "Η πινακίδα θα πρέπει να περιέχει 3 γράμματα ακολουθούμενα από 4 αριθμούς,χωρίς κενό ενδιάμεσα,π.χ. IPO3245";
      } else if (sign.validity.tooShort) {
           signError.textContent = `Η πινακίδα θα πρέπει να περιέχει 3 γράμματα ακολουθούμενα από 4 αριθμούς,χωρίς κενό ενδιάμεσα,π.χ. IPO3245 `;
      } 
      signError.textContent = `Η πινακίδα θα πρέπει να περιέχει 3 γράμματα ακολουθούμενα από 4 αριθμούς,χωρίς κενό ενδιάμεσα,π.χ. IPO3245 `;
      signError.className = "error active";
  }










  const cardContainer = document.querySelector(".carousel-container");
  const card = document.querySelector(".carousel-card-content");
  const nextButton = document.getElementById("carousel-arrow-next");
  const prevButton = document.getElementById("carousel-arrow-prev");
  

  nextButton.addEventListener("click", () => {
    cardContainer.scrollLeft += 100;
  });

  prevButton.addEventListener("click", () => {
    cardContainer.scrollLeft -= 100;
  });