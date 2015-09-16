function Player(selection) {
  this.selection = selection;
};

function Space(xCoordi, yCoordi) {
  this.xCoordi = xCoordi;
  this.yCoordi = yCoordi;
  this.selection = null;
};

function Board() {
  this.spaces = boardBuild();
}

function Game(selection1, selection2) {
  this.turns = 0;
  this.board = new Board();
  this.player1 = new Player(selection1);
  this.player2 = new Player(selection2);
}



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

Game.prototype.tieStatus = function() {
  if (this.board.winCheck() === false && this.turns === 8) {
    return "Tie";
  }
}

Game.prototype.turnCount = function() {
  this.turns += 1;
}

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
