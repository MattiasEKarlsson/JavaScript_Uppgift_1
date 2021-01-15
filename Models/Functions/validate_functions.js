export {check_fname, check_lname, check_email, check_phone, check_street, check_postal, check_city};
let Users = [];

function check_fname() {
    let fname_length = $("#form_fname").val().length;
    if(fname_length > 1){
        $("#fname_error_message").hide();
        $("#form_fname").css("border","2px solid #34F458");
    }else{
        $("#fname_error_message").html("Atleast 2 Characters");
           $("#fname_error_message").show();
           $("#form_fname").css("border","2px solid #F90A0A");
           error_fname = true;
    }
}

function check_lname() {
    let lname_length = $("#form_lname").val().length;
    if(lname_length > 2){
        $("#lname_error_message").hide();
        $("#form_lname").css("border","2px solid #34F458");
    }else{
        $("#lname_error_message").html("Atleast 2 Characters");
           $("#lname_error_message").show();
           $("#form_lname").css("border","2px solid #F90A0A");
           error_lname = true;
    }
}

function check_email() {
    let pattern = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    let email = $("#form_email").val();
    if (pattern.test(email) && email !== '') {
       $("#email_error_message").hide();
       $("#form_email").css("border","2px solid #34F458");
    } else {
       $("#email_error_message").html("Invalid Email");
       $("#email_error_message").show();
       $("#form_email").css("border","2px solid #F90A0A");
       error_email = true;
    }
}

function check_phone() {
    let phone_length = $("#form_phone").val().length;
    if(phone_length > 9){
        $("#phone_error_message").hide();
        $("#form_phone").css("border","2px solid #34F458");
    }else{
        $("#phone_error_message").html("Atleast 10 Numbers");
           $("#phone_error_message").show();
           $("#form_phone").css("border","2px solid #F90A0A");
           error_phone = true;
    }
}

function check_street() {
    let street_length = $("#form_street").val().length;
    if(street_length > 2){
        $("#street_error_message").hide();
        $("#form_street").css("border","2px solid #34F458");
    }else{
        $("#street_error_message").html("Atleast 2 Characters");
           $("#street_error_message").show();
           $("#form_street").css("border","2px solid #F90A0A");
           error_street = true;
    }
}

function check_postal() {
    let postal_length = $("#form_postal").val().length;
    if(postal_length > 4){
        $("#postal_error_message").hide();
        $("#form_postal").css("border","2px solid #34F458");
    }else{
        $("#postal_error_message").html("Atleast 5 Numbers");
           $("#postal_error_message").show();
           $("#form_postal").css("border","2px solid #F90A0A");
           error_postal = true;
    }
}

function check_city() {
    let city_length = $("#form_city").val().length;
    if(city_length >= 4){
        $("#city_error_message").hide();
        $("#form_city").css("border","2px solid #34F458");
    }else{
        $("#city_error_message").html("Atleast 4 Characters");
           $("#city_error_message").show();
           $("#form_city").css("border","2px solid #F90A0A");
           error_city = true;
    }
}


