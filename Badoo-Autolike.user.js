// ==UserScript==
// @name Badoo-Autolike
// @author nemanjan00
// @include https://badoo.com/*
// @include https://*.badoo.com/*
// @include http://badoo.com/*
// @include http://*.badoo.com/*
// @downloadURL https://raw.githubusercontent.com/nemanjan00/Badoo-Autolike/master/Badoo-Autolike.user.js
// @namespace https://github.com/nemanjan00/Badoo-Autolike
// @updateURL https://raw.githubusercontent.com/nemanjan00/Badoo-Autolike/master/Badoo-Autolike.user.js
// @version 5
// ==/UserScript==

var oldurl = "";

var AutoYesService;
var RemoveAlertService;

var running = 1;

var URLHandlerService = setInterval(URLHandler, 1000);

function URLHandler() {
	if(window.location.href.indexOf("game") > -1) {
		if(window.location.href != oldurl){
			AutoYesService = setInterval(AutoYes, 50);
			RemoveAlertService = setInterval(RemoveAlert, 50);
		}
	}
	else
	{
		if(running == 1){
			clearInterval(AutoYesService);
		}

		clearInterval(RemoveAlertService);
	}

	oldurl = window.location.href;
}

function AutoYes() {
	if(window.location.href.indexOf("game") > -1) {
		if(typeof document.getElementsByClassName('wizard_cloud')[0] == "undefined" && running == 1){
			document.getElementsByClassName('js-profile-header-vote b-link')[0].click();
		}
		else
		{
			running = 0;
			clearInterval(AutoYesService);
		}
	}
}

function RemoveAlert() {
	if(window.location.href.indexOf("encounters") > -1) {
		if(typeof document.getElementsByClassName('wizard_cloud')[0] == "undefined" || running == 0){
			for (i = 0; i < document.getElementsByClassName('js-ovl-close').length; i++) {
				document.getElementsByClassName('js-ovl-close')[i].click();
			}
		}
	}
}
