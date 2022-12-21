function confere(event){
  let idade = event.idade.value;
if(idade  >= 18){
  console.log('Tá na hora, vai trabalhar!!!');
  document.getElementById('msg').innerHTML = 'Tá na hora, vai trabalhar!!!';
  
}else{
  console.log('Tá na hora, vai estudar!!!');
  document.getElementById('msg').innerHTML = 'Tá na hora, vai estudar!!!';
}

}