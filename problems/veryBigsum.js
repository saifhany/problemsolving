// hackerRank
// Complete the aVeryBigSum function below.
/* description:
 I define variable called sum to sum all elements of ar and give him init value 0
 I create for loop operator "es6"
 let i this variable to path in all elements of arr without learn about length of arr
 then and finally return sum of all elements
*/ 
function aVeryBigSum(arr) {
    let sum =0;
    for ( let i in arr)
    sum+=ar[i];
     
 return sum
}
// 
function birthdayCakeCandles(candles) {
    const bigCandle = Math.max(...candles);
    const count = candles.filter(x => x === bigCandle).length;
    return count;
}
// 
function birds(arr){
    let count = arr.filter(x => x===birdsId).length;
}