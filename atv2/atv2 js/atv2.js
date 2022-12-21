function confere(event){
  let numero1 = event.number1.value;
  let numero2 = event.number2.value;
  let numero3 = event.number3.value;

  let max = Math.max(numero1, numero2, numero3);

  console.log(`O maior numero é ${max}`);
  document.write(`O maior numero é ${max}`);
}