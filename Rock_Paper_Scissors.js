const args = process.argv.slice(2);

const validMoves = ['rock', 'paper', 'scissors'];

const playerMove = args[0].toLowerCase();

if (validMoves.includes(playerMove)) {
  console.log('Your step is:', playerMove);
} else {
  console.log('Just rock, paper or scissors');
  return;
}

const randomNumber = Math.floor(Math.random() * 3);
const computerMove = validMoves[randomNumber];

console.log(`You chose: ${playerMove}`);
console.log(`Computer chose: ${computerMove}`);

if (playerMove === computerMove) {
  console.log("It's a draw!");
} else if (playerMove === validMoves[0] && computerMove === validMoves[2]) {
  console.log('You win!');
} else if (playerMove === validMoves[2] && computerMove === validMoves[1]) {
  console.log('You win!');
} else if (playerMove === validMoves[1] && computerMove === validMoves[0]) {
  console.log('You win!');
} else {
  console.log('Computer wins!');
}
