function solution(s){
    const a= s.match(/\)/g)?.length;
    const b= s.match(/\(/g)?.length;
    if(a !== b) return false;
    const arr = s.split('');
    let sum = 0;
    let answer = true;
    arr.map((i)=>{
        if(i === "("){
            sum += 1
        }else{
            sum -= 1
        }
        if(sum < 0){
            answer = false 
        }
    })
    if(answer && sum === 0) return true
    return false;
}