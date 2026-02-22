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

//Step 6: Process Payroll
function processPayroll(employee) {
  const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
  const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
  const grossPay = basePay + overtimePay;
  const taxes = calculateTaxes(grossPay);
  const netPay = grossPay - taxes;

  return {
    name: employee.name,
    basePay: `$${basePay.toFixed(2)}`,
    overtimePay: `$${overtimePay.toFixed(2)}`,
    grossPay: `$${grossPay.toFixed(2)}`,
    netPay: `$${netPay.toFixed(2)}`
  };
}

//Step 7: Log Payroll Information
employees.forEach(employee => {
  const payroll = processPayroll(employee);
    console.log(`Payroll for ${payroll.name}:`);
    console.log(payroll);
});
