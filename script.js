"use strict";
let Users = [];
import { User } from "./Models/User.js";
import {check_fname, check_lname, check_email, check_phone, check_street, check_postal, check_city} from "./Models/Functions/validate_functions.js";
import {clearInput} from "./Models/Functions/other_functions.js"


$(function() {
    $("#fname_error_message").hide();
    $("#lname_error_message").hide();
    $("#email_error_message").hide();
    $("#phone_error_message").hide();
    $("#street_error_message").hide();
    $("#postal_error_message").hide();
    $("#city_error_message").hide();

    let error_fname = false
    let error_lname = false
    let error_email = false
    let error_phone = false
    let error_street = false
    let error_postal = false
    let error_city = false

    $("#form_fname").focusout(function(){
        check_fname();
    });
    $("#form_lname").focusout(function(){
        check_lname();
    });
    $("#form_email").focusout(function(){
        check_email();
    });
    $("#form_phone").focusout(function(){
        check_phone();
    });
    $("#form_street").focusout(function(){
        check_street();
    });
    $("#form_postal").focusout(function(){
        check_postal();
    });
    $("#form_city").focusout(function(){
        check_city();
    });
    
    $("#registration_form").submit(function(e){
        e.preventDefault()
        error_fname = false
        error_lname = false
        error_email = false
        error_phone = false
        error_street = false
        error_postal = false
        error_city = false

        check_fname()
        check_lname()
        check_email()
        checkIfEmailExists()
        check_phone()
        check_street()
        check_postal()
        check_city()

        if(error_fname === false && error_lname === false && error_email === false && error_phone === false && error_street === false && error_postal === false && error_city === false){
            Users.push(new User(form_fname.value, form_lname.value, form_email.value, form_phone.value, form_street.value, form_postal.value, form_city.value));
            clearInput()
            printList()
            console.log(Users);
        }else{}
    })

    //------------------Functions----------------------

    function checkIfEmailExists() {
        let email = $("#form_email").val();
        for (let i = 0; i < Users.length; i++) {
          if (email === Users[i].email) {
            $("#email_error_message").html("Email already exists");
               $("#email_error_message").show();
               $("#form_email").css("border","2px solid #F90A0A");
               error_email = true;
            break;
          }else{
            $("#email_error_message").hide();
            $("#form_email").css("border","2px solid #34F458");
            error_email = false;
          }
        }
    }

    function deleteUser(id){
        for(var i = 0; i < Users.length; i++){
            if(Users[i].id == id){
                Users.splice(i, 1)
                document.getElementById('user_list').innerHTML = ''
                printList()
            }       
        }
    }

    function printList(){

        document.getElementById('user_list').innerHTML = ''
        for(let User of Users){

            // Skapar diven där objekten skapas
            let column = document.createElement("DIV")
            column.className = "User";
            (document.getElementById('user_list')).appendChild(column)
          
            //  Objekt klickbart objekt
            let header = document.createElement("H2")
            header.className = "header"
            header.innerHTML = `${User.displayInfo}`
            $(header).click(function() {    
                $(this).next("div").toggleClass("displayGrid")
            })
            column.appendChild(header)
            
            // Skapar Rubrik till Objektet
            let grid = document.createElement("DIV")
            grid.className = "UserInfo displayGrid"
            column.appendChild(grid)
            
            // Skapar varje Objekt element
    
            var gridbox = document.createElement("DIV")
            gridbox.className = "gridItem"
            gridbox.innerHTML = `${User.email}`
            grid.appendChild(gridbox)

            var gridbox = document.createElement("DIV")
            gridbox.className = "gridItem"
            gridbox.innerHTML = `${User.adress}`
            grid.appendChild(gridbox)
            
    
            var gridbox = document.createElement("DIV")
            gridbox.className = "gridItem"
            gridbox.innerHTML = `${User.postal} ${User.city}`
            grid.appendChild(gridbox)
            
    
            var gridbox = document.createElement("DIV")
            gridbox.className = "gridItem"
            gridbox.innerHTML = `${User.phone}`
            grid.appendChild(gridbox)
    
            // Skapar och kallar funktionen deleteUser.

            var deletebtn = document.createElement("BUTTON")
            deletebtn.className = "deletebtn"
            deletebtn.innerHTML = 'Delete'
            $(deletebtn).click(function() {
              deleteUser(User.id)
            })
            grid.appendChild(deletebtn)
            
        }
    }
})

