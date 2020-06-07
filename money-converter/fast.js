//Hide exchange section
document.querySelector('.exchange-section').style.display = 'none';


//Arrow Icon Setting
document.querySelector('#exchange-1').addEventListener('click', function(){
  document.querySelector('.exchange-section').style.display = 'block';
  document.querySelector('.conversion').style.display = 'none';

});

document.querySelector('#exchange-2').addEventListener('click', function(){
  document.querySelector('.exchange-section').style.display = 'none';
  document.querySelector('.conversion').style.display = 'block';

});



//Listen Keydown
document.querySelector('#Rupees').addEventListener('keyup', conversionCalculate);


function conversionCalculate() {
  const rupees = document.getElementById('Rupees');
  const dollar = document.getElementById('Dollar');
  
  const answer = parseFloat(rupees.value) / 75.67;

  if(rupees.value === '') {
    dollar.value = 1;
  }

  if(isFinite(answer)) {
    dollar.value = answer.toFixed(3);

   
  }
  if(rupees.value < 0) {
    showError('Please Enter A Valid Value !');
  }


}

function showError(error) {
  //create element of div
  const errorDiv = document.createElement('div');

  //add class
  errorDiv.className = 'alert alert-danger';

  //get element
  const heading = document.querySelector('.heading');
  const card = document.querySelector('.card')

  //append
  errorDiv.appendChild(document.createTextNode(error));

  //insert before heading
  card.insertBefore(errorDiv, heading);

  setTimeout(clearError, 2000);
}

function clearError () {
  document.querySelector('.alert').remove();
}

// *****exchanged section*****
document.querySelector('#ExDollar').addEventListener('keyup', ExConversionCalculate);


function ExConversionCalculate() {
  const ExRupees = document.getElementById('ExRupees');
  const ExDollar = document.getElementById('ExDollar');
  
  const answer = parseFloat(ExDollar.value) * 75.67;

  if(ExDollar.value === '') {
    ExRupees.value = 75;
  }

  if(isFinite(answer)) {
    ExRupees.value = answer.toFixed(3);

   
  }
  if(ExDollar.value < 0) {
    showError('Please Enter A Valid Value !');
  }


}