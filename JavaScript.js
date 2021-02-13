

function ValidateFName(fname) {
    if (fname.value == '') {
        alert("الرجاء ادخال الاسم");
        document.RegistrationForm.fname.focus();
        return false;
    }
}

function ValidateLName(lname) {
    if (lname.value == '') {
        alert("الرجاء ادخال اللقب");
        document.RegistrationForm.lname.focus();
        return false;
    }
}

function ValidateEmail(email) {
    var mailformat =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.value == '') {
        alert("الرجاء ادخال البريد الالكتروني");
        document.RegistrationForm.email.focus();
        return false;
    }

    else if (email.value.match(mailformat)) {
        return true;
    }

    else {
        alert("خطا في البريد الالكتروني الرجاء التثبت");
        document.RegistrationForm.email.focus();
        return false;
    }
}


function Validatetele(tele) {

    if (tele.value == '' || tele.value.length !=8) {
        alert("الرجاء ادخال رقم الهاتف");
        document.RegistrationForm.tele.focus();
        return false;
    }

}

function ValidatePwd(pwd) {

    if (pwd.value == '') {
        alert("الرجاء ادخال كلمة السر");
        document.RegistrationForm.pwd.focus();
        return false;
    }

    else if (pwd.value.length < 6 || pwd.value.length > 20) {
        alert('الرجاء التثبت ادخال كلمة السر');
        document.RegistrationForm.pwd.focus();
        return false;
    }
}

function ValidateConfPwd(confpwd) {

    if (confpwd.value == '') {
        alert("الرجاء تأكيد كلمة السر");
        document.RegistrationForm.confpwd.focus();
        return false;
    }

    if (pwd.value != confpwd.value) {
        alert('الرجاع تأكيد كلمة السر');
        document.RegistrationForm.confpwd.focus();
        return false;
    }
}

