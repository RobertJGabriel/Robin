

   ljs.load(['assets/js/lib/jquery-1.11.3.js'],'assets/js/lib/bootstrap.min.js','assets/js/lib/ripples.js','assets/js/lib/material.js','assets/js/lib/core.js',function(){ 

		$.material.init();
		Robin.Init();
   });


function regexUrlextensioncheck(n) {
    
        var s = document.URL,
            e = new RegExp(n);

    
    return e.test(s);
}
