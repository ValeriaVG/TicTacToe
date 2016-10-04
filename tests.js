QUnit.module( "result check" );
QUnit.test("3 x in a row/col/diag", function(assert) {
    assert.deepEqual(checkResult({
        "count": 3,
        "summ": 3
    }, 3), {
        "gameover": true,
        "winner": 1
    }, "X won");

  });
QUnit.test("3 o in a row/col/diag", function(assert) {
    assert.deepEqual(checkResult({
        "count": 3,
        "summ": 0
    }, 3), {
        "gameover": true,
        "winner": 0
    }, "O won");
  });

  QUnit.test("Game in progress", function(assert) {
    assert.deepEqual(checkResult({
        "count": 1,
        "summ": 0
    }, 3), false, "Nothing special");
  });


QUnit.module( "someone wins" );
QUnit.test("X wins in a row", function(assert) {
    assert.deepEqual(checkBoard([
        [1, 1, 1],
        [0, 0, 1],
        [0, 1, 0]
    ], 3), {
        "gameover": true,
        "winner": 1
    }, "3 X in first row!");
  });


QUnit.test("X wins in a column", function(assert) {
    assert.deepEqual(checkBoard([
        [1, 0, 0],
        [1, 0, 1],
        [1, 1, 0]
    ], 3), {
        "gameover": true,
        "winner": 1
    }, "3 X in first column!");
  });

  QUnit.test("X wins in a left diag", function(assert) {
    assert.deepEqual(checkBoard([
        [1, 0, 0],
        [0, 1, 0],
        [1, 0, 1]
    ], 3), {
        "gameover": true,
        "winner": 1
    }, "3 x in left giag!");
});
  QUnit.test("O wins in a right diag", function(assert) {
    assert.deepEqual(checkBoard([
        [1, 0, 0],
        [1, 0, 0],
        [0, 1, 1]
    ], 3), {
        "gameover": true,
        "winner": 0
    }, "3 o in right diag!");

});
QUnit.module( "5x5" );
  QUnit.test("5x5 X wins", function(assert) {
    assert.deepEqual(checkBoard([
        [1, 1, 1 ,1 ,1],
        [0, 0, 1, 0 ,0],
        [0, 1, 0, 0 ,0],
        [0, 0, 1, 0 ,0],
        [0, 1, 0, 0 ,0]
    ], 5), {
        "gameover": true,
        "winner": 1
    }, "5 X in first row!");

});
QUnit.module( "no winner" );
QUnit.test("game in process", function(assert) {
    assert.deepEqual(checkBoard([
        [1, 0, 1],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined]
    ], 3), {
        "gameover": false
    }, "Only first row");
  });
  QUnit.test("Toe", function(assert) {

    assert.deepEqual(checkBoard([
        [1, 0, 1],
        [0, 0, 1],
        [1, 1, 0]
    ], 3), {
        "gameover": true
    }, "Noone won. Game over");
});
