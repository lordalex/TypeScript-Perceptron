"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// imports 
var Perceptron_1 = require("./Perceptron");
// custom class helping with operations
var NumTS_1 = require("./NumTS");
//global objects
var perceptron = new Perceptron_1.Perceptron();
var numts = new NumTS_1.NumTS;
// Learning Rate
var learningRate = 10;
// Steps can be 100000
var epoch = 10000;
// This is the input to train the model
var trainingData = ([[0, 0, 1, 0],
    [1, 1, 1, 0],
    [1, 0, 1, 1],
    [0, 1, 1, 1],
    [0, 1, 0, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 0]]);
// First Value of Input = output
// Annonation for data
var groundTruth = [[0],
    [1],
    [1],
    [0],
    [0],
    [1],
    [0]];
var testingData = [[0, 1, 1, 0],
    [0, 0, 0, 1],
    [0, 1, 0, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 0],
    [1, 1, 0, 0],
    [1, 0, 1, 0]];
//start neural network
perceptron.init();
console.log("==================== IMPUT DATA ============");
numts.show(trainingData);
console.log("==================== OUTPUT DATA ============");
numts.show(groundTruth);
console.log("==================== STARTING TRAINING ============");
perceptron.train(trainingData, groundTruth, epoch, learningRate);
console.log("==================== STARTING TESTING ============");
var result = perceptron.test(testingData);
console.log("The accuracy of the model is: " + numts.accuracy(testingData, result) + " %");
//# sourceMappingURL=App.js.map