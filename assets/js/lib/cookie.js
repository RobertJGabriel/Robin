 $(document).ready(function () {
     $(function () {
         if (window.location.search.indexOf('dave=error') > -1) {
             showErrorPanel();
         }
         if (localStorage.getItem('seen') != (new Date()).getDate()) {
             showpanel();
         }
     });

     function showpanel() {
         $("#welcome").modal();
         localStorage.setItem('seen', (new Date()).getDate());
     }

     function showErrorPanel() {
         $("#errorModal").modal();
     }
 });
