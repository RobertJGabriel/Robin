$(document).ready(function() {
  $(function() {
    if (localStorage.getItem('seen') != (new Date()).getDate()) {
      showpanel();
    }
  });
  function showpanel() {
    //  $("#welcome").modal();
    localStorage.setItem('seen', (new Date()).getDate());
  }


});
