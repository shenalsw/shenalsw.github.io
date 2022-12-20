
let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let gender = document.getElementById("gender");
let email = document.getElementById("email");
let confirmEmail = document.getElementById("cnfrmmail");
let phone = document.getElementById("tel");
const btnloyalty = document.getElementById("loyalty");
let addbut = document.getElementById('add')
let txtorder = document.getElementById("order");
let txtvalue = document.getElementById("ordervalue");
let addfav = document.getElementById("addfav");
let oddfav = document.getElementById("oddfav");

let favobject = {localAdult:0,localChild:0,foreignAdult:0,foreignChild:0}

date.min = new Date().toLocaleDateString('en-ca')
count=0;
addbut.addEventListener('click', costCalculation)


function costCalculation(){

    let localtotal = 0 ;
    let foreigntotal = 0 ;
    let costtotal = 0;

    let localAdult = document.getElementById("adultnum").value;
    let localChild = document.getElementById("childnum").value;
    let foreignAdult = document.getElementById("fadult").value;
    let foreignChild = document.getElementById("fchild").value;
    let duration = document.getElementById("duration").value; 


   

    if(duration == ""){
        alert("Please select a duration for your tickets")
        return;
    }

    
if(localAdult==""){
    localAdult = 0;

}
else{
    localAdult = parseInt(localAdult);
}

if(localChild ==""){
    localChild = 0;
}
else{
    localChild = parseInt(localChild);
}

if(foreignAdult ==""){
    foreignAdult = 0;
}
else{
    foreignAdult = parseInt(foreignAdult);
}


if(foreignChild ==""){
    foreignChild = 0;
}
else{
    foreignChild = parseInt(foreignChild);
}

localtotal = localAdult+localChild;
foreigntotal = foreignAdult+foreignChild;

if(duration == "0"){
    costtotal = (localChild*700) + (localAdult*1200) + (foreignChild*2700) + (foreignAdult*5500);
    
}
else if (duration=="1"){
    costtotal = ((localAdult*1200) + (localChild*700) + (foreignAdult*2700) + (foreignChild*2700) + (localtotal*350) + (foreigntotal*460));
}
else if (duration =="2"){
    costtotal = ((localAdult*1200) + (localChild*700) + (foreignAdult*2700) + (localtotal*600) + (foreigntotal*800));
    
}

document.getElementById("price").innerHTML = `Rs ${costtotal.toFixed(2)}`;

// addfav.addEventListener("click",favorite);
// function favorite(){
//     event.preventDefault(event);
//     localStorage.setItem(`Order`,`Rs${costtotal}`)
// }
// oddfav.addEventListener("click",order)
// function order(){
//     event.preventDefault(event);
//     let Order=localStorage
// }

// }


// addbut.addEventListener('click',table);
// function table(){
//     event.preventDefault(event);

// for(let i=1; i>count; i++){
//     txtorder.innerText=`order ${i}`;
//     for(let j=1; j>count; j++){
//         txtvalue.innerText= `Rs ${costtotal.toFixed(2)}`;
//     }
// }
// }

let ticketTotal = localAdult + localChild + foreignAdult + foreignChild 
btnloyalty.addEventListener("click", loyalty);
function loyalty(){
    if(ticketTotal>3){
        let totalLoyalty = ticketTotal*15;
        alert(` you Earnerd ${totalLoyalty} loyalty`)
    }
    else{
        alert(`No loyalty Points`);
    }
}


addfav.addEventListener("click", function(){
    favobject.localAdult=localAdult
    favobject.localChild=localChild 
    favobject.foreignAdult=foreignAdult
    favobject.foreignChild=foreignChild 
    localStorage.setItem("ctfav", JSON.stringify(favobject))

})
}

oddfav.addEventListener("click", function(){
    
    let oddobject = JSON.parse(localStorage.getItem("ctfav"))
    oddobject.localAdult


})

function booknow(){
    alert("thank u")
}
