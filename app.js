// Login Button Event Handler

const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById('login-area')
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area')
    transactionArea.style.display = 'block'
})

// Deposit Button Event Handler
const depositBtn = document.getElementById('addDeposit')
depositBtn.addEventListener('click', function(){
    const depositNumber = getInputNumber('depositAmount');
    
    updateSpanText("currentDeposit", depositNumber)
    updateSpanText("currentBalance", depositNumber);

    document.getElementById('depositAmount').value = "";
})

// Withdraw Button Event Handler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function(){
const withdrawNumber = getInputNumber('withdrawAmount')
console.log(withdrawNumber);
})

function getInputNumber(id){
    const amount = document.getElementById(id).value
    const amountNumber = parseFloat(amount)
    return amountNumber;
}


function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;

}