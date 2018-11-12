$(document).ready(function () {

  $('#login').click(function () {

    event.preventDefault();

    var validSiD = $('#inputSid').val() === 'Stu';
    var validPass = $('#inputPassword').val() === 'Dent';

    if (validSiD === true && validPass === true) { // if ValidEmail & ValidPassword

      window.location.href = './html/HomePage.html'; // go to home.html
    } 


  });

});