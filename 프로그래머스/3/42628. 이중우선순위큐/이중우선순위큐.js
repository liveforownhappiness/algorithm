function solution(operations) {
    var answer = [];
    
    
    const item = (que)=>{
        if(que.split(' ')[0] === 'I'){
            answer.push(Number(que.split(' ')[1]))
            answer.sort(function(a,b){
                return b - a;
            })
        }
         if(que.split(' ')[0] === 'D'){
             if(que.split(' ')[1] === '1'){//최대수 제거
                 if(answer.length > 0){
                     answer.shift();
                 }else{
                     answer = []
                 }
                 
             }else{//최소수 제거
                   if(answer.length > 0){
                       answer.pop();  
                 }else{
                     answer = []
                 }
                 
             }
        }
    }
    
    operations.map((i)=>item(i))
    
    if(answer.length < 1) return [0,0]
    if(answer.length == 1) return [answer[0],answer[0]]
    return [answer[0], answer[answer.length - 1]];
}