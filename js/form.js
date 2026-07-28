  const scriptURL = 'https://script.google.com/macros/library/d/1S4wKMwdWWw_LpE0pKOurC9Gl3Z6rZjJxXpLOKvsdeLRoZaPIBWj2dNsu/1';
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
