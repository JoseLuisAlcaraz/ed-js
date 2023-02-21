class Carta {

    constructor(num, palo) {
        this.num = num;
        this.palo = palo;
    }

    getNum() {
        return this.num;
    }

    setNum(num) {
        this.num = num;
    }

    getPalo() {
        return this.palo;
    }

    setPalo(palo) {
        this.palo = palo;
    }

    mostrarCarta() {
        console.log(this.num + ' de '+ this.palo);
  }
  
    menorQue(carta) {
        let menor;
        if (this.palo == carta.palo) {
            if (this.num < carta.num) {
                menor = false;
            } else if (this.num > carta.num) {
                menor = true;
            }
        } else if (this.palo == 'Oros' && (carta.palo == 'Copas'|| carta.palo == 'Espadas'|| carta.palo == 'Bastos')){
            menor = false;
        }else if (this.palo == 'Copas'&& (carta.palo == 'Espadas'|| carta.palo == 'Bastos')){
            menor = false;
        }else if (this.palo == 'Espadas'&& carta.palo == 'Bastos'){
            menor = false;
        }else{
            menor = true;
    }

        if (menor) {
            console.log('El ' + carta.num + ' de '+ carta.palo + ' es menor que el '+ this.num + ' de ' + this.palo);
            return true;
        } else if (!menor) {
            console.log('El ' + carta.num + ' de '+ carta.palo + ' es mayor que el '+ this.num + ' de ' + this.palo);
            return false;
        }
    }

}

class Baraja {

    constructor(cartas) {
        this.cartas = cartas;
        let num = 1;
        for (let i = 0; i < 48; i++) {

            if (num > 12) {
                num = 1;
            }

            if (i < 12) {
                this.cartas[i] = new Carta(num,'Oros');
            }else if (i > 11 && i < 24) {
                this.cartas[i] = new Carta(num,'Copas');
            }else if (i > 23 && i < 36) {
                this.cartas[i] = new Carta(num,'Espadas');
            }else if (i > 35 && i < 48) {
                this.cartas[i] = new Carta(num,'Bastos');
            }
        num++;
        }
    }

    mostrarBaraja() {
        for (let i = 0; i < this.cartas.length; i++) {
            this.cartas[i].mostrarCarta();
        }
    }

    barajar() {
        let aux;
        for (let i = 0; i <= 20; i++) {
            let rand1 = Math.floor(Math.random() * 48);
            let rand2 = Math.floor(Math.random() * 48);
            aux = this.cartas[rand1];
            this.cartas[rand1] = this.cartas[rand2];
            this.cartas[rand2] = aux    
        }
    }

    jugar() {
        let win = 0, lose = 0, num = 1;
        console.log('La primera carta es de la maquina y la segunda corresponde a tu carta.');
        console.log('La carta con mayor palo gana (Oros>Copas>Espadas>Bastos), si son del mismo palo, gana el número más alto');
        do {
                num = parseInt(prompt('¿Quieres jugar? 1=SI 2=NO :'));
            if (num == 1) {
                let rand1 = Math.floor(Math.random() * 48);
                let pos = parseInt(prompt('Introduce una posición de 1 a 48: '));
            let ganador = this.cartas[pos - 1].menorQue(this.cartas[rand1]);
                if (ganador == true) {
                    win++;
                    console.log('Has ganado.');
            }else if (ganador == false) {
                    lose++;
                    console.log('Has perdido.');
            }
            console.log('Victorias Ususario: ' + win);
            console.log('Victorias Maquina: ' + lose);
          }
        }while(num == 1);
    }
}

carta1 = new Carta(8,'Oros');
carta2 = new Carta(6,'Copas');
carta3 = new Carta(2,'Espadas');
carta4 = new Carta(3,'Bastos');

console.log('______________Prueba mostrarCarta______________');
carta1.mostrarCarta();
carta2.mostrarCarta();
carta3.mostrarCarta();
carta4.mostrarCarta();

console.log('______________Prueba menorQue______________');
carta1.menorQue(carta2);
carta2.menorQue(carta3);
carta3.menorQue(carta4);
carta4.menorQue(carta1);
carta3.menorQue(carta2);

console.log('______________Prueba mostrarBaraja______________');
let cartas = [];
let baraja1 = new Baraja(cartas);
baraja1.mostrarBaraja();

console.log('______________Prueba barajar______________');
baraja1.barajar();
baraja1.mostrarBaraja();

console.log('______________Prueba Jugar______________');
baraja1.jugar();