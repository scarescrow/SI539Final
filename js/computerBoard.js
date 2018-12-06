/*
This section is for board configuration for chess board
against Human
*/

var computerBoard, game = new Chess();

// do not pick up pieces if the game is over
// only pick up pieces for White
var onDragStartComputer = function(source, piece, position, orientation) {
  if (game.in_checkmate() === true || game.in_draw() === true ||
    piece.search(/^b/) !== -1) {
    return false;
  }
};

var makeRandomMove = function() {
  var possibleMoves = game.moves();

  // game over
  if (possibleMoves.length === 0) return;

  var randomIndex = Math.floor(Math.random() * possibleMoves.length);
  game.move(possibleMoves[randomIndex]);
  computerBoard.position(game.fen());
  updateStatusComputer();
};

var onDropComputer = function(source, target) {
  // see if the move is legal
  var move = game.move({
    from: source,
    to: target,
    promotion: 'q' // NOTE: always promote to a queen for example simplicity
  });

  // illegal move
  if (move === null) return 'snapback';

  // make random legal move for black
  window.setTimeout(makeRandomMove, 250);
  updateStatusComputer();
};

// Update the status
var updateStatusComputer = function() {
    var computerStatus = '';
  
    var moveColor = 'White';
    if (game.turn() === 'b') {
      moveColor = 'Black';
    }
  
    // checkmate?
    if (game.in_checkmate() === true) {
      computerStatus = 'Game over, ' + moveColor + ' is in checkmate.';
    }
  
    // draw?
    else if (game.in_draw() === true) {
      computerStatus = 'Game over, drawn position';
    }
  
    // game still on
    else {
      computerStatus = moveColor + ' to move';
  
      // check?
      if (game.in_check() === true) {
        computerStatus += ', ' + moveColor + ' is in check';
      }
    }
  
    $('#computerBoardStatus').text(computerStatus);
  };

// update the board position after the piece snap
// for castling, en passant, pawn promotion
var onSnapEndComputer = function() {
  computerBoard.position(game.fen());
};