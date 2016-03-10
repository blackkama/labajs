
function valid(form) {
var fail=false;
var name=form.name.value;
var email=form.email.value;
var password=form.password.value;
var repassword=form.repassword.value;
if(name == "" || name == " ")
fail="Vi ne vveli svoe imya";
if(email == "" || email == " ")
fail="Vi ne vveli svoy email";
else if(password == "")
fail="Vi ne vveli svoy parol";
else if(password != repassword)
fail="Paroli ne sovpadayut";
 if(fail){
  alert(fail)
  return false;
  }
  else {
  return true;
  }
	
	
}