ljs.load(['http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js', 'assets/js/lib/jquery-1.11.3.js', 'assets/js/lib/firebase.js'], 'assets/js/lib/core.js',
    'assets/js/lib/bootstrap.min.js','assets/js/app/settings.js', 'assets/js/lib/ripples.js', 'assets/js/lib/material.js', 'assets/js/lib/cookie.js',
    function () {

        $.material.init();

    });


function regexUrlextensioncheck(n) {

    var s = document.URL,
        e = new RegExp(n);


    return e.test(s);
}
