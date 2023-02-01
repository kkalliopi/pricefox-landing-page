

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






// adding client-side validation  to the hero-section-compare-insurance-companies-container form
const form = document.querySelector("form");
const plate = document.querySelector("#license-plate");
const plateError = document.querySelector(".error");
const greekAlphabet = /^[α-ωΑ-Ω]+$/;
const invalidGreekCharacters = /[γδθλξπσφψωΓΔΘΛΞΠΣΦΨΩ]/;
const numbers = /^[0-9]$/;
//1. check if the value in the input field is valid.If it is and there is a visible eror message,hide it.
//2. check if the value is missing and show the error message.
//3. check if the first three letters are greek characters and show the error message.
//4. check for specified greek characters that are not allowed and show the error message.
//5. check if the first 3 letters are numbers and show the error message.
//6. check if the checked vehicle is moto 
plate.addEventListener("input", (e) => {
            
    if (plate.validity.valid) {
        plateError.textContent = ""; 
        plateError.className = "error";
    }else if(plate.validity.valueMissing) {
        plateError.textContent = "Η πινακίδα θα πρέπει να περιέχει 3 γράμματα ακολουθούμενα από 4 αριθμούς,χωρίς κενό ενδιάμεσα,π.χ. IPO3245";
        plateError.className = "error active";
    }else if (!greekAlphabet.test(e.target.value.slice(0, 3))) {
        plateError.textContent = "Επιτρέπονται μόνο 3 ελληνικοί χαρακτήρες και 4 αριθμοί πχ.ΙΡΟ3245";
        plateError.className = "error active";
        e.target.value = e.target.value.slice(0, -1);
    }else if (invalidGreekCharacters.test(e.target.value.slice(0, 3))) {
        plateError.textContent = "Οι ελληνικοί χαρακτήρες Γ, Δ, Θ, Λ, Ξ, Π, Σ, Φ, Ψ, Ω δεν επιτρέπονται σε συμβατικές πινακίδες.";
        plateError.className = "error active";
        e.target.value = e.target.value.slice(0, -1);
    }else if (numbers.test(e.target.value.slice(0, 3))) {
        plateError.textContent = "Οι πρώτοι 3 χαρακτήρες δεν πρέπει να είναι αριθμοί.";
        plateError.className = "error active";
        e.target.value = e.target.value.slice(0, -1);
    }else if (document.querySelector("input[value=moto]:checked")) {
        if(plate.validity.valueMissing){
        plateError.textContent = "Η πινακίδα θα πρέπει να περιέχει 2 γράμματα ακολουθούμενα από 4 αριθμούς, χωρίς κενό ενδιάμεσα, π.χ. IPO3245";
        plateError.className = "error active";
        }  
    }
       
    e.target.value = e.target.value.toUpperCase();
});
 

//check if the value is invalid to submit.If it is show the error message and prevent it from submit by canceling the event.          
form.addEventListener("submit", (event) => {
            
    if (!plate.validity.valid) {
        plateError.textContent = "Η πινακίδα θα πρέπει να περιέχει 3 γράμματα ακολουθούμενα από 4 αριθμούς,χωρίς κενό ενδιάμεσα,π.χ. IPO3245";
        plateError.className = "error active";
        event.preventDefault();
    }
});


   



  //carousel
const carouselContainer = document.querySelector('.carousel-container');
const carouselCards = document.querySelectorAll('.carousel-card-content');
const prev = document.querySelector('#carousel-arrow-prev');
const next = document.querySelector('#carousel-arrow-next');


carouselCards.forEach((card, index) => {
  if (index < 5) {
    card.style.display = 'flex';
  } else {
    card.style.display = 'none';
  }
});

next.addEventListener('click', function() {
  const carouselCards = document.querySelectorAll('.carousel-card-content');
  const firstCard = carouselCards[0];
 
  for (let i = 5; i < carouselCards.length; i++) {
       
    carouselCards[i].style.display = 'none';
  }

  for (let i = 0; i < 5; i++) {
        
    carouselCards[i].style.display = 'flex';
  }

  carouselContainer .removeChild(firstCard);
  carouselContainer .appendChild(firstCard);
  
});

prev.addEventListener('click', function() {
    const carouselCards = document.querySelectorAll('.carousel-card-content');
    const lastCard = carouselCards[carouselCards.length - 1];

    for (let i = 5; i < carouselCards.length; i++) {
       
        carouselCards[i].style.display = 'none';
      }
      
      for (let i = 0; i < 5; i++) {
            
        carouselCards[i].style.display = 'flex';
      }
  
    carouselContainer .removeChild(lastCard);
    carouselContainer .insertBefore(lastCard, carouselCards[0]);

}); 







if (window.matchMedia('(max-width: 480px)').matches) {
  const carouselContainer = document.querySelector('.carousel-container');
  const prev = document.querySelector('#carousel-arrow-prev');
  const next = document.querySelector('#carousel-arrow-next');

  carouselCards.forEach((card, index) => {
    if (index < 2) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });

  next.addEventListener('click', function() {
    const carouselCards = document.querySelectorAll('.carousel-card-content');
    const firstCard = carouselCards[0];

    for (let i = 0; i < 2; i++) {
          
      carouselCards[i].style.display = 'flex';
    }
 
    for (let i = 2; i < carouselCards.length; i++) {
         
      carouselCards[i].style.display = 'none';
    }


    carouselContainer .removeChild(firstCard);
    carouselContainer .appendChild(firstCard);

  });

  prev.addEventListener('click', function() {
      const carouselCards = document.querySelectorAll('.carousel-card-content');
      const lastCard = carouselCards[carouselCards.length - 1];
      
                
      for (let i = 0; i < 2; i++) {
              
          carouselCards[i].style.display = 'flex';
        }
        
      for (let i = 2; i < carouselCards.length; i++) {
         
          carouselCards[i].style.display = 'none';
        }
  
      carouselContainer .removeChild(lastCard);
      carouselContainer .insertBefore(lastCard, carouselCards[0]);

  }); 
}





