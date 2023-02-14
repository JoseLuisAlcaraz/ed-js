class Conductor{
	constructor(nombre,licencia){
  	this.nombre = nombre;
    this.licencia = licencia;
  }
  
  getNombre(){
   return this.nombre;
  }
  
  setNombre(nombre){
  	this.nombre = nombre;
  }
  
  getLicencia(){
   return this.licencia;
  }
  
  setLicencia(licencia){
  	this.licencia = licencia;
  }
  
  mostrarDatosConductor(){
  	console.log(this.nombre + ' - ' + this.licencia);
  }
}





class Autobus{
	constructor(capacidad,pasajeros,matricula,listadoConductores){
  	this.capacidad = capacidad;
    this.pasajeros = pasajeros;
    this.matricula = matricula;
    this.listadoConductores = listadoConductores;
  }
  
  getCapacidad(){
   return this.capacidad;
  }
  
  setCapacidad(capacidad){
  	this.capacidad = capacidad;
  }
  
  getPasajeros(){
   return this.pasajeros;
  }
  
  setPasajeros(pasajeros){
  	this.pasajeros = pasajeros;
  }
  
  getMatricula(){
   return this.matricula;
  }
  
  setMatricula(matricula){
  	this.matricula = matricula;
  }
  
  getListadoConductores(){
   return this.listadoConductores;
  }
  
  setListadoConductores(listadoConductores){
  	this.listadoConductores = listadoConductores;
  }
  
  mostrarDatosAutobus(){
  	console.log('Capacidad: ' + this.capacidad);
    console.log('Pasajeros: ' + this.pasajeros);
    console.log('Matrícula: ' + this.matricula);
    console.log('Conductores: ');
    for(let i = 0; i < this.listadoConductores.length; i++){
    	this.listadoConductores[i].mostrarDatosConductor();
    }
  }
  
  subir(numPasajeros,autobus){
  	this.pasajeros = this.pasajeros + numPasajeros;
    if(this.pasajeros>this.capacidad){
      this.pasajeros = this.capacidad;
    }
  }
  
  bajar(numPasajeros,autobus){
  	this.pasajeros = parseInt(this.pasajeros) - numPasajeros;
    if(this.pasajeros<0){
      this.pasajeros = 0;
    }
  }
 
 buscarConductor(licencia){
 	for(let i = 0; i < this.listadoConductores.length; i++){
    	if(licencia === this.listadoConductores[i].getLicencia()){
      	return true;
      }
  }
  return false;
}

}





let conductores = [];
conductores[0] = new Conductor('Juan','1234');
conductores[1] = new Conductor('José','2345');

let autobus1 = new Autobus(60,43,'65781SDF',conductores);

console.log('______________ Prueba Inicial ____________');
autobus1.mostrarDatosAutobus();

console.log('______________ Prueba Subir +30 ____________');
autobus1.subir(30,autobus1);
autobus1.mostrarDatosAutobus();

console.log('______________ Prueba Bajar -70 ____________');
autobus1.bajar(70,autobus1);
autobus1.mostrarDatosAutobus();

console.log('______________ Prueba Buscar 1234 ____________');
if(autobus1.buscarConductor('1234')){
	console.log('Licencia encontrada.');
}else{
	console.log('Licencia no encontrada.');
}

console.log('______________ Prueba Buscar 9876 ____________');
if(autobus1.buscarConductor('9876')){
	console.log('Licencia encontrada.');
}else{
	console.log('Licencia no encontrada.');
}