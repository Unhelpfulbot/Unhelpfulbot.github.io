function sendmessage(){
    var name = document.getElementById("name-input").value;
    var email = document.getElementById("email-input").value;
    var phone = document.getElementById("phone-input").value;
    var message = document.getElementById("message-input").value;
    const emailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneformat = /^\+?[1-9][0-9]{7,14}$/;
    if(name == ""|| email == ""|| message == ""){
        alert("At least one of the required section is left back. Please fill out the required sections (*).");
        return;
    }
    if(!emailformat.test(email)){
        alert("Email is not in the right format");
        return;
    }
    if(phone == ""){
        phonenum = "";
    }
    else{
        if (!phoneformat.test(phone))
        {
            alert("Phone number is not in the right format");
            return;
        }
        phonenum = "\nPhone Number: " + phone;
    }
    feedback = "Email Address: " + email + phonenum + "\nMessage: " + message;
    document.location.href = "mailto:jackychen0422s@gmail.com?subject="
        + encodeURIComponent("Message From Website sent by: " + name)
        + "&body=" + encodeURIComponent(feedback) 
    ;
    document.getElementById("name-input").value = "";
    document.getElementById("email-input").value = "";
    document.getElementById("phone-input").value = "";
    document.getElementById("message-input").value = "";
    alert('Press "Send" after opening your mailing app and I will respond within 2 to 3 days. Thanks for the message');
}