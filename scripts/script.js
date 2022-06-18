const validateEmailInput = () => {
  const clientEmail = $('#client-email').val();
  const emailValidation = /\S+@\S+\.\S+/;
  if (emailValidation.test(clientEmail)) {
    $('#submit-button')
      .removeClass('btn-secondary')
      .addClass('btn-primary')
      .prop('disabled', false);
    return;
  }
  $('#submit-button')
    .removeClass('btn-primary')
    .addClass('btn-secondary')
    .prop('disabled', true);
  return;
};

$('#client-email').on('input', validateEmailInput);

const onEmailSubmit = () => {
  $('#client-email').val('');
  return;
}

$('#submit-button').on('click', onEmailSubmit);