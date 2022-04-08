function fibonacci_series(n){

    if(n===0)
     return 0

    if(n===1 || n===2)

    return 1

    else
    return fibonacci_series(n-1)+fibonacci_series(n-2)

}

n=5
let bag=""

for(let i = 0; i < n; i++)
{
bag+=(fibonacci_series(i))+" ";
}
console.log("fibbonacci Series is"+" "+bag)