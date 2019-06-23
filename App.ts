// imports 
import {Perceptron} from "./Perceptron";

// custom class helping with operations
import { NumTS } from "./NumTS";

//global objects
let perceptron:Perceptron = new Perceptron();
let numts:NumTS = new NumTS

// Learning Rate
let learningRate:number = 10 

// Steps can be 100000
let epoch:number = 10000; 

// This is the input to train the model
let trainingData:number[][] = ([[0,0,1,0],
                                [1,1,1,0],
                                [1,0,1,1],
                                [0,1,1,1],
                                [0,1,0,1],
                                [1,1,1,1],
                                [0,0,0,0]]);
                

// First Value of Input = output
// Annonation for data
let groundTruth:number[][] = [[0],
                              [1],
                              [1],
                              [0],
                              [0],
                              [1],
                              [0]];


let testingData:number[][] = [[0,1,1,0],
                               [0,0,0,1],
                               [0,1,0,0],
                               [1,0,0,1],
                               [1,0,0,0],
                               [1,1,0,0],
                              [1,0,1,0]];

//start neural network
perceptron.init();
console.log("==================== IMPUT DATA ============");
numts.show(trainingData);
console.log("==================== OUTPUT DATA ============");
numts.show(groundTruth);
console.log("==================== STARTING TRAINING ============");
perceptron.train(trainingData, groundTruth, epoch, learningRate);
console.log("==================== STARTING TESTING ============");

let result:any = perceptron.test(testingData);
console.log("The accuracy of the model is: " + numts.accuracy(testingData, result)+" %");
