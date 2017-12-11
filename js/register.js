$("#registrationForm").on('submit', function (e) {
    e.preventDefault()
    if ($('#inputPassword3').val() == $('#inputPassword4').val()) {
        console.info('matching');
    } else 
    alert('The passwords are not matching');
    $(this).onsubmit();
  });

//   $("#registrationForm").on('submit', function (e) {
//     e.preventDefault()
//     if ($('#inputPassword3').length() > 8){
//         console.info('matching');
//     } else 
//     alert('You have entered less than 8 characters for password');
//     $(this).onsubmit();
//   });

  $('#inputPassword3').on('blur', function(){
    if(this.value.length < 8){ // checks the password value length
       alert ('You have entered less than 8 characters for password');
    //   $(this).focus(); // focuses the current field.
    return false;
     }
     }) // stops the execution.

