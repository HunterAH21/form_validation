function validateForm(){
    const fname = document.getElementById("firstName").value;
    const lname = document.getElementById("lastName").value;
    const city = document.getElementById("city").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    if(fname==""||fname.length<3){
        alert("enter your first name/a valid name");
        return false;
    }
    if(lname==""){
        alert("enter your last name");
        return false;
    }
    if(city==""){
        alert("enter a city name");
        return false;
    }

    if(phone.length!==10){
        alert("enter 10 digit ph.no");
        return false;
    }
    return true;

}
