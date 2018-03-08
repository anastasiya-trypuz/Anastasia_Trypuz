'use strict';

//function validate() {
//    
//    var userName = document.getElementById("userName");
//    var userPassword = document.getElementById("userPassword");
//
//
//    if(!userName.value) {
//        userName.style.border = "2px solid red";
//        return false;
//    }
//
//    if(!userPassword.value) {
//        userPassword.style.border = "2px solid red";
//        return false;
//    }
//
//    return true;
//}

$('#form').submit(function(e) {
    var userName = $("#userName").val();
    var userPassword = $("#userPassword").val();
    
    if(!userName){
        e.preventDefault();    //stop form from submitting
        console.log("No!");
        return false;
    } 
    
    if(!userPassword) {
        e.preventDefault();
        return false;
    }
    return true;
});

//document.querySelector("#form").addEventListener("submit", function(e){
//    
//    var userName = document.getElementById("userName");
//    var userPassword = document.getElementById("userPassword");
//    
//    if(!userName.value){
//        e.preventDefault();    //stop form from submitting
//        userName.style.border = "2px solid red";
//        return false;
//    } 
//    
//    if(!userPassword.value) {
//        e.preventDefault();
//        userPassword.style.border = "2px solid red";
//        return false;
//    }
//
//    return true;
//});