  const scriptURL = 'https://script.google.com/macros/s/AKfycbzVhfll_TlnzERtNnuT1K1vL7fjD9I4B6gG9DoHx2b2FwPdcQGx9zvxA1PDNnchMr4/exec';
  const form = document.forms['my-contact-form'];
  const btnSend = document.querySelector('.btn-send');
  const btnLoading = document.querySelector('.btn-loading');
  const myAlert = document.querySelector('.my-alert');


  form.addEventListener('submit', e => {
    e.preventDefault();
    btnLoading.classList.toggle('d-none');
    btnSend.classList.toggle('d-none');
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        console.log('Success!', response);
        btnLoading.classList.toggle('d-none');
        btnSend.classList.toggle('d-none');
        myAlert.removeAttribute("style");
      })
      .catch(error => console.error('Error!', error.message))
  });

  $(".closebtn").click(function() {
  $(".my-alert").fadeOut( 500 );
});
