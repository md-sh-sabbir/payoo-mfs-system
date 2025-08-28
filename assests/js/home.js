const validPin = 1234

// function to get input number values
function getInputValueNumber(id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)

    return inputFieldValueNumber
}

// function to get input values only
function getInputValue(id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value

    return inputFieldValue
}

// function to get inner text in HTML number elements calculte
function getInnerText(id){
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)

    return elementValueNumber
}

// function to set inner text in HTML
function setInnerText(value){
    const availableBalanceElement = document.getElementById('available-balance')
    availableBalanceElement.innerText = value
}

// For Add money operation in Home Page
document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault()
    console.log('add money btn clicked')

    const bank = getInputValue('bank')
    const accountNumber = getInputValue('account-number') 
    const amount = getInputValueNumber('add-amount')
    const pin = getInputValueNumber('add-pin')
    const availableBalance = getInnerText('available-balance')

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

    setInnerText(totalNewAvailableBalance)
})

// For Cash Out operation in Home page
document.getElementById('withdraw-money-btn').addEventListener('click', function(e){
    e.preventDefault()
    console.log('Withdraw button clicked')

    const agentNumber = getInputValue('agent-number')
    const withdrawAmount = getInputValueNumber('withdraw-amount')
    const pin = getInputValueNumber('withdraw-pin')
    const availableBalance = getInnerText('available-balance')

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

    setInnerText(totalNewAvailableBalance)
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
