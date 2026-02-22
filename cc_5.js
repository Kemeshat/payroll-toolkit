//Step 2: Employee Data
const employees = [
    { name: "Jane Doe", hourlyRate: 19, hoursWorked: 40 },
    { name: "Bob Weller", hourlyRate: 30, hoursWorked: 35 },
    { name: "Charlie Smith", hourlyRate: 15, hoursWorked: 45 },
    { name: "Taylor Swift", hourlyRate: 20, hoursWorked: 50 },
    { name: "Alice Johnson", hourlyRate: 25, hoursWorked: 40 }
];
console.log(employees);

//Step 3: Calculate Base pay
function calculateBasePay(rate, hours) {
    const regularHours = Math.min(hours, 40);
    return rate * regularHours;         
}

//Step 4: Calculate Overtime Pay
function calculateOvertimePay(rate, hours) {
    if (hours > 40) {
        const overtimeHours = hours - 40;
        return rate * overtimeHours * 1.5;
    }
    return 0;
}
//Step 5: Calculate taxes
function calculateTaxes(grossPay) {
    return grossPay * 0.15;
}
 console.log("Taxes: $", calculateTaxes(1000).toFixed(2));


