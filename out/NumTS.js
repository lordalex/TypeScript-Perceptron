"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumTS = /** @class */ (function () {
    function NumTS() {
    }
    NumTS.prototype.multiplier2d_1d = function (m1, m2) {
        var r1 = m1.length, c1 = m1[0].length;
        var r2 = m2.length;
        var m3 = [];
        //Matrix multiplication logic
        for (var i = 0; i < r1; i++) {
            for (var j = 0; j < c1; j++) {
                m3[i][j] += m1[i][j] * m2[j];
            }
        }
        return m3;
    };
    //A function that multiplies 2 matrices
    NumTS.prototype.multiplier = function (m1, m2) {
        var r1 = m1.length, c1 = m1[0].length;
        var r2 = m2.length, c2 = m2[0].length;
        var m3 = [];
        //Matrix multiplication logic
        for (var i = 0; i < r1; i++) {
            var tempArr = [];
            for (var j = 0; j < c2; j++) {
                var tempVal = 0;
                for (var k = 0; k < c1; k++) {
                    tempVal += m1[i][k] * m2[k][j];
                }
                tempArr.splice(tempArr.length, 0, tempVal);
            }
            m3.splice(m3.length, 0, tempArr);
        }
        return m3;
    };
    ///chnage name for this after 1D to 2D
    NumTS.prototype.arrMultiplier = function (m1, m2) {
        var r1 = m1.length, c1 = m1.length;
        //Matrix multiplication logic
        var val = 0;
        for (var i = 0; i < r1; i++) {
            val = val + m1[i] * m2[i][0];
        }
        var tab = [[val]];
        return tab;
    };
    NumTS.prototype.myAverage = function (matrix, length) {
        var result = [0, 0, 0, 0];
        for (var i = 0; i < 7; i++) {
            for (var z = 0; z < 4; z++) {
                result[z] += matrix[i][z];
            }
        }
        //this.showArr(result, "result: ");
        return result;
    };
    //A function that shows the content of matrix
    NumTS.prototype.show = function (m) {
        var row = m.length;
        var column = m[0].length;
        for (var indexR = 0; indexR < row; indexR++) {
            var s = "";
            for (var indexC = 0; indexC < column; indexC++) {
                s += m[indexR][indexC] + "\t";
            }
            console.log(s + "\n");
        }
    };
    //A function that shows the content of matrix
    NumTS.prototype.showArr = function (m, msg) {
        var row = m.length;
        var s = "";
        for (var indexR = 0; indexR < row; indexR++) {
            s += m[indexR] + "\t";
        }
        console.log(msg + s);
    };
    NumTS.prototype.matrixAvg = function (x) {
        var row = x.length;
        var column = x[0].length;
        var tab = [0, 0, 0, 0];
        for (var i = 0; i < row; i++) {
            for (var indexC = 0; indexC < column; indexC++) {
                tab[i] = tab[i] + x[i][indexC];
            }
            tab[i] = tab[i] / x[0].length;
        }
        return tab;
    };
    NumTS.prototype.multiplyLearningRate = function (tab, lr) {
        var column = tab.length;
        for (var indexC = 0; indexC < column; indexC++) {
            tab[indexC] = tab[indexC] * lr;
        }
        return tab;
    };
    NumTS.prototype.updateWeights = function (tab, tab2) {
        var column = 4; //7tab.length;
        for (var indexC = 0; indexC < column; indexC++) {
            var temp = 0;
            temp = tab[indexC][0] - tab2[indexC];
            tab[indexC][0] = Number(temp.toFixed(4));
        }
        return tab;
    };
    NumTS.prototype.accuracy = function (testingData, prediction) {
        var x = 0;
        for (var i = 0; i < testingData.length; i++) {
            if (testingData[i][0] == prediction[i]) {
                x++;
            }
        }
        var acc = (x / testingData.length) * 100;
        return acc.toFixed(4);
    };
    return NumTS;
}());
exports.NumTS = NumTS;
//# sourceMappingURL=NumTS.js.map