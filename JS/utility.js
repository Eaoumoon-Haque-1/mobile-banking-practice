console.log("utility")
function getValueFromInputField(id){
    newVal=parseFloat(document.getElementById(id).value)
    return newVal
}

function getValueFromTextSec(id){
    newVal=parseFloat(document.getElementById(id).innerText)
    return newVal
}

function showThisSection(id){

    console.log("Inside show func")

    document.getElementById('add-money-form').classList.add('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
    document.getElementById('tr-history').classList.add('hidden')
    
    
    document.getElementById(id).classList.remove('hidden')
}