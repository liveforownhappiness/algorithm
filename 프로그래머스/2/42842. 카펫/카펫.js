function solution(brown, yellow) {
    const num = brown+yellow;
    const divisors = [];
    for(let i = 1 ; i <= num/2 ; i++){
        if(num % i === 0) divisors.push(i);
    }
    const allDivisor = [...divisors, num];
    console.log(allDivisor);
    let answer;
    for(let j = 0; j < allDivisor.length ; j++){
        if(2 * (allDivisor[j] + num / allDivisor[j] - 2)  === brown){
            answer =  [num/ allDivisor[j], allDivisor[j]]
            j = allDivisor.length
        }
    }
    return answer;
}