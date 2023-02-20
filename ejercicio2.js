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
  let pal=true;
  let aux=0;
  let n=[];
  let k=0;
  
  for(let j=1;j<=num;j++){
  	aux=j;
    for(let i=0;aux>0;i++){
      n[i]=parseInt(aux%10)
      aux=parseInt(aux/10);
    }
    
    for(let i=0;i<n.length-1 && pal===true;i++){
    	if(n[i]!=n[i+1]){
      	pal=false;
      }
      if(pal===true){
      	nums[k]=j;
        k++;
      }
    }
    pal=true;
  }
  

  console.log("Palindromos: " + nums);
}