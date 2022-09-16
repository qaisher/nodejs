const n = 3;
var tempResult = [];
for (let i = n; i > 0; i--) {

    for (let j = n; j>0; j--) {
        
        for (let k = i; k > 0; k--) {
            tempResult.push(j);
        
        }
  
    }
    console.log(...tempResult);
    tempResult = [];
    
}