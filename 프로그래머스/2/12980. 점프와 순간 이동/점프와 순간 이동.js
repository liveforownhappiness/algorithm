function solution(n)
{
    const d = n.toString(2)
    return d.split('1').length - 1;
}