const form = document.querySelector('form');
//this use case will five you empty value
// const height = parseInt(document.querySelector('#height').value);
// const weight = parseInt(document.querySelector('#weight').value);

form.addEventListener('submit', (event) =>{
    event.preventDefault();

// why we take the value of height and width because when we 
   const height = parseInt(document.querySelector('#height').value);
   const weight = parseInt(document.querySelector('#weight').value);
   const result = document.querySelector('#result');

   if (height === ' ' || height < 0 || isNaN(height)){
    result.innerHTML = `Please give a valid height ${height}`;
    result.style.color='red';
   }

   else if (weight === ' ' || weight < 0 || isNaN(weight)){
    result.innerHTML = `Please give a valid weight ${weight}`;
    result.style.color='red';
   }
   else{
    const bmi = (weight/((height*weight)/10000)).toFixed(2);
    
    if (bmi < 18.6){
        result.innerHTML = `<span>${bmi} <br> 'Under Weight'</span>`;
        result.style.color="blodred";
    }
    else if (bmi > 18.6 && bmi <24.6){
        result.innerHTML = `<span>${bmi} <br> 'Normal Range'</span>`;
        result.style.color="white";
    }
    else{
        result.innerHTML = `<span>${bmi} <br> 'Overweight'</span>`;
        result.style.color="green";
    }
   }
   
})

const restart = document.querySelector('#restart');
restart.addEventListener('click',() => {
    document.querySelector('#height').value = '';
    document.querySelector('#weight').value = '';
    // document.querySelector('#result').innerHTML = '';

})

