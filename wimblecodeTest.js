import {createMatch} from './wimblecode.js';

// Ejemplo de software
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
console.log(game.getMatchScore()); // Output: "Alberto C 0\nDavid J 2"
console.log(game.getWinner()); // Output: "David J"