let num=[], par=0, impar=0, suma=0, mayor=0, menor=0, i=0

do{
	num[i]=parseInt(prompt("Dame un número >= 1"));
  if(num[i]>=1){
  	suma+=num[i]
    
    if(i==0){
    	menor=num[0]
    }
    
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
  i++
}while(num[i-1]>=1)

console.log("Lista de números introducidos: " + num)
console.log("Número Pares: " + par)
console.log("Número Impares: " + impar)
console.log("Suma total: " + suma)
console.log("Media: " + suma/num.length)
console.log("Mayor: " + mayor)
console.log("Menor: " + menor)