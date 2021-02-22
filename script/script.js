// Credit Card Number Hiding
function cardHide() {
    let cardNum = document.getElementById("cardNum").value;
    let cardNumLength = cardNum.length;
    let fourCharacters = cardNum.slice(10,14);
    
    if (cardNumLength != 14) {
        document.getElementById("cardError").innerHTML = "Your Card Number Must Be of 14 Characters"
        }  

    else{
        document.getElementById("cardError").innerHTML = `Your Card Number is **********${fourCharacters}`;
    }
}
// Counting Potatoes
function countPotatoes() {
    let numPotato = 0;
    let potatoes = document.getElementById("potato").value;
    // alert(potatoes);
    if (potatoes == "") {
        document.getElementById("potatoresult").innerHTML = "Please Enter a String";
        }
        else{
            numPotato = (potatoes.match(/potato/g) || []).length;
            document.getElementById("potatoresult").innerHTML = `The Number of potatoes You Entered are = ${numPotato}`;
        }
    }
// Repeating Characters
function charaterRepeat() {
    let output = "";
    let characters = document.getElementById("charRepeat").value;
    if (characters == "") {
        document.getElementById("charResult").innerHTML = "Please Enter a String"
    }
    else{
        for (let index = 0; index < characters.length; index++) {
            output = output + (characters[index]+characters[index]);
            document.getElementById("charResult").innerHTML = output.toUpperCase();
        }
    }
}
// Salary Calculator
function grossSalary() {
    let basicSalary = parseInt(document.getElementById("salary").value);
    let grossSalary = 0;
    let DA = 0 ;
    let HRA = 0;
    if (basicSalary <= 10000) {
        HRA = basicSalary - ((basicSalary/100)*20);
        DA = basicSalary - ((basicSalary/100)*80);
        grossSalary = basicSalary + HRA + DA;
        document.getElementById("salaryResult").innerHTML = `Your Gross Salary is ${grossSalary}`;
    }
    else if (basicSalary <= 20000){
        HRA = basicSalary - ((basicSalary/100)*25);
        DA = basicSalary - ((basicSalary/100)*90);
        grossSalary = basicSalary + HRA + DA;
        document.getElementById("salaryResult").innerHTML = `Your Gross Salary is ${grossSalary}`;
    }
    else if (basicSalary > 20000) {
        HRA = basicSalary - ((basicSalary/100)*30);
        DA = basicSalary - ((basicSalary/100)*95);
        grossSalary = basicSalary + HRA + DA;
        document.getElementById("salaryResult").innerHTML = `Your Gross Salary is ${grossSalary}`;
         }
    }
    // Electricity Bill Calculator
    function billCalculator() {
        let unit = parseInt(document.getElementById("bill").value);
        let bill;
        let result;
        let surcharge;
        if (unit <= 100 || unit < 160) {
            bill = unit*0.50;
            surcharge = (bill/100)*20;
            result = bill + surcharge;
            // console.log(result);
            document.getElementById("billResult").innerHTML = `Your Consumed Units = ${unit} <br> Basic Bill = ${bill} <br> Surcharge = ${surcharge} <br> Total Bill = ${result}`;
        }
        else if (unit > 159 && unit <= 250) {
            let u1 = (unit/100)*25;
            let u2 = (unit/100)*35;
            let u3 = (unit/100)*40;
            u1 = u1*0.50;
            u2 = u2*0.75;
            u3 = u3*1.20;
            bill = u1+u2+u3;
            surcharge = (bill/100)*20;
            result = bill + surcharge;
            document.getElementById("billResult").innerHTML = `Your Consumed Units = ${unit} <br> Basic Bill = ${bill} <br> Surcharge = ${surcharge} <br> Total Bill = ${result}`;
        }
        else{
            bill = unit*1.50
            surcharge = (bill/100)*20;
            result = bill + surcharge;
            document.getElementById("billResult").innerHTML = `Your Consumed Units = ${unit} <br> Basic Bill = ${bill} <br> Surcharge = ${surcharge} <br> Total Bill = ${result}`;
        }
    }
    // Finding Sum of Multiples of 3 or 5
    function findMultiples() {
        let num = parseInt(document.getElementById("multiple").value) ;
        let sum = 0;
        // console.log(num);
        if (num ===3) {
            for (let index = 1; index < 1000; index++) {
                if (index % 3 == 0) {
                    sum = sum+index;  
                }
                document.getElementById("multipleResult").innerHTML = `The Sum of Multiples of 3 Less than 1000 = ${sum} `;
            }
         }
         else if (num === 5) {
            for (let index = 1; index < 1000; index++) {
                if (index % 5 == 0) {
                    sum = sum+index;  
                }
                document.getElementById("multipleResult").innerHTML = `The Sum of Multiples of 5 Less than 1000 = ${sum} `;
            }
        }
        else{
            document.getElementById("multipleResult").innerHTML = "Please Enter 3 or 5";
        }
    }
    