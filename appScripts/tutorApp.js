function init(){
    $('body').find('input,select,textarea').val('');
}

function validateUserName(el){
  var userNameVal = $(el).val();
    $(el).next('.alert').addClass('hidden');
  if(userNameVal.length > 20){
    $(el).next('.alert').text("Warning! Username should not be more than 20 characters").removeClass('hidden');
      $(el).focus();
  }
  if(/[-!$%^&*()_+|~=`{}\[\]:";'<>?@#,./\\/ /]/.test(userNameVal)){
    $(el).next('.alert').text("Warning! Username should not contain any special characters").removeClass('hidden');
    $(el).focus();
  }
  if(userNameVal.length <=0){
    $(el).next('.alert').text("Warning! Username is required field").removeClass('hidden');
    $(el).focus();
  }
}

function validatePassword(el){
  var passValue = $(el).val();
  var passPolicy = new RegExp("^(?=.*[a-z]){8,20}");
    $(el).next('.alert').addClass('hidden');

    if(passValue.length <=0){
      $(el).next('.alert').text("Warning! Password is required field").removeClass('hidden');
      $(el).focus();
    }
  //if(/^(?=.*[a-z])^(\s)(?=.*[A-Z])(?=.*\d)(?=.*[!@#$^&*~])[A-Za-z\d!@#$^&*~]{8,20}/.test(passValue)){
 if(passPolicy.test(passValue)){  //^(\s)(?=.*[A-Z])(?=.*\d)(?=.*[!@#$^&*~])[A-Za-z\d!@#$^&*~]
      $(el).next('.alert').html('');
      $(el).next('.alert').append("<span> Password must satify below policy: </spna>")
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
