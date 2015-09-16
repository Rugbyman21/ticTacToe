describe('Player', function(){
  it("creates a player with a character selection", function() {
    var newPlayer = new Player("<3");
    expect(newPlayer.selection).to.equal("<3");
  });
});

describe('Space', function() {
  it("create space on a specific plane", function() {
    var newSpace = new Space(0,1);
    expect(newSpace.xCoordi).to.equal(0);
    expect(newSpace.yCoordi).to.equal(1);
  });
});

describe('Board', function() {
  it("create board with an array of nine spaces", function() {
    var newGame = new Board();
    var spaceArray = boardBuild();
    expect(newGame.spaces).to.eql(spaceArray);
  });

  it("marks an available space", function() {
    var newBoard = new Board();
    newBoard.mark(0, 0, "<3");
    expect(newBoard.spaces[0].selection).to.equal("<3");
  });

  it("returns false if the space is already filled", function() {
    var newBoard = new Board();
    newBoard.mark(2, 2, "<3");
    expect(newBoard.mark(2, 2, "<3")).to.equal(false);
  });

  it("returns false if row of three is not of the same mark", function() {
    var newBoard = new Board();
    newBoard.mark(2, 2, "<3");
    newBoard.mark(1, 1, "c=3");
    newBoard.mark(0, 0, "<3");
    expect(newBoard.winCheck()).to.equal(false);
  });

  it("returns true if row of three is of the same mark", function() {
    var newBoard = new Board();
    newBoard.mark(2, 2, "c=3");
    newBoard.mark(1, 1, "c=3");
    newBoard.mark(0, 0, "c=3");
    expect(newBoard.winCheck()).to.equal(false);
  });

});
