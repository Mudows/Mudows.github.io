const validateEmailInput = () => {
  const clientEmail = $('#client-email').val();
  const emailValidation = /\S+@\S+\.\S+/;
  if (emailValidation.test(clientEmail)) {
    $('#submit-button').removeClass('btn-secondary');
    $('#submit-button').addClass('btn-primary');
    return ($('#submit-button').prop('disabled', false));
  }
  $('#submit-button').removeClass('btn-primary');
  $('#submit-button').addClass('btn-secondary');
  return ($('#submit-button').prop('disabled', true));
};

$('#client-email').on('input', validateEmailInput);