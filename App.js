"use strict";
exports.__esModule = true;
// imports 
var Perceptron_1 = require("./Perceptron");
// custom class helping with operations
var NumTS_1 = require("./NumTS");
//global objects
var perceptron = new Perceptron_1.Perceptron();
var numts = new NumTS_1.NumTS;
// Learning Rate
var lr = 10;
// Steps can be 100000
var epoch = 2;
// This is the input to train the model
var inputTrainingData = ([[0, 0, 1, 0],
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
var testing_data = [[0, 1, 1, 0],
    [0, 0, 0, 1],
    [0, 1, 0, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 0],
    [1, 1, 0, 0],
    [1, 0, 1, 0]];
//start neural network
perceptron.init();
console.log("==================== IMPUT DATA ============");
numts.show(inputTrainingData);
console.log("==================== OUTPUT DATA ============");
numts.show(groundTruth);
console.log("==================== STARTING TRAINING ============");
perceptron.train(inputTrainingData, groundTruth, epoch, lr);
console.log("==================== STARTING TESTING ============");
var result = perceptron.test(testing_data);
console.log("The accuracy of the model is: " + numts.accuracy(testing_data, result) + " %");
