$('#inputPassword3, #inputPassword4').on('keyup', function () {
    if ($('#inputPassword3').val() == $('#inputPassword4').val()) {
        console.info('matching');
    } else 
    console.info('not matching');
  });