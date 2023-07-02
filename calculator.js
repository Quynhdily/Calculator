let calculation = localStorage.getItem('calculation') || '';

function updateCalculation(value){
  console.log(document.querySelector('.js-number'));
  calculation += value;
  document.querySelector('.js-number').innerHTML = calculation;
  //console.log(calculation);
  localStorage.setItem('calculation', calculation);
}

localStorage.setItem('calculation', calculation);