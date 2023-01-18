

function license() {
    document.getElementById("explainlicense").innerHTML = "Η πινακίδα θα πρέπει να περιέχει 3 γράμματα ακολουθούμενα από 4 αριθμούς,χωρίς κενό ενδιάμεσα,π.χ. IPO3245";
    explainlicense.style.display = "block";
};


 


function init(){
   const buttons =  document.querySelectorAll(".hero-section-vehicle");
   for (var i = 0; i < buttons.length; i += 1) {
       buttons[i].addEventListener("click", function(e){
           changeColor(e);           
       });
   }
}


function changeColor( e ){
   const buttons =  document.querySelectorAll(".hero-section-vehicle");
   for( var i =0; i < buttons.length; ++i ){
       buttons[i].style.color = '#737373';
   }
   e.target.style.color = '#012e4b';
}

window.onload = init();







