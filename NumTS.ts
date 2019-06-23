export class NumTS {

    public multiplier2d_1d( m1:number[][], m2:number[] ):number[][] {
	    let r1:number = m1.length, c1:number = m1[0].length
	    let r2:number = m2.length;
	    let m3:number[][] = []; 

	    //Matrix multiplication logic
        for(let i:number=0; i<r1; i++) {
		    for(let j:number=0; j<c1; j++) {
			    m3[i][j] += m1[i][j]* m2[j]
		    }
	    }
	    return m3
   }   

    //A function that multiplies 2 matrices
    public multiplier( m1:number[][], m2:number[][] ):number[][] {
	    let r1:number = m1.length, c1:number = m1[0].length
	    let r2:number = m2.length, c2:number = m2[0].length
	    let m3:number[][] = [] 

	//Matrix multiplication logic
	for(let i:number=0; i<r1; i++) {
		let tempArr:number[] = []
		for(let j:number=0; j<c2; j++) {
			let tempVal:number = 0;
			for(let k:number=0; k<c1; k++) {
				tempVal += m1[i][k]*m2[k][j]
			}
			tempArr.splice(tempArr.length, 0, tempVal)
		}
		m3.splice(m3.length, 0, tempArr)
	}
	return m3
	}
	
	///chnage name for this after 1D to 2D
	public arrMultiplier( m1:number[], m2:number[][] ) {
	    let r1:number = m1.length, c1:number = m1.length
		//Matrix multiplication logic
		
		let val:number = 0;
		for(let i:number=0; i<r1; i++) {
			val = val + m1[i] * m2[i][0];
		}
		let tab:any = [[val]];
		return tab;
    }


    public myAverage (matrix:any, length:number){
        let result:any = [0,0,0,0];

        for (let i:number=0; i<7; i++){
            for (let z:number=0; z<4; z++){
               result[z] += matrix[i][z]; 
            }
        }
        //this.showArr(result, "result: ");
        return result;
    }

    //A function that shows the content of matrix
    public show(m:number[][]) {
	    let row:number = m.length;
	    let column:number = m[0].length;

	    for(let indexR:number=0; indexR < row; indexR++) {
		    let s:string = "";
		    for(let indexC=0; indexC < column; indexC++) {
			    s += m[indexR][indexC] + "\t";
		    }
		    console.log(s + "\n");
	    }
    } 

     //A function that shows the content of matrix
     public showArr(m:number[], msg:string) {
	    let row:number = m.length;
	    let s:string = "";
	    for(let indexR:number=0; indexR < row; indexR++) {
		    
		    s += m[indexR] + "\t"
        }
        console.log(msg+s)
	} 
	
	public matrixAvg(x:number[][]){
		let row:number = x.length;
		let column:number = x[0].length;
		let tab:number[] = [0,0,0,0];
		for(let i:number=0; i < row; i++) {
		    
		    for(let indexC:number=0; indexC < column; indexC++) {
			   tab[i] = tab[i] + x[i][indexC];
			}
			tab[i] = tab[i] / x[0].length;
		}
		return tab;
	}
	public multiplyLearningRate(tab:number[], lr:number){

		let column:number = tab.length;
		    
		for(let indexC:number=0; indexC < column; indexC++) {
			   tab[indexC] = tab[indexC] * lr;
		}
		
		return tab;
	}
	public updateWeights(tab:number[][], tab2:number[]){
		let column:number = 4;//7tab.length;
		    
		for(let indexC:number=0; indexC < column; indexC++) {
			   let temp:number = 0; 
			   temp = tab[indexC][0] - tab2[indexC];
			   tab[indexC][0] = Number(temp.toFixed(4));
		}
		return tab;
	}

	public accuracy (testingData:number[][], prediction:number[]){
		let x:number = 0;
		for(let i:number=0;i<testingData.length;i++){
			if(testingData[i][0] == prediction[i]){
				x++;
			}
		}
		let acc:number = (x/testingData.length) * 100;
		return acc.toFixed(4);
	}
}