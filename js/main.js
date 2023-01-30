function strings() {
   let inputString1 = prompt("Input your 1st string",);
   let inputString2 = prompt("Input your 2nd string",);
   let inputString3 = prompt("Input your 3rd string",);
   alert(`You entered folowing: ${inputString1} ${inputString2} ${inputString3}`); //шаблонна строка
   alert('You entered folowing: ' + inputString1 + ' ' + inputString2 + ' ' + inputString3); //конкатенація
}

function numbers() {
   let number = prompt('Please enter 5 digit number', '');
   if (number.length != 5) {
      alert('Please enter 5 digit number!');
   } else {
      alert('Original order ' + number.split('').join(' '));
      alert('Reverse order ' + number.split('').reverse().join(' '));
   }
}