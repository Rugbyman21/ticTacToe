// Players only have a selection. This can be anything, including the classic Xs and Os
function Player(selection) {
  this.selection = selection;
};

// Spaces have coordinates and carry a player's selection (if given one).
function Space(xCoordi, yCoordi) {
  this.xCoordi = xCoordi;
  this.yCoordi = yCoordi;
  this.selection = null;
};

// Boards use a custom function to build a board of Spaces.
function Board() {
  this.spaces = boardBuild();
}

// A function to mark the board!
Board.prototype.mark = function(xInput, yInput, mark) {
  this.spaces.forEach(function(space) {
    if (space.xCoordi === xInput) {
      if (space.yCoordi === yInput) {
        if (space.selection === null) {
          return space.selection = mark;
        }
      }
    }
  });
  return false;
};

// A function to check if there is a win on the board. Don't mess with this, it's perfect.
Board.prototype.winCheck = function() {
  var combinations = [[0, 4, 8], [0, 3, 6], [1, 4, 7], [2, 5 ,8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [6, 4, 2]]
  var board = this;
  var win = false;
  combinations.forEach(function(combo) {
    var mark = [];
    combo.forEach(function(coordiPair) {
      mark.push(board.spaces[coordiPair].selection);
    });
    if (mark[0] !== null && mark[1] !== null && mark[2] !== null) {
      if (mark[0].valueOf() === mark[1].valueOf() && mark[1].valueOf() === mark[2].valueOf()) {
        win = true;
      }
    }
  });
  return win;
}


// A Game starts out with zero turns, creates a blank Board, and applies
// selections (whatever string you want here) for each player to be created.
// The Game tracks two players. This could be a good place to track turns?
function Game(selection1, selection2) {
  this.turns = 0;
  this.board = new Board();
  this.player1 = new Player(selection1);
  this.player2 = new Player(selection2);
}

// A function to control for tie games. Where would you use this?
Game.prototype.tieStatus = function() {
  if (this.board.winCheck() === false && this.turns === 8) {
    return "Tie";
  }
}

// A function to increase the turn count of the game, currently not tied to any players.
Game.prototype.turnCount = function() {
  this.turns += 1;
}

// Where we build the board of nine spaces.
var boardBuild = function() {
  var board = [];
  for (var y = 0; y < 3; y++) {
    for (var x = 0; x < 3; x++) {
      var newSpace = new Space(x,y);
      board.push(newSpace);
    }
  }
  return board;
};
