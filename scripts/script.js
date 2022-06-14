const validateEmailInput = () => {
  const submitButton = document.getElementById('submit-button');
  const clientEmail = document.querySelector('#client-email').value;
  const emailValidation = /\S+@\S+\.\S+/;
  if (emailValidation.test(clientEmail)) {
    submitButton.classList.remove('btn-secondary');
    submitButton.classList.add('btn-primary');
    return (submitButton.disabled = false);
  }
  submitButton.classList.remove('btn-primary');
  submitButton.classList.add('btn-secondary');
  return (submitButton.disabled = true);
};

document
  .querySelector('#client-email')
  .addEventListener('input', validateEmailInput);
