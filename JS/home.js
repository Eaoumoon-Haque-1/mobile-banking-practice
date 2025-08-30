// Add Money Feature
document.getElementById('add-money-btn').addEventListener('click',(e)=>{
    e.preventDefault()
    amount=getValueFromInputField('amount-id')
    pin= getValueFromInputField('pin-id')
    bal=getValueFromTextSec('current-amount')
    if(pin === 1234)
    {
        newBal=bal+amount
        document.getElementById('current-amount').innerText=newBal

        // Adding to transaction History

        const p= document.createElement('p')
        p.innerText=`${amount} Tk. Added             New Balance: ${newBal}`

        document.getElementById('tr-history').appendChild(p)
    }
    else{
        alert('Failed')
    }
})

// CAsh Out feature

document.getElementById('cash-out-btn').addEventListener('click',(e)=>{
    e.preventDefault()
    const amount=getValueFromInputField('cash-out-id')
    const pin= getValueFromInputField('cash-out-pin')
    const bal=getValueFromTextSec('current-amount')
    if(pin === 1234)
    {
        newBal=bal-amount
        document.getElementById('current-amount').innerText=newBal

        // Adding to transaction History

        const p= document.createElement('p')
        p.innerText= `${amount} Tk. Cashed Out             New Balance: ${newBal}`

        document.getElementById('tr-history').appendChild(p)
    }
    else{
        alert('Failed')
    }
})