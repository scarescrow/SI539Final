/*
This section is for board configuration for chess board
against Human
*/

var playerBoard, playerGame = new Chess();

// do not pick up pieces if the game is over
// only pick up pieces for the side to move
var onDragStartPlayer = function(source, piece, position, orientation) {
  if (playerGame.game_over() === true ||
      (playerGame.turn() === 'w' && piece.search(/^b/) !== -1) ||
      (playerGame.turn() === 'b' && piece.search(/^w/) !== -1)) {
    return false;
  }
};

var onDropPlayer = function(source, target) {
  // see if the move is legal
  var move = playerGame.move({
    from: source,
    to: target,
    promotion: 'q' // NOTE: always promote to a queen for example simplicity
  });

  // illegal move
  if (move === null) return 'snapback';

  updateStatusPlayer();
};

// update the board position after the piece snap 
// for castling, en passant, pawn promotion
var onSnapEndPlayer = function() {
  playerBoard.position(playerGame.fen());
};

var updateStatusPlayer = function() {
  var playerStatus = '';

  var moveColor = 'White';
  if (playerGame.turn() === 'b') {
    moveColor = 'Black';
  }

  // checkmate?
  if (playerGame.in_checkmate() === true) {
    playerStatus = 'Game over, ' + moveColor + ' is in checkmate.';
  }

  // draw?
  else if (playerGame.in_draw() === true) {
    playerStatus = 'Game over, drawn position';
  }

  // game still on
  else {
    playerStatus = moveColor + ' to move';

    // check?
    if (playerGame.in_check() === true) {
      playerStatus += ', ' + moveColor + ' is in check';
    }
  }
};