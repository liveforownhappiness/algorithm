function solution(s) {
    const numberArray = s.split(' ');
    
 

    numberArray.sort(function(a, b){return a - b})
    
    return numberArray[0] + " "+numberArray[numberArray.length -1] ;
}