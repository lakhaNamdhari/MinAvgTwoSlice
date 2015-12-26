// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    
    var minAvg = -1, minI = 0, i, tempAvg;
    
    if ( A.length > 1 ){
        minAvg = (A[0] + A[1]) / 2;
    }
    for ( i = 0; i < A.length - 1; i++ ){
        // checking 2 blocks
        tempAvg = (A[i] + A[i+1]) / 2;        
        if ( tempAvg < minAvg ){
            minAvg = tempAvg;
            minI = i;
        }
        
        // checking 3 blocks
        if ( i < A.length - 2 ){
            tempAvg = (A[i] + A[i+1] + A[i+2]) / 3;        
            if ( tempAvg < minAvg ){
                minAvg = tempAvg;
                minI = i;
            }          
        }   
    }
    
    return minI;
}