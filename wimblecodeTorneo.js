const puntuaciones = [0, 15, 30, 40];
const jugadores = ['Alberto C', 'David J', 'Javier M', 'Edu Aguilar'];

const createPlayOff = (arrayJugadores) =>{
    const randomJugadores = [];
    const obtenerRandom = () => Math.floor(Math.random() * jugadores.length);
    const checkrepeticion = (listaJugadores, jugadoresPlayOff) => jugadoresPlayOff.includes(listaJugadores);
    
    while(randomJugadores.length < 4){
        const randomIndex = obtenerRandom();
        if (!checkrepeticion(arrayJugadores[randomIndex], randomJugadores)){
            randomJugadores.push(arrayJugadores[randomIndex]);
        }
    }
    const partido1 = [randomJugadores[0],randomJugadores[1]];
    
    const partido2 = [randomJugadores[2],randomJugadores[3]];
    
    return {
        partido1,
        partido2,
    }
}


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
    
    const randomMatch = () => {
        while(getWinner() === 'noWinner'){
            const randomPoint = Math.floor(Math.random() * 2) + 1;
            pointWonBy(randomPoint);
        }
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
            }
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
        return (`${jugador1.nombre} ${jugador1.juegosGanados}\n${jugador2.nombre} ${jugador2.juegosGanados}`);
        
    };
    
    const getWinner = () => {
        if(jugador1.juegosGanados === 2){
            return jugador1.nombre;

        }
        else if(jugador2.juegosGanados === 2){
            return jugador2.nombre;
        }else{
            return 'noWinner';
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
    
    return {
        pointWonBy,
        getCurrentRoundScore,
        getGameScore,
        getMatchScore,
        getWinner,
        randomMatch,
    };
}

const runTorneo = () => {
    torneo = (createPlayOff(jugadores));
    const game1 = createMatch(torneo.partido1[0], torneo.partido1[1]);
    game1.randomMatch();
    console.log(game1.getWinner());
    const game2 = createMatch(torneo.partido2[0], torneo.partido2[1]);
    game2.randomMatch();
    console.log(game2.getWinner());
    const final = createMatch(game1.getWinner(), game2.getWinner());
    final.randomMatch();
    console.log(final.getWinner());
}

runTorneo();