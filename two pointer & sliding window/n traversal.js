let bag=""
function nTraversal(matrix) {
    let bag=""
    for (let i=matrix.length-1; i>=0;i--)
    {
         for (let j=0;j<1;j++)
         {
             bag+=matrix[i][j]+" "
         }
         
         
    }
    
    for (let i=1;i<matrix.length;i++)
{
    for (let j=0;j<matrix[i].length;j++)
    {
        if(i-j===0)
        {
            bag+=matrix[i][j]+" "
        }
        
        
    }
}
 for (let i=matrix.length-2;i>=0;i--)
 {
     for(let j=matrix[i].length-1;j>matrix[i].length-2;j--)
     {
         bag+=matrix[i][j]+" "
     }
 }
    
    console.log(bag)
}
