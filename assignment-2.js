
const maxProfit =(prices)=>{
    if(prices.length<0){
        return 0;
    }
    let max = 0;
    let minPrice = prices[0];

    for(let i=1;i<prices.length;i++){
        if(prices[i]<minPrice){
            minPrice = prices[i]
        }
        else{
            let profit = prices[i]-minPrice;
            if(max<profit){
                max = profit
            }
        }
    }
    return max;
}

console.log(maxProfit( [7,1,5,3,6,4]))

// Time Complexity of this problem is: O(n)
// Space Complexity of this problem is: O(1)