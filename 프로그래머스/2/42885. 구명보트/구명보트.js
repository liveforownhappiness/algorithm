function solution(people, limit) {
     var answer =0;
    people.sort ((a,b) => b-a)  
    for (var i=0, j= people.length - 1; i <=j ; i++ ) {
        if (people[i] + people [j] <= limit )
            j--
        answer ++
    }
    return answer;
//     let _sort = people.sort(function(a,b){return b-a})
//     let index = 0;
//     let answer = 0
//     while(index <= _sort.length -1){
//         if(index !==_sort.length -1 &&((_sort[index] + _sort[index + 1]) <= limit)){
//             index += 2
            
//         }else{
//             index ++
//         }
//         answer ++
//     }
//     return answer;
}
