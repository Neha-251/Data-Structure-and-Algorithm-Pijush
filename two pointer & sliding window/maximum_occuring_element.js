const maximmumOccuringElements = (arr,n) =>{
        arr.sort();
        console.log(arr)
           
        let max_count = 1, res = arr[0];
        let curr_count = 1;
           
        for (let i = 1; i < n; i++)
        {
            if (arr[i] == arr[i - 1])
                curr_count++;
            else
                curr_count = 1;
            
            if (curr_count > max_count)
            {
                max_count = curr_count;
                res = arr[i - 1];
            }
 
        }
         
        return res;

}
console.log(maximmumOccuringElements([0,2,0,6,9],5))
