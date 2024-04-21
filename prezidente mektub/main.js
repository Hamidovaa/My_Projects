var countryCheckbox=document.getElementById("checkCountry");

var textname=document.getElementById("txtName");
var surname=document.getElementById("txtSurname");
var Aname=document.getElementById("txtAName");
var city=document.getElementById("txtCity");
var addres=document.getElementById("address");
var phone=document.getElementById("phonenumber");
var mail=document.getElementById("mail");
var age=document.getElementById("txtAge");
var apply=document.getElementById("txtApply");
var submitBtn=document.getElementById("submitBtn");
var socialStatus=document.getElementById("socialStatus");
var count=document.getElementById("count");

countryCheckbox.addEventListener("change",function(){
    var noneElements= document.getElementsByClassName("dNoneCountry");

    if(countryCheckbox.checked){
       for(var i=0; i<noneElements.length; i++){
        // noneElements[i].classList.add("active");
        noneElements[i].style.display="none";
       }
       document.getElementById("cityVisible").style.display="block";
    }
    else{
        for(var i=0; i<noneElements.length; i++){
            // noneElements[i].classList.add("active");
            noneElements[i].style.display="block";
        }
        document.getElementById("cityVisible").style.display="none";
    }
})

// submitBtn.addEventListener("click", function(event) {
//     var checkesapply = document.querySelectorAll(".checktrue");
//     var anyChecked = Array.from(checkesapply).some(button => button.checked);

//     if (!anyChecked) {
//         document.querySelector(".txt-m").style.display = "block";
//         event.preventDefault(); // Formun submit işlemini durdur
//     }
// });


submitBtn.addEventListener("click", function(){
    var checkGender=document.querySelectorAll(".check-gender");
    var noneChecked=true;
    for(i=0; i<checkGender.length; i++){
        if(checkGender[i].checked){
            noneChecked=false;
            break;
        }
    }
    if(noneChecked){
        document.querySelector(".txt-g").style.display="block";
        event.preventDefault();
    }
    else{
        document.querySelector(".txt-g").style.display="none";
    }
})

submitBtn.addEventListener("click", function(){
    var checkesapply=document.querySelectorAll(".checktrue");
    var noneChecked=true;
    for(i=0; i<checkesapply.length; i++){
        if(checkesapply[i].checked){
            noneChecked=false;
            break;
        }
    }
    if(noneChecked){
        document.querySelector(".txt-m").style.display="block";
        event.preventDefault();
    }
    else{
        document.querySelector(".txt-m").style.display="none";
    }
})



submitBtn.addEventListener("click", function(){
    checkNull(textname);
    checkNull(surname);
    checkNull(Aname);
    checkNull(city);
    checkNull(addres);
    checkNull(phone);
    checkNull(mail);
    checkNull(age);
    checkNull(apply);
    checkNull(socialStatus);
})

apply.addEventListener("keyup", function(){
    count.innerHTML=500-apply.value.length;
})


function checkNull(htmlInput){
    if(htmlInput.value.trim()==""){
        htmlInput.nextElementSibling.style.display="block";
    }
    else{
        htmlInput.nextElementSibling.style.display="none";
    }
}

