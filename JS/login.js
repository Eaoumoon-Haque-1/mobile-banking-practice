document.getElementById('btn-login').addEventListener('click',function(){
    //console.log("Login Button Clicked")
    const phoneNmb= document.getElementById('phone-nmb').value
    const pinNmb= document.getElementById('pin-nmb').value
   if(phoneNmb==='01725' && pinNmb==='1234')
   {
        window.location.href = '/home.html'
   }
   else{
    alert('Wrong number and pin')
   }
})