// COMPUTER MOVE

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}

if(randomNumber == 2){
  computerMove = 'papier';
}

if(randomNumber == 3){
  computerMove = 'nożyce';
}

printMessage('Komputer zagrał: ' + computerMove);

//PLAYER MOVE

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}

if(playerInput == '2'){
    playerMove = 'papier';
}

if(playerInput == '3'){
    playerMove == 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);


//RESULTS

//Comp play kamień

if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
}

if( computerMove == 'kamień' && playerMove == 'nożyce'){
  printMessage('Przegrywasz!');
}


//Comp play papier



if( computerMove == 'papier' && playerMove == 'kamień'){
  printMessage('Przegrywasz!');
}

if( computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('Ty wgrywasz!');
}

//Comp play nożyce

if( computerMove == 'nożyce' && playerMove == 'papier'){
  printMessage('Przegrywasz!');
}

if( computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Wygrywasz!');
}

if(computerMove == playerMove){
    printMessage('Remis!')
}

if(playerMove == 'nieznany ruch'){
    printMessage('Wpisz liczbę 1,2 lub 3, ponieważ każda inna spowoduje błąd ! ! !');
}