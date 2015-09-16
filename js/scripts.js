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
