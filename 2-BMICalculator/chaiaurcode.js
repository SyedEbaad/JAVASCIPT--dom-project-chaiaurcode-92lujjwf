const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let WG = '';
    if (bmi < 18.6) {
      WG = 'UNDER-WEIGHT';
    } else if (bmi > 24.9) {
      WG = 'OVER-WEIGHT';
    } else {
      WG = 'PRETTY GOOD SHAPE';
    }
    results.innerHTML = `<span>${bmi}<br>${WG}</span>`;
  }
});
