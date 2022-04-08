function  Log2n( n)
{
    return (n > 1) ? 1 + Log2n(n / 2) : 0;
}
n = 32;
console.log( Log2n(n));