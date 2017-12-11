$("#registrationForm").on('submit', function (e) {
    e.preventDefault()
    if ($('#inputPassword3').val() == $('#inputPassword4').val()) {
        console.info('matching');
    } else 
    console.info('not matching');
  });

