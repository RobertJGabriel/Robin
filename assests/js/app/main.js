

   ljs.load(['assests/js/lib/jquery-1.11.3.js'],'assests/js/lib/bootstrap.min.js','assests/js/lib/ripples.js','assests/js/lib/material.js','assests/js/lib/core.js',function(){ 

		$.material.init();
		Robin.Init();
   });


function regexUrlextensioncheck(n) {
    
        var s = document.URL,
            e = new RegExp(n);

    
    return e.test(s);
}
