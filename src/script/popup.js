require('./bootstrap');

$(document).ready(() => {

  const Admin = $('#admin-PC');

  /** Welcome Note */
  $(Admin)
    .find('.title')
    .text('Welcome to Mi Router');

  /** Mi Wifi App */
  $(Admin)
    .find('.detail')
    .text('Download Mi Wifi App');

  /** Mi Wifi Tip */
  $(Admin)
    .find('.tip')
    .text('');
});


