
let submit = document.getElementById("submit-btn");
let confirm = document.getElementById("ok-btn");
let popup = document.getElementById("popup");
let message = document.getElementById("message");
let theForm = document.getElementsByClassName("form")

let address = document.getElementById("address");
let cardName = document.getElementById("cardname");
let cardNum = document.getElementById("cardNum");
let cv = document.getElementById("cvc");
let amount = document.getElementById("amount");

let cardPattern = /^[0-9]{16,16}$/;
let namePattern = /^\b(?!.*\.{2})[a-zA-Z.]+(?:\s[a-zA-Z.]+)\b$/;
let addressPattern = /^[A-Za-z\d\.\-\/\#\,\s]+$/;
let cvPattern = /^[0-9]{3,3}$/;




submit.addEventListener("click", checkForm);
confirm.addEventListener("click", closePopup);

function closePopup() {
  popup.classList.remove("open-popup");
  cardName.value = null;
  cardNum.value = null;
  address.value = null;
  cv.value = null;
}

function checkForm(e){
  if(checkCard() == true && checkName() == true && checkPin()== true && checkAddress()== true){
    e.preventDefault()
    popup.classList.add("open-popup");
   
  }
  
}


function checkCard(){
 
  if(!cardPattern.test(cardNum.value)){ 
    alert("Card Number is invalid, Please Enter a valid card number");
    document.getElementById("cardNum").focus();
    return false;
  }
  return true; 
}

function checkName(){
if((cardName.value.length<2)){

  alert("Card Name is invalid, Please Enter a valid card name");
  
  document.getElementById("cardname").focus();
  
  return false;
}
return true;
}


function checkAddress(){ 
  if(!addressPattern.test(address.value)){

  
    alert("Address is invalid, Please Enter a valid address");
    
    document.getElementById("address").focus();
    
    return false;
  }
  return true;
 
 
  }


  function checkPin(){
    if(!cvPattern.test(cv.value)){
    
      alert("Invalid PIN Number");
      
      document.getElementById("cvc").focus();
      
      return false;
    }
    return true;
  
    }
  








