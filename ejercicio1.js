let s = prompt("Introduce cadena de texto a verificar")
let ss=s.toUpperCase()
let p=[]
p[0]="AA"
p[1]="BCA"
p[2]="RBT"
p[3]="JT"

console.log("Cadena Introducida : " + s)
console.log("Patrones a buscar : " + p.toString())
console.log("Aparecen : " + totalPatrones(ss, p))

function encontrarPatron(cadena,patron){
	
}

function totalPatrones(cadena, arrayPatrones){
let sum=0;
	for(let i=0;i<arrayPatrones.length;i++){
  	sum+=encontrarPatron(cadena,arrayPatrones[i])
  }
}