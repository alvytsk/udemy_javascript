let numsOfBills = prompt('Enter numbers of bils');

let bills = [];
let tips= [];
let billsAndTips = [];

for (let i = 0; i < numsOfBills; i++) {
    bills[i] = parseInt(prompt('Enter #' + (i+1) + ' bill'));
    console.log(bills[i]);

    if(bills[i] < 50)
        tips[i] = bills[i] * 20/100;
    if((bills[i] >= 50) && (bills[i] < 200)) 
        tips[i] = bills[i] * 15/100;
    if((bills[i] > 200)) 
        tips[i] = bills[i] * 10/100;
    console.log(tips[i]);
    
    billsAndTips[i] = bills[i] + tips[i];
    console.log(billsAndTips[i]);
}

