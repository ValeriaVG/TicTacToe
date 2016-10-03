var turn = 0;
var gameover = false;
var symbols = ["O", "X"];
$(document).ready(function() {
    generateGrid();
    if (Math.random() >= 0.5) {
        turn = 1;
    }
    changeTurn();
});

function changeTurn() {

    if (turn == 0) {
        turn = 1;
    } else {
        turn = 0;
    }
    $("#turn").html(symbols[turn]);
}

function generateGrid() {
    $("#board").html("");
    $("#result").html("");
    turn = 0;
    gameover = false;
    var size = $("#size").val();
    $("#board").width(58 * size);
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            $("#board").append('<div id="' + i + "_" + j + '"></div>');
        }
    }
    $("#board>div").click(function() {
        if (!gameover) {
            $(this).html(symbols[turn]);
            var matrix = getMatrix();
            var response = checkBoard(matrix, $("#size").val());
            gameover = response.gameover;
            if (gameover) {
                if (response.winner === undefined) {
                    $("#result").html("Tic-Toe! Try again!");
                } else {
                    $("#result").html("Congratulations, <strong>" + symbols[response.winner] + "</strong> wins!");
                }
            }
            console.log(response);
            changeTurn();
        }
    });
}

function getMatrix() {
    var matrix = [];
    $("#board>div").each(function() {
        var ij = $(this).attr("id").split("_");
        var i = ij[0] * 1;
        var j = ij[1] * 1;
        var s;
        if ($(this).text() == symbols[0]) {
            s = 0;
        }
        if ($(this).text() == symbols[1]) {
            s = 1;
        }
        if (matrix[i] === undefined) {
            matrix[i] = [];
        }
        matrix[i][j] = s;

    });
    return matrix;
}
