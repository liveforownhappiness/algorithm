function zero  (_s,array){
    if(_s === '1')return
    const a = _s.split("");
    const b = a.filter((i)=>i !== '0')
    array[0] += 1
    array[1] += (a.length - b.length)
    _s = b.length.toString(2);
    return zero(_s , array)
    }

function solution(s) {
    let _s = s
    let answer = [0,0];
    zero(_s , answer)
    
    return answer;
}