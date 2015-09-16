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
  var combinations = [[0, 3, 6], [1, 4, 7], [2, 5 ,8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [6, 4, 2]]
  combinations.forEach(function(combo) {
    var mark = [];
    combo.forEach(function(coordiPair) {
      mark.push(this[coordiPair]);
    });
    if (mark[0] === mark[1] === mark[2]) {
      return true;
    }
  });
  return false;
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
