
function checkBoard(brd,size) {

    var leftCrossResult = {
        "count": 0,
        "summ": 0
    };
    var rightCrossResult = {
        "count": 0,
        "summ": 0
    };
    var allFilled = true;
    for (var i = 0; i < size; i++) {
        var rowsResult = {
            "count": 0,
            "summ": 0
        };
        var colsResult = {
            "count": 0,
            "summ": 0
        };

        for (var j = 0; j < size; j++) {
            //Check for rows
            if (brd[i][j] !== undefined) {
                rowsResult.count++;
                rowsResult.summ += brd[i][j];
            } else {
                allFilled = false;
            }
            //Check for columns
            if (brd[j][i] !== undefined) {
                colsResult.count++;
                colsResult.summ += brd[j][i];
            }


        }
        //Check for left cross
        if (brd[i][i] !== undefined) {
            leftCrossResult.count++;
            leftCrossResult.summ += brd[i][i];
        }
        //Check for right cross
        if (brd[i][(size - 1) - i] !== undefined) {
            rightCrossResult.count++;
            rightCrossResult.summ += brd[i][(size - 1) - i];
        }
        var results = [colsResult, rowsResult];
        if (checkResults(results, size)) {
            return checkResults(results, size);
        }

    }
    var results = [leftCrossResult, rightCrossResult];
    if (checkResults(results, size)) {
        return checkResults(results, size);
    }
    return {
        "gameover": allFilled
    };

}

function checkResults(results, size) {
    for (var i = 0; i < results.length; i++) {
        if (checkResult(results[i], size)) {
            return checkResult(results[i], size);
        }

    }

}

function checkResult(result, size) {
    if (result.count == size) {
        if (result.summ == 0) {
            return {
                "gameover": true,
                "winner": 0
            };
        }
        if (result.summ == size) {
            return {
                "gameover": true,
                "winner": 1
            };
        }
    }
    return false;
}
