function fibonacci_number(n){
if(n==0)
return 0

if(n==1 || n==2)
return 1

return fibonacci_number(n-1) +fibonacci_number(n-2)

}

console.log(fibonacci_number(9))