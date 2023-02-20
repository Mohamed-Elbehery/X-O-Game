let turn = 'x';
let head = document.getElementById("head");
let squares = [];
let thereIsWinner = false;

function afterWinning(n1, n2, n3) {
  thereIsWinner = true;
  head.innerHTML = `${squares[n1]} Is The Winner`;
  document.getElementById(`item`+n1).style.backgroundColor = "#000";
  document.getElementById(`item`+n2).style.backgroundColor = "#000";
  document.getElementById(`item`+n3).style.backgroundColor = "#000";
  // preventDefault();
  setInterval(() => head.innerHTML += `.`, 1000);
  setTimeout(() => location.reload(), 3250);
}

function game(id) {
  let squareValue = document.getElementById(id);
  if(!thereIsWinner) {
    if (turn === 'x' && squareValue.innerHTML == '') {
      squareValue.innerHTML = 'X';
      turn = 'o';
      head.innerHTML = 'O';
    } else if (turn === 'o' && squareValue.innerHTML == '') {
      squareValue.innerHTML = 'O';
      turn = 'x';
      head.innerHTML = 'X';
    }
    winner();
  }
}

function winner() {
  for(let i = 1; i < 10; i++) {
    squares[i] = document.getElementById(`item${i}`).innerHTML;
  }

  if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '') {
    afterWinning(1, 2, 3);
  } else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[5] != '') {
    afterWinning(4, 5, 6);
  } else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[8] != '') {
    afterWinning(7, 8, 9);
  } else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[4] != '') {
    afterWinning(1, 4, 7);
  } else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[5] != '') {
    afterWinning(2, 5, 8);
  } else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != '') {
    afterWinning(3, 6 ,9);
  } else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[5] != '') {
    afterWinning(1, 5, 9);
  } else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[5] != '') {
    afterWinning(3, 5, 7);
  }
}