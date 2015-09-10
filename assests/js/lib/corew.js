var banndedUrls = [];
var tabsLimit = 4; // This is 5 ;)

var Robin= {
    Init: function () {
      
    }
};


function addEventListeners() {
    
	var buttons = ["back","forword","refresh","home","search","newTab","passwordSave","passwordTry","settingsSave","restart"];
	var eventFunction = ["goBack","goForword","refresh","goHome","expand","createTab","setPassword","checkSetPassword","saveSettings","restart"];
	for (i = 0; i = buttons.length; i++) { 
    	document.getElementById(buttons[i]).addEventListener("click",)
	}
   // $('a.toggle').on('click', expandTabs);

}


function expandTabs() {
    $('section').scrollTop(0);
    $('.contain').toggleClass('active');
}


function goBack() {
    var iframeId = $('.iframe.active').attr('id');
    document.getElementById(iframeId).contentWindow.history.back();
}

function goForword() {
   
    var iframeId = $('.iframe.active').attr('id');
    document.getElementById(iframeId).contentWindow.history.forward();
}
