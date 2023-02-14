let num = parseInt(prompt("Introduce el número X (se comprobará desde 1 hasta X):"));
primos(num);
palindromos(num);

function primos(num){
let nums = [];
let primo = true;

  for(let i = 1 ; i <= num ; i++){
    for(let j = 2; j <= i-1; j++){
      if(i%j == 0){
        primo = false;
      }
    }
    if(primo == true){
      nums.push(i);
    }else{
      primo = true;
    }
  }
  
  console.log("Primos: " + nums);
}

function palindromos(num){
let nums = [];


  console.log("Palindromos: " + nums);
}