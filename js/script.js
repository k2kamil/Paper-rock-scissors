function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  }
  if(argMoveId == 2){
        return 'papier';
    }
  if(argMoveId == 3){
        return 'nożyce';
    }
    else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
}


function displayResult(argComputerMove, argPlayerMove){
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
  printMessage('Ty wygrywasz!');
}

if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
  printMessage('Przegrywasz!');
}

if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
  printMessage('Przegrywasz!');
}

if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
  printMessage('Ty wgrywasz!');
}

if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
  printMessage('Przegrywasz!');
}

if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
  printMessage('Wygrywasz!');
}

if(argComputerMove == argPlayerMove){
    printMessage('Remis!')
}

if(argPlayerMove == 'nieznany ruch'){
    printMessage('Wpisz liczbę 1,2 lub 3, ponieważ każda inna spowoduje błąd ! ! !');
}
}




let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage('Komputer zagrał: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);

displayResult(computerMove, playerMove);

