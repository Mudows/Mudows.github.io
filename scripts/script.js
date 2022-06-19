const $clientEmail = $('#client-email');
const $submitButton = $('#submit-button');

const validateEmailInput = () => {
  const emailValidation = /\S+@\S+\.\S+/;
  if (emailValidation.test($clientEmail.val())) {
    $submitButton
      .removeClass('btn-secondary')
      .addClass('btn-primary')
      .prop('disabled', false);
    return;
  }
  $submitButton
    .removeClass('btn-primary')
    .addClass('btn-secondary')
    .prop('disabled', true);
  return;
};

$clientEmail.on('input', validateEmailInput);

$submitButton.on('click', () => $clientEmail.val(''));
