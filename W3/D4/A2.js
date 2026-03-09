// Assignment-2 | Payroll cleanup and net pay report

let payroll = [
    {name: "Thilak", basepay:40000, bonus:3000, taxRate:0.3},
    {name: "Rohith", basepay:60000, bonus:4000, taxRate:0.4},
    {name: "Viushnu", basepay:-35000, bonus:3500, taxRate:0.5},
    {name: "Jeevan", basepay:50000, bonus:5000, taxRate:0.3}
];

let validRecords = payroll.filter(employee => employee.basepay > 0 && employee.bonus >= 0 && employee.taxRate>=0 && employee.taxRate<=1);

let netPayReport = validRecords.map(employee =>{
    let gross = employee.basepay+employee.bonus;
    let netPay = gross-(gross*employee.taxRate);
    return {name:employee.name, netPay:netPay}
});

let totalNetPayout = netPayReport.reduce((total,employee)=>{
    return total+employee.netPay;
},0);

console.log("Valid Record is:",validRecords);
console.log("Net Pay Report is:",netPayReport);
console.log("Total Net Payout is:",totalNetPayout);


