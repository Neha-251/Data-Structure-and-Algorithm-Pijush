/* 
Sandhya is running up a staircase with N steps, and can hop(jump)
 either 1 step, 2 steps or 3 steps at a time. You have to count, how many possible
  ways Sandhya can run up to the stairs.
*/

function no_of_ways(n){
    if(n==0)
    return 1

    if(n<1){
        return 0
    }

    return no_of_ways(n-1)+no_of_ways(n-2)+no_of_ways(n-3)
}

console.log(no_of_ways(4))