"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumTS_1 = require("./NumTS");
var Perceptron = /** @class */ (function () {
    function Perceptron() {
        this.numts = new NumTS_1.NumTS();
        this.syn_weights = new Array();
        this.init();
    }
    Perceptron.prototype.init = function () {
        this.syn_weights = [[0], [0], [0], [0]];
        for (var i = 0; i < 4; i++) {
            this.syn_weights[i][0] = Number((Math.random()).toFixed(4));
        }
    };
    Perceptron.prototype.sigmoid = function (x, col, row) {
        for (var i = 0; i < col; i++) {
            x[i][row] = (1 / (1 + Math.exp(-x[i][row])));
        }
        return x;
    };
    Perceptron.prototype.sigmoid_deriv = function (x) {
        return Math.exp(-x) / Math.pow(((1 + Math.exp(-x))), 2);
    };
    Perceptron.prototype.train = function (inputs, real_outputs, its, lr) {
        // declare array with preset with 7 zeros. not usig .fill here to keep things simple.
        var delta_weights = [[0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]];
        console.log("initial weights: " + this.syn_weights);
        for (var epoch = 0; epoch < its; epoch++) {
            // forward pass
            var z = this.numts.multiplier(inputs, this.syn_weights);
            var activation = this.sigmoid(z, 7, 0);
            // back pass
            for (var i = 0; i < 7; i++) {
                var cost = Math.pow((activation[i][0] - real_outputs[i][0]), 2);
                var cost_prime = 2 * (activation[i][0] - real_outputs[i][0]);
                for (var n = 0; n < 4; n++) {
                    delta_weights[n][i] = cost_prime * inputs[i][n] * this.sigmoid_deriv(z[i]);
                }
            }
            var test = this.numts.matrixAvg(delta_weights);
            test = this.numts.multiplyLearningRate(test, lr = 10);
            this.syn_weights = this.numts.updateWeights(this.syn_weights, test);
            console.log("epoch: " + epoch + " weights: " + this.syn_weights);
        }
    };
    Perceptron.prototype.test = function (testing_data) {
        var column = testing_data.length;
        var resultsPredition = Array();
        for (var indexC = 0; indexC < testing_data.length; indexC++) {
            var run = testing_data[indexC];
            var trial = this.results(run);
            var roundedNumber = Math.round(trial);
            console.log("testing data: " + run + "  ====> prediction: " + roundedNumber);
            resultsPredition.push(roundedNumber);
        }
        return resultsPredition;
    };
    Perceptron.prototype.results = function (inputs) {
        var multiplier = this.numts.arrMultiplier(inputs, this.syn_weights);
        var test = this.sigmoid(multiplier, 1, 0);
        return test;
    };
    return Perceptron;
}());
exports.Perceptron = Perceptron;
//# sourceMappingURL=Perceptron.js.map