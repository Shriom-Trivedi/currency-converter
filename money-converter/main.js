//Listen Submit
//hide results
document.querySelector('.result').style.display = 'none';

//show loader
document.getElementById('loading').style.display = 'none';

document.querySelector('.currency-form').addEventListener('submit', function(e) {

  //hide result
  document.querySelector('.result').style.display = 'none';

  //show loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculate, 2500);
  e.preventDefault();
});


function calculate() {
  const rupees = document.getElementById('Rupees');
  const dollar = document.getElementById('Dollar');
  
  const answer = parseFloat(rupees.value) / 75.67;

  if(isFinite(answer)) {
    dollar.value = answer.toFixed(3);

    document.querySelector('.result').style.display = 'block';
    document.getElementById('loading').style.display = 'none';

  }


}