QUnit.test("result check", function(assert) {
    assert.deepEqual(checkResult({
        "count": 3,
        "summ": 3
    }, 3), {
        "gameover": true,
        "winner": 1
    }, "3 x in a row/col/diag");
    assert.deepEqual(checkResult({
        "count": 3,
        "summ": 0
    }, 3), {
        "gameover": true,
        "winner": 0
    }, "3 o in a row/col/diag");
    assert.deepEqual(checkResult({
        "count": 1,
        "summ": 0
    }, 3), false, "Nothing special");
    assert.deepEqual(checkResult({
        "count": 3,
        "summ": 2
    }, 3), false, "Nothing special");
});

QUnit.test("someone wins", function(assert) {
  //Rows
    assert.deepEqual(checkBoard([
        [1, 1, 1],
        [0, 0, 1],
        [0, 1, 0]
    ], 3), {
        "gameover": true,
        "winner": 1
    }, "3 X in first row!");

    assert.deepEqual(checkBoard([
        [0, 0, 0],
        [1, 0, 1],
        [1, 1, 0]
    ], 3), {
        "gameover": true,
        "winner": 0
    }, "3 O in first row!");

    assert.deepEqual(checkBoard([
        [0, 0, 1],
        [1, 1, 1],
        [0, 1, 0]
    ], 3), {
        "gameover": true,
        "winner": 1
    }, "3 X in second row!");

    assert.deepEqual(checkBoard([
        [1, 0, 1],
        [0, 1, 0],
        [0, 0, 0]
    ], 3), {
        "gameover": true,
        "winner": 0
    }, "3 O in last row!");
//Columns
    assert.deepEqual(checkBoard([
        [1, 0, 0],
        [1, 0, 1],
        [1, 1, 0]
    ], 3), {
        "gameover": true,
        "winner": 1
    }, "3 X in first column!");

    assert.deepEqual(checkBoard([
        [0, 1, 0],
        [0, 1, 1],
        [0, 0, 1]
    ], 3), {
        "gameover": true,
        "winner": 0
    }, "3 O in first column!");

    assert.deepEqual(checkBoard([
        [0, 1, 0],
        [0, 1, 1],
        [1, 1, 0]
    ], 3), {
        "gameover": true,
        "winner": 1
    }, "3 X in second column!");

    assert.deepEqual(checkBoard([
        [1, 0, 0],
        [0, 1, 0],
        [1, 1, 0]
    ], 3), {
        "gameover": true,
        "winner": 0
    }, "3 O in last column!");


    assert.deepEqual(checkBoard([
        [1, 0, 0],
        [0, 1, 0],
        [1, 0, 1]
    ], 3), {
        "gameover": true,
        "winner": 1
    }, "3 x in left someone!");

    assert.deepEqual(checkBoard([
        [1, 0, 0],
        [1, 0, 0],
        [0, 1, 1]
    ], 3), {
        "gameover": true,
        "winner": 0
    }, "3 o in right someone!");


    //5x5
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
QUnit.test("tic-toe", function(assert) {

    assert.deepEqual(checkBoard([
        [1, 0, 1],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined]
    ], 3), {
        "gameover": false
    }, "Only first row");

    assert.deepEqual(checkBoard([
        [1, 0, 1],
        [0, 0, 1],
        [1, 1, 0]
    ], 3), {
        "gameover": true
    }, "Noone won. Game over");
});
