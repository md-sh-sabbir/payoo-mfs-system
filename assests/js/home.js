const validPin = 1234

// function to get input values
function getInputValueNumber(id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)

    return inputFieldValueNumber
}

// For Add money operation in Home Page
document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault()
    console.log('add money btn clicked')

    const bank = document.getElementById('bank').value 
    const accountNumber = document.getElementById('account-number').value 
    const amount = getInputValueNumber('add-amount')
    const pin = getInputValueNumber('add-pin')
    const availableBalance = parseInt(document.getElementById('available-balance').innerText)

    console.log(availableBalance)

    if(accountNumber.length < 11){
        alert('Please provide valid account number')
        return
    }

    if(pin !== validPin){
        alert('Please provide valid pin number')
        return
    }

    const totalNewAvailableBalance = amount + availableBalance

    document.getElementById('available-balance').innerText = totalNewAvailableBalance
})

// For Cash Out operation in Home page
document.getElementById('withdraw-money-btn').addEventListener('click', function(e){
    e.preventDefault()
    console.log('Withdraw button clicked')

    const agentNumber = document.getElementById('agent-number').value
    const withdrawAmount = getInputValueNumber('withdraw-amount')
    const pin = getInputValueNumber('withdraw-pin')
    const availableBalance = parseInt(document.getElementById('available-balance').innerText)

    console.log(availableBalance)

    if(agentNumber.length < 11){
        alert('Please provide valid agent number')
        return
    }

    if(pin !== validPin){
        alert('Please provide valid pin number')
        return
    }

    const totalNewAvailableBalance = availableBalance - withdrawAmount

    document.getElementById('available-balance').innerText = totalNewAvailableBalance
})

// Page options for Add money & Cash Out
const formAddMoney = document.getElementById('form-add-money')
const formWithdraw = document.getElementById('form-withdraw')

// For Cash Out option
document.getElementById('option-withdraw').addEventListener('click', function(){
    formWithdraw.classList.remove('hidden')
    formAddMoney.classList.add('hidden')

})

// For Add money option
document.getElementById('option-add-money').addEventListener('click', function(){
    formWithdraw.classList.add('hidden')
    formAddMoney.classList.remove('hidden')

})
