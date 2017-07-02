function init(){
    $('body').find('input,select,textarea').val('');
}

function validateUserName(el){
  var userNameVal = $(el).val();
  $(el).next('.alert').addClass('hidden');
  if(userNameVal.length > 20){
    $(el).next('.alert').text("Warning! Username should not be more than 20 characters").removeClass('hidden');
      $(el).focus();
      return;
  }
  if(/[-!$%^&*()_+|~=`{}\[\]:";'<>?@#,./\\/ /]/.test(userNameVal)){
    $(el).next('.alert').text("Warning! Username should not contain any special characters").removeClass('hidden');
    $(el).focus();
    return;
  }
  if(userNameVal.length <=0){
    $(el).next('.alert').text("Warning! Username is required field").removeClass('hidden');
    $(el).focus();
    return;
  }
  $(el).next('input');
}

function validatePassword(el){
  var passValue = $(el).val();
    $(el).next('.alert').addClass('hidden');

    if(passValue.length <=0){
      $(el).next('.alert').text("Warning! Password is required field").removeClass('hidden');
      $(el).focus();
    }
  if(!(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$^&*~])[a-zA-Z0-9!@#$^&*~]{8,20}$/.test(passValue))){
      $(el).next('.alert').html('');
      $(el).next('.alert').append("<span><strong> Password must satify below policy:</strong></span>")
      $(el).next('.alert').append('<ul>');
      $(el).next('.alert').append('<li> password should have atleast 8 characters and not more than 20 characters </li>');
      $(el).next('.alert').append('<li> password should have atleast one upper case character (A-Z) </li>');
      $(el).next('.alert').append('<li> password should have atleast one lower case character (a-z) </li>');
      $(el).next('.alert').append('<li> password should have atleast one number (0-9) </li>');
      $(el).next('.alert').append('<li> password should have atleast one special character out of these ( ! @ # $ ^ & * ~ ) </li>');
      $(el).next('.alert').append('<li> password should  NOT have space character </li>');
      $(el).next('.alert').removeClass('hidden');
      $(el).focus();
  }
}

function validateName(el){
  var nameValue = $(el).val().trim();
    $(el).next('.alert').addClass('hidden');

  if(/[-!$%^&*()_+|~=`{}\[\]:";'<>?@#,./\\/\d/]/.test(nameValue)){
    $(el).next('.alert').text("Warning! Name should contain only alphabets with space(s)").removeClass('hidden');
    $(el).focus();
  }
  if(nameValue.length <=0){
    $(el).next('.alert').text("Warning! Name is required field").removeClass('hidden');
    $(el).focus();
  }
}

function validateGender(el){
  var genderValue = $(el).val().trim();
  $(el).next('.alert').addClass('hidden');
  if(genderValue=="" || genderValue.length<=0){
    $(el).next('.alert').text("Warning! Please select Gender").removeClass('hidden');
  }
}

function validateAge(el){
  var ageValue = $(el).val().trim();
  $(el).next('.alert').addClass('hidden');
  if(ageValue=="" || ageValue.length<=0){
    $(el).next('.alert').text("Warning! Please select Age").removeClass('hidden');
  }
}

function validateLocation(el){
  var locationValue = $(el).val().trim();
  $(el).next('.alert').addClass('hidden');
  if(locationValue=="" || locationValue.length<=0){
    $(el).next('.alert').text("Warning! Please select Location").removeClass('hidden');
  }
}

function validatePincode(el){
  var pincodeValue = $(el).val().trim();
    $(el).next('.alert').addClass('hidden');

  if(!(/^[0-9]{6}$/.test(pincodeValue))){
    $(el).next('.alert').text("Warning! Pincode should be only 6 digit number").removeClass('hidden');
    $(el).focus();
  }
  if(pincodeValue.length <=0){
    $(el).next('.alert').text("Warning! Pincode is required field").removeClass('hidden');
    $(el).focus();
  }
}

function validateArea(el){
  var areaValue = $(el).val().trim();
    $(el).next('.alert').addClass('hidden');

  if( areaValue.length>0 && /[-!$%^&*()_+|~=`{}\[\]:";'<>?@#,./\\//]/.test(areaValue)){
    $(el).next('.alert').text("Warning! Area should contain not have special characters").removeClass('hidden');
    $(el).focus();
  }
}

function validateAddress(el){
  var addressValue = $(el).text().trim();
  $(el).next('.alert').addClass('hidden');
  if(addressValue.length<=0){
    $(el).next('.alert').text("Warning! Address is required field").removeClass('hidden');
    $(el).focus();
  }
}

function validateContact(el){
  var contactValue = $(el).val().trim();
    $(el).next('.alert').addClass('hidden');

  if(!(/^[0-9]{10}$/.test(contactValue))){
    $(el).next('.alert').text("Warning! Contact number should be only 10 digit number without + or other characters").removeClass('hidden');
    $(el).focus();
  }
  if(contactValue.length <=0){
    $(el).next('.alert').text("Warning! Contact is required field").removeClass('hidden');
    $(el).focus();
  }
}

function validateEmail(el){
  var mailValue = $(el).val().trim();
  var valueArray = mailValue.split('@');

    $(el).next('.alert').addClass('hidden');
  if(/[-!$%^&*()_+|~=`{}\[\]:";'<>?@#,./\\//]/.test(valueArray[0])){
    $(el).next('.alert').text("Personal Information should not contain special characters other than . or _").removeClass('hidden');
    $(el).focus();
    return;
  }

  if(valueArray[0]==undefined || valueArray[1]==undefined){
    $(el).next('.alert').text("Email format is personal_info@domain, Please enter in this format").removeClass('hidden');
    $(el).focus();
    return;
  }

  if(valueArray[0].length >64 || valueArray[0].length <=0){
    $(el).next('.alert').text("Warning! Personal Information should be between 1-64 characters").removeClass('hidden');
    $(el).focus();
    return;
  }

  if(/[-!$%^&*()_+|~=`{}\[\]:";'<>?@#,/\\//]/.test(valueArray[1])){
    $(el).next('.alert').text("Warning! Domain name should not contain special characters other than .").removeClass('hidden');
    $(el).focus();
    return;
  }

  if(valueArray[1].length >253 || valueArray[1].length <= 0 ){
    $(el).next('.alert').text("Domain name should be between  1-253 characters").removeClass('hidden');
    $(el).focus();
    return;
  }

  if(mailValue.length <=0){
    $(el).next('.alert').text("Warning! Email  is required field").removeClass('hidden');
    $(el).focus();
  }
}

function validateFile(el){
    var fileName = $(el).val().trim();
    var valueSplit = fileName.split('.');
    $(el).closest('td').find('div.alert').addClass('hidden');
    if(fileName != undefined && fileName !=""){
        var fileSize = $(el)[0].files[0].size;
        var fileSizeinMb = fileSize / (1024 * 1024);
        if(valueSplit[1]!="jpg" || valueSplit[1]!="png" || valueSplit[1]!="gif"){
          $(el).closest('td').find('div.alert').text("Warning! File format should only be .jpg,.png or .gif").removeClass('hidden');
          return;
        }
        if(fileSizeinMb > 2){
          $(el).closest('td').find('div.alert').text("Warning! File size should not exceed 2MB").removeClass('hidden');
          return;
        }
    }
    return;
}

function validateForm(el){
    validateUserName($('body').find('input#username'));
    validatePassword($('body').find('input#pass'));
    validateName($('body').find('input#name'));
    validateAge($('body').find('select#dropAge'));
    validateGender($('body').find('select#dropGender'));
    validateLocation($('body').find('select#dropLoc'));
    validatePincode($('body').find('input#pinCode'));
    validateArea($('body').find('input#area'));
    validateAddress($('body').find('input#address'));
    validateContact($('body').find('input#contact'));
    validateEmail($('body').find('input#email'));
    validateFile($('body').find('input#photo'));

    if($('body').find('div.alert:visible').length > 0){
        alert("There are error's in form data, Please correct that and submit again");
        return;
    }
    alert('Form submitted');
    init();
    return;
}
