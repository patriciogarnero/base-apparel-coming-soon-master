function validateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    document.form1.text1.focus();
    return true;
  } else {
    document.getElementById("alert").style.visibility = "visible";
    document.getElementById("error-icon").style.display = "block";
    document.form1.text1.focus();
    return false;
  }
}
