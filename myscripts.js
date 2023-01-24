
function init(){
   const buttons =  document.querySelectorAll(".hero-section-vehicle");
   for (var i = 0; i < buttons.length; i += 1) {
       buttons[i].addEventListener("click", function(e){
           chooseVehicle(e);           
       });
   }
} 




function chooseVehicle( e ){
   const buttons =  document.querySelectorAll(".hero-section-vehicle");
   for( var i =0; i < buttons.length; ++i ){
       buttons[i].style.color = '#737373';
   }
   e.target.style.color = '#012e4b';
}

window.onload = init();


window.onload=function(){

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
      signError.className = "error active";
  }

}