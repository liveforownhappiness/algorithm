function solution(A,B){
    A.sort(function(a,b){ return a-b});
    B.sort(function(a,b) {return b-a});
    let sum = 0;
    for(i = 0 ; i < A.length ; i++){
       sum += A[i] * B[i]
        
    }

    return sum;
}