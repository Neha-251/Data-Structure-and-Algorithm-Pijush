const spiralTraversal=(arr,N)=>{  
    let count=0
    let size=N*N
    let top=0
    let bottom=N-1
    let left=0
    let right=N-1
    let bag=""
    while(count<size)
    {
        for(let i=top;i<=bottom && count<size;i++)
        {
            bag+=arr[i][left]+" "
            count++
        }
        left++
        for(let i=left;i<=right && count<size;i++)
        {
            bag+=arr[bottom][i]+" "
            count++
        }
        bottom--
        for(let i=bottom;i>=top && count<size;i--)
        {
            bag+=arr[i][right]+" "
            count++
        }
        right--
         for(let i=right;i>=left && count<size;i--)
        {
            bag+=arr[top][i]+" "
            count++
        }
        top++
    }
    console.log(bag)
   

}

spiralTraversal([[1,2,3],[4,5,6],[7,8,9]],3)