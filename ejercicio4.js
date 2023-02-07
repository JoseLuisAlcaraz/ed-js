class Conductor {

	  Conductor() {
        let capacidad;
        let pasajeros = 0;
        let matricula;
        let listadoConductores=[];
    }

	  Conductor(capacidad, pasajeros, matricula, listadoConductores) {
        this.capacidad = capacidad;
        this.pasajeros = pasajeros;
        this.matricula = matricula;
        this.listadoConductores = listadoConductores;
    }

    getCapacidad() {
        return capacidad;
    }

    setCapacidad(capacidad) {
        this.capacidad = capacidad;
    }

    getPasajeros() {
        return pasajeros;
    }

    setPasajeros(pasajeros) {
        this.pasajeros = pasajeros;
    }

    getMatricula() {
        return matricula;
    }

    setMatricula(matricula) {
        this.matricula = matricula;
    }

    getListadoConductores() {
        return listadoConductores;
    }

    setListadoConductores(listadoConductores) {
        this.listadoConductores = listadoConductores;
    }
}