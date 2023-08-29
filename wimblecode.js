const puntuaciones = [0, 15, 30, 40]

const createMatch = (j1, j2) => {
    let jugador1 = {
        nombre: j1,
        puntuacion: 0,
        rondasGanadas: 0,
        juegosGanados: 0,
    };
    let jugador2 = {
        nombre: j2,
        puntuacion: 0,
        rondasGanadas: 0,
        juegosGanados: 0,
    };

    const pointWonBy = (value) => {
        if(value === 1){
            jugador1.puntuacion +=1;
        }else if (value === 2){
            jugador2.puntuacion += 1;
        } else {
            console.log("Este jugador no existe");
        }
        if (jugador1.puntuacion >= 4 && jugador1.puntuacion - jugador2.puntuacion >= 2){
            jugador1.rondasGanadas += 1;
            reinicioPuntuacion();
        }else if (jugador2.puntuacion >= 4 && jugador2.puntuacion - jugador1.puntuacion >= 2){
            jugador2.rondasGanadas += 1;
            reinicioPuntuacion();        
        }
    };
    
    const getCurrentRoundScore = () =>{
        if(jugador1.puntuacion >= 3 && jugador2.puntuacion >= 3){
            if(jugador1.puntuacion === jugador2.puntuacion){
                return "Deuce";
            }else if(jugador1.puntuacion > jugador2.puntuacion){
                return `Advantage ${jugador1.nombre}`;
            }else{
                return `Advantage ${jugador2.nombre}`;
            }
        }else {
            return (`${jugador1.nombre} ${puntuaciones[jugador1.puntuacion]}-${puntuaciones[jugador2.puntuacion]} ${jugador2.nombre}`);
        }
    };
    
    const getGameScore = () => {
        return (`${jugador1.nombre} ${jugador1.rondasGanadas}\n${jugador2.nombre} ${jugador2.rondasGanadas}`);
    };

    const getMatchScore = () => {
        if(jugador1.rondasGanadas <= 7 && jugador2.rondasGanadas <= 7){
            if(jugador1.rondasGanadas === 7){
                jugador1.juegosGanados += 1;
                reinicioRondas();
            }else if (jugador1.rondasGanadas >= 4 && jugador1.rondasGanadas - jugador2.rondasGanadas >= 2){
                jugador1.juegosGanados += 1;
                reinicioRondas();
            }else if (jugador2.rondasGanadas === 7){
                jugador2.juegosGanados += 1;
                reinicioRondas();
            }else if (jugador2.rondasGanadas >= 4 && jugador2.rondasGanadas - jugador1.rondasGanadas >= 2){
                jugador2.juegosGanados += 1;
                reinicioRondas();
            return (`${jugador1.nombre} ${jugador1.juegosGanados}\n${jugador2.nombre} ${jugador2.juegosGanados}`);
            }
        }
    };

    const getWinner = () => {
        if(jugador1.juegosGanados === 2){
            return jugador1.nombre;
        }
        else if(jugador2.juegosGanados === 2){
            return jugador2.nombre;
        }
    }
    

    const reinicioPuntuacion = () => {
        jugador1.puntuacion = 0;
        jugador2.puntuacion = 0;
    };
    const reinicioRondas = () => {
        jugador1.rondasGanadas = 0;
        jugador2.rondasGanadas = 0;
    };
    const reinicioJuegos = () => {
        jugador1.juegosGanados = 0;
        jugador2.juegosGanados = 0;
    }

    
    return {
        pointWonBy,
        getCurrentRoundScore,
        getGameScore,
        getMatchScore,
        getWinner,
    };
}


const game = createMatch('Alberto C', 'David J');
// Cuando puntua el 1º judagor lo registro de este modo
game.pointWonBy(1); // Player 1 scores a point
// Cuando puntua el 2º judagor lo registro de este modo
game.pointWonBy(2); // Player 1 scores a point
// Quiero poder ver como va la ronda actual en todo momento
console.log(game.getCurrentRoundScore()); // Output: Alberto C 15-15 David J
game.pointWonBy(1); // Player 1 scores a point
console.log(game.getCurrentRoundScore()); // Output: Alberto C 30-15 David J
game.pointWonBy(2); // Player 2 scores a point
console.log(game.getCurrentRoundScore()); // Output: Alberto C 30-30 David J
game.pointWonBy(1); // Player 1 scores a point
console.log(game.getCurrentRoundScore()); // Output: Alberto C 40-30 David J
game.pointWonBy(2); // Deuce
console.log(game.getCurrentRoundScore()); // Output: Deuce
game.pointWonBy(1); // Player 1 wins the game
console.log(game.getCurrentRoundScore()); // Output: "Advantage Alberto 4C"
game.pointWonBy(2); // Player 2 wins the game
console.log(game.getCurrentRoundScore()); // Output: "Deuce"
game.pointWonBy(2); // Player 2 wins the game
console.log(game.getCurrentRoundScore()); // Output: "Advantage David J"
game.pointWonBy(2); // Player 2 wins the game
// Quiero poder ver como va la puntuación de un juego
console.log(game.getGameScore()); // Output: "Alberto C 0\nDavid J 1"
// El primer round es para David le quedan 3 para ganar un juego

game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
// David gana 2º ronda
game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
// David gana 3º ronda
game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
// David gana 4º ronda
// Primer juego ganado
console.log(game.getMatchScore()); // Output: "Alberto C 0\nDavid J 1"
game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
// gana ronda 1º
game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
// gana ronda 2º
game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
// gana ronda 3º
game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
// gana ronda 4º
// Método para ver los juegos de cada jugador
console.log(game.getMatchScore()); // Output: "Alberto C 0\nDavid J 2";
console.log(game.getWinner()); // Output: "David J"