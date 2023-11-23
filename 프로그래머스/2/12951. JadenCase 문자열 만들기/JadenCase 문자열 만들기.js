function solution(s) {
    const stringArray = s.split('');
    let before = ' ';
    const modifyArray = stringArray.map((i)=>{
        if(before === ' '){
            before = i
            return i.toUpperCase();
        }else{
            before = i;
            return i.toLowerCase();
        }
    })
    
    return modifyArray.join("");
}