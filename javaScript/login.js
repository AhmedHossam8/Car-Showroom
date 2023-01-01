function validation(){
	var valid = true;
	formLabels = document.getElementsByTagName("label");
	
	var email = document.myForm.email.value;
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(email==""){
		formLabels[0].innerHTML="*Required";
		formLabels[0].style="color: red";
		valid = false;
	}
	else if(!re.test(email)){
		formLabels[0].innerHTML="Incorrect Email";
		formLabels[0].style="color: red";
		valid = false;
	}
    else {
		valid = (valid) ? true : false;
		formLabels[0].innerHTML="";
	}
	
	var password = document.myForm.password.value;
	if(password == ""){
		formLabels[1].innerHTML="*Required";
		formLabels[1].style="color: red";
		valid = false;
	}
	else if(password.length < 8){
		formLabels[1].innerHTML="Password must be greater than 8 characters";
		formLabels[1].style="color: red";
		valid = false;
	}
    else {
		valid = (valid) ? true : false;
		formLabels[1].innerHTML="";
	}

	if (valid){
		window.location.href = "../html/Car.html"
	}
}