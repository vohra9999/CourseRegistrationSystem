$(document).click(() => {
  if (typeof timeOutObj != "undefined") {
    clearTimeout(timeOutObj);
  }

  timeOutObj = setTimeout(function () {
    localStorage.clear();
    window.location = "../";
  }, 1800000); //will expire after twenty minutes

});