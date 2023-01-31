let num=[], par=0, impar=0, suma=0, mayor=0, menor=0

num[0]=parseInt(prompt("Dame un número >= 1"));

for(let i=1;num[i-1]>=1;i++){
	num[i]=parseInt(prompt("Dame un número >= 1"));
  if(num[i]>=1){
  	suma+=num[i]
    
  	if(num[i]%2==0){
    	par++
    }else{
    	impar++
    }
    
    if(num[i]>mayor){
    	mayor=num[i]
    }
    if(num[i]<menor){
    	menor=num[i]
    }
  }else{
  	num.pop()
  }
}

console.log("Lista de números introducidos: " + num)
console.log("Número Pares: " + par)
console.log("Número Impares: " + impar)
console.log("Suma total: " + suma)
console.log("Media: " + suma/num.length)