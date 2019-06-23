import { NumTS } from "./NumTS";
export class Perceptron {

    numts: NumTS = new NumTS();
    public syn_weights: number[][] = new Array();

    constructor() {
        this.init();
    }

    public init() {
        this.syn_weights = [[0], [0], [0], [0]];
        for (var i = 0; i < 4; i++) {
            this.syn_weights[i][0] = Number((Math.random()).toFixed(4));
        }
    }

    private sigmoid(x: any, col: any, row: any) {
        for (var i = 0; i < col; i++) {
            x[i][row] = (1 / (1 + Math.exp(-x[i][row])));
        }
        return x;
    }

    private sigmoid_deriv(x: any) {
        return Math.exp(-x) / Math.pow(((1 + Math.exp(-x))), 2);
    }


    public train(inputs: any, real_outputs: any, its: any, lr: any) {

        // declare array with preset with 7 zeros. not usig .fill here to keep things simple.

        let delta_weights: number[][] = [[0, 0, 0, 0, 0, 0, 0],
                                        [0, 0, 0, 0, 0, 0, 0],
                                        [0, 0, 0, 0, 0, 0, 0],
                                        [0, 0, 0, 0, 0, 0, 0]];

        console.log("initial weights: " + this.syn_weights);

        for (let epoch = 0; epoch < its; epoch++) {
            // forward pass
            let z: any = this.numts.multiplier(inputs, this.syn_weights);

            let activation: any = this.sigmoid(z, 7, 0);

            // back pass
            for (let i = 0; i < 7; i++) {
                let cost: any = Math.pow((activation[i][0] - real_outputs[i][0]), 2);
                let cost_prime: any = 2 * (activation[i][0] - real_outputs[i][0]);


                for (let n = 0; n < 4; n++) {
                    delta_weights[n][i] = cost_prime * inputs[i][n] * this.sigmoid_deriv(z[i]);
                }

            }
            let test = this.numts.matrixAvg(delta_weights);
            test = this.numts.multiplyLearningRate(test, lr = 10);
            this.syn_weights = this.numts.updateWeights(this.syn_weights, test);
            console.log("epoch: " + epoch + " weights: " + this.syn_weights);
        }
    }

    public test(testing_data: number[][]) {
        let column: number = testing_data.length;
        let resultsPredition: any = Array();
        for (let indexC: number = 0; indexC < testing_data.length; indexC++) {

            let run = testing_data[indexC];

            let trial = this.results(run);

            let roundedNumber: number = Math.round(trial);

            console.log("testing data: " + run + "  ====> prediction: " + roundedNumber);
            resultsPredition.push(roundedNumber);
        }
        return resultsPredition;
    }

    public results(inputs: any) {

        let multiplier = this.numts.arrMultiplier(inputs, this.syn_weights);

        let test = this.sigmoid(multiplier, 1, 0);

        return test;
    }
}