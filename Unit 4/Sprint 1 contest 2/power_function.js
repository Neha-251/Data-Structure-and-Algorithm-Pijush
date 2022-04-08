//Given two integers x and n, write a function to compute xn. We may assume that x and n are small and overflow doesn’t happen.

function power(base,exponent){
 if(exponent===0){
     return 1
 }

 return base*power(base,exponent-1)


}
/* 
firstly this is callsed => power(2,4)
2*power(2,3)----------------
2*power(2,2)-------------
2*power(2,1)=>2*2=4
2*power(2,0)=> this will be 2*1=2


*/


console.log(power(2,4))

