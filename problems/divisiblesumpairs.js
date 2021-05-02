// *
//  * Complete the 'divisibleSumPairs' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts following parameters:
//  *  1. INTEGER n length of arr
//  *  2. INTEGER k  is number whick we ckeck our 2 elements of arr divsible by it or not
//  *  3. INTEGER_ARRAY ar
//  */

function divisibleSumPairs(n, k, ar) {
    //  code here
    var count = 0; 

for(let i = 0; i< n; i++){
    ar.slice(i+1, n).filter((item)=>{
        if((item + ar[i])%k === 0){
            count++
        }
    })
}

return count;
}
//  onther solution
function divisibleSumPairs(n, k, ar) {
    var count = 0;
    for(var i = 0; i < n; i++) {
        for(var j = (i+1); j < n; j++) {
            if((ar[i] + ar[j]) % k === 0) {
                count++;
            }
        }
    }
    return count;
}