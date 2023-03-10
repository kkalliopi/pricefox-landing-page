
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
 //2. check if the first three letters are not greek characters and show the error message.
 //3. check for specified greek characters that are not allowed and show the error message.
 
 function resetError(plateError) {
   plateError.textContent = null;
   plateError.className = "error";
 }
 
 function setError(plateError, message) {
   plateError.textContent = message;
   plateError.className = "error active";
 }
 
 const validGreekPlate = /^[α-ωΑ-Ω]{3}\d{4}$/;
 
 plate.addEventListener("input", (e) => { 
   if (document.querySelector('input[value="car"]:checked, input[value="farm-truck"]:checked, input[value="truck"]:checked')){  
     if (validGreekPlate.test(e.target.value)) {
       resetError(plateError);
       return;
     }else if (!greekAlphabet.test(e.target.value.slice(0, 3))) {
         setError(plateError, "Επιτρέπονται μόνο 3 ελληνικοί χαρακτήρες και 4 αριθμοί πχ.ΙΡΟ3245");
         e.target.value = e.target.value.slice(0, -1);
     }else if (invalidGreekCharacters.test(e.target.value.slice(0, 3))) {
         setError(plateError, "Οι ελληνικοί χαρακτήρες Γ, Δ, Θ, Λ, Ξ, Π, Σ, Φ, Ψ, Ω δεν επιτρέπονται σε συμβατικές πινακίδες.");
         e.target.value = e.target.value.slice(0, -1);
     }
   
 }else if (document.querySelector('input[value="moto"]:checked')){
  if (validGreekPlate.test(e.target.value)) {
      resetError(plateError);
      return;
   }else if (!greekAlphabet.test(e.target.value.slice(0, 3))) {
       setError(plateError, "Η πινακίδα θα πρέπει να περιέχει τουλάχιστον 2 ελληνικά γράμματα ακολουθούμενα από τουλάχιστον 2 αριθμούς.,π.χ. ΧΖΝ614");
       e.target.value = e.target.value.slice(0, -1);
   }else if (invalidGreekCharacters.test(e.target.value.slice(0, 3))) {
       setError(plateError, "Οι ελληνικοί χαρακτήρες Γ, Δ, Θ, Λ, Ξ, Π, Σ, Φ, Ψ, Ω δεν επιτρέπονται σε συμβατικές πινακίδες.");
       e.target.value = e.target.value.slice(0, -1);
   }
 }
 e.target.value = e.target.value.toUpperCase();
 });
 


 

 //check if the value is invalid to submit.If it is show the error message and prevent it from submit by canceling the event.          
 form.addEventListener("submit", (event) => {  
     
     if(document.querySelector('input[value="car"]:checked, input[value="farm-truck"]:checked, input[value="truck"]:checked')){
       if (!plate.validity.valid) {
           plateError.textContent = "Η πινακίδα θα πρέπει να περιέχει 3 γράμματα ακολουθούμενα από 4 αριθμούς,χωρίς κενό ενδιάμεσα,π.χ. IPO3245";
           plateError.className = "error active";
           event.preventDefault();
       }
     }  
     else if (document.querySelector('input[value="moto"]:checked')){
       if (!plate.validity.valid) {
         plateError.textContent = "Η πινακίδα δε θα πρέπει να περιέχει πάνω από 3 ελληνικά γράμματα";
         plateError.className = "error active";
         event.preventDefault();
       }
     }
 });
 
 
 
 
    
 
 
 
 
   //carousel
 const carouselContainer = document.querySelector('.carousel-container');
 const prev = document.querySelector('#carousel-arrow-prev');
 const next = document.querySelector('#carousel-arrow-next');
 
 
 
 
 // add event click to the next button of carousel
 next.addEventListener('click', function() {
   let carouselCards = document.querySelectorAll('.carousel-card-content');
   const firstCard = carouselCards[0];
 
   carouselContainer.removeChild(firstCard);
   carouselContainer.appendChild(firstCard);
 
   carouselCards = document.querySelectorAll('.carousel-card-content');

   carouselCards.forEach((card, index) => {
     const showCard = index < 5;
 
    /* toggle will add the class "hidden" to the card if condition !showCard is true(i.e index > 5),
     and will remove the class "hidden" if condition !showCard  is false. */
     card.classList.toggle('hidden', !showCard);
   });
 });
 
 // add event click to the prev button of carousel
 prev.addEventListener('click', function() {
   const carouselCards = document.querySelectorAll('.carousel-card-content');
   const lastCard = carouselCards[carouselCards.length - 1];
 
   carouselCards.forEach((card, index) => {
     const showCard = index < 5;
 
     /* toggle will add the class "hidden" to the card if condition !showCard is true(i.e index > 5),
     and will remove the class "hidden" if condition !showCard  is false. */
     card.classList.toggle('hidden', !showCard);
 
   });
 
   carouselContainer .removeChild(lastCard);
   carouselContainer .insertBefore(lastCard, carouselCards[0]);
 });
 
 
 
 
 
 
 if (window.matchMedia('(max-width: 480px)').matches) {
 
   const prev = document.querySelector('#carousel-arrow-prev');
   const next = document.querySelector('#carousel-arrow-next');
   const carouselCards = document.querySelectorAll('.carousel-card-content');
 
   carouselCards.forEach((card, index) => {
   const showFlex = index < 2;

   /* toggle will add the class "hidden" to the card if condition !showCard is true(i.e index > 5),
     and will remove the class "hidden" if condition !showCard  is false. */
   card.classList.toggle('hidden', !showFlex);
 
   });
 
   next.addEventListener('click', function() {
     let carouselCards = document.querySelectorAll('.carousel-card-content');
     const firstCard = carouselCards[0];


     carouselContainer.removeChild(firstCard);
     carouselContainer .appendChild(firstCard);

     carouselCards = document.querySelectorAll('.carousel-card-content');
 
     carouselCards.forEach((card, index) => {
       const showFlex = index < 2;
    
       /* toggle will add the class "hidden" to the card if condition !showCard is true(i.e index > 5),
        and will remove the class "hidden" if condition !showCard  is false. */
       card.classList.toggle('hidden', !showFlex);
   
     });
     

   
   });
 
   prev.addEventListener('click', function() {
     const carouselCards = document.querySelectorAll('.carousel-card-content');
     const lastCard = carouselCards[carouselCards.length - 1];
   
     carouselCards.forEach((card, index) => {
       const showFlex = index < 2;
   
      /* toggle will add the class "hidden" to the card if condition !showCard is true(i.e index > 5),
      and will remove the class "hidden" if condition !showCard  is false. */
       card.classList.toggle('hidden', !showFlex);
   
     });
   
     carouselContainer .removeChild(lastCard);
     carouselContainer .insertBefore(lastCard, carouselCards[0]);
   });
 }
 