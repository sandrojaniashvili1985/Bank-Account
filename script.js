const myalert = document.getElementById("alert"),
    balance = document.getElementById('balance'),
    inputDep = document.getElementById('deposit'),
    inputWithdraw  = document.getElementById('withdraw'),
    divHistory = document.getElementById('history');

function addDeposit(){
    if(inputDep.value <= 0){
        myalert.innerText = 'Invalid operation'
        inputDep.value = ""
        return
    }
    myalert.innerText = ""
    balance.innerHTML = Number(balance.innerHTML) + + inputDep.value

    // account history
    const par = document.createElement('p')
    const text = document.createTextNode(`Your balance add: ${inputDep.value} $`);
    par.setAttribute("class", "green")
    par.appendChild(text)
    divHistory.appendChild(par)

    inputDep.value = ""

}

function withdraw(){
    if(+balance.innerText < +inputWithdraw.value || +inputWithdraw.value <= 0){
        myalert.innerText = 'you have not enough money.'
        inputWithdraw.value = ""
        return
    }
    myalert.innerText = ""
    balance.innerHTML = Number(balance.innerText) - inputWithdraw.value

    // account history
    const par = document.createElement('p')
    const text = document.createTextNode(`Your balance subtracted: -${inputWithdraw.value} $`);
    par.setAttribute("class", "red")
    par.appendChild(text)
    divHistory.appendChild(par)

    inputWithdraw.value = ""
}