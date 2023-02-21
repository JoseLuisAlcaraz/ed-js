let num = parseInt(prompt("Introduce el número X (se comprobará desde 1 hasta X):"));
let prim=primos(num);
let pal=palindromos(num);
PrimPal(prim,pal);

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
  return nums;
}



function palindromos(num){
	let nums = [];
  let pal=true;
  let aux=0;
  let n=[];
  
  for(let j=1;j<=num;j++){
  	if(j<10){
    	nums.push(j);
    }else{
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
          nums.push(j);
        }
      }
      pal=true;
  	}
  }
  

  console.log("Palíndromos: " + nums);
  return nums;
}



function PrimPal (prim,pal){

	let nums=[];
  
  for(let i=0;i<=pal.length; i++){
    for(let j=0;j<prim.length;j++){
    	if(pal[i]==prim[j]){
      	nums.push(pal[i]);
      }
    }
   }
   
   console.log("Primos y Palíndromos:  " + nums);
}