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

const brandOpt = document.querySelector('#brandOption');

async function fetchAndRenderBrandList() {
  const response = await fetch('/brands.json');
  const brandList = await response.json();

  for (brand of brandList) {
    const opt = document.createElement('option');

    opt.id = brand.id;
    opt.textContent = brand.value;

    brandOpt.appendChild(opt);
  }
}

addEventListener('load', e => {
  fetchAndRenderBrandList();
});



const model = document.querySelector('#modelOption');
const fuel = document.querySelector('#fuelOption');
const cubic = document.querySelector('#vehicleCcOption');
const modelVersion = document.querySelector('#modelVersionOption');

model.disabled = true;
fuel.disabled = true;
cubic.disabled = true;
modelVersion.disabled = true;

function checkbrand() {
  if (brandOpt.value !== "Παρακαλώ διαλέξτε") {
    model.classList.remove('opacity');
    model.disabled = false;
  } else{
    model.classList.add('opacity');
    model.disabled = true;
  }
}

brandOpt.addEventListener('change', checkbrand);


function checkmodel() {
  if (model.value !== "Παρακαλώ διαλέξτε") {
    fuel.classList.remove('opacity');
    fuel.disabled = false;
  }else {
    fuel.classList.add('opacity');
    fuel.disabled = true;
  }
}

model.addEventListener('change', checkmodel);




function checkfuel() {

    
  if (fuel.value !== "Παρακαλώ διαλέξτε") {
    cubic.classList.remove('opacity');
    cubic.disabled = false;
  }else {
    cubic.classList.add('opacity');
    cubic.disabled = true;
  }
}

fuel.addEventListener('change', checkfuel);


function checkcubic() {

    
  if (cubic.value !== "Παρακαλώ διαλέξτε") {
    modelVersion.classList.remove('opacity');
    modelVersion.disabled = false;
  }else {
    modelVersion.classList.add('opacity');
    modelVersion.disabled = true;
  }
}

cubic.addEventListener('change', checkcubic);