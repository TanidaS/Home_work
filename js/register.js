function checkPass()
{
    var pass1 = document.getElementById('passwordinput');
    var pass2 = document.getElementById('confirm_password');
    var message = document.getElementById('confirmMessage');
    
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    
    if(pass1.value == pass2.value){
        
        
         
        pass2.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Passwords Match"
        $('#submit').prop('disabled', false);
    }else{
        
      
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Passwords Do Not Match!"
        $('#submit').prop('disabled', true);
    }
}


// $("#registrationForm").on('submit', function (e) {
//     e.preventDefault()
//     if ($('#inputPassword3').val() == $('#inputPassword4').val()) {
//         console.info('matching');
//     } else 
//     alert('The passwords are not matching');
//     $(this).onsubmit();
//   });

  // $("#registrationForm").on('submit', function (e) {
  //   e.preventDefault()
  //   if ($('#inputPassword3').length() > 8){
  //       console.info('matching');
  //   } else 
  //   alert('You have entered less than 8 characters for password');
  //   $(this).onsubmit();
  // });

  // $('#inputPassword3').on('blur', function(){
  //   if(this.value.length < 9){ // checks the password value length
  //      alert ('You have entered less than 8 characters for password');
  //   $(this).required(); // focuses the current field.
  //   return false;
  //    }
  //    }) // stops the execution.
  