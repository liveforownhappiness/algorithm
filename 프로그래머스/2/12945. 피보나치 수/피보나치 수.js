function solution(n) {
   let arr = [0,1];
    // 재귀함수는 호출의 깊이가 제한적이다.
    // const fib = (n) =>{
    //     if(arr[n]!==undefined){
    //         return arr[n]
    //     }
    //     arr[n] = fib(n-2)% 1234567 + fib(n-1)% 1234567;
    //     return arr[n] % 1234567;
    // }
    // return fib(n) % 1234567;
    for(i = 2; i <= n; ++i){
        arr.push((arr[i-2] + arr[i-1]) % 1234567);
    }
    return arr[n];
}