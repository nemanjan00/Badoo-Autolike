// ==UserScript==
// @name Badoo-Autolike
// @author nemanjan00
// @include https://badoo.com/*
// @include https://*.badoo.com/*
// @downloadURL https://raw.githubusercontent.com/nemanjan00/Badoo-Autolike/master/Badoo-Autolike.user.js
// @namespace https://github.com/nemanjan00/Badoo-Autolike
// @updateURL https://raw.githubusercontent.com/nemanjan00/Badoo-Autolike/master/Badoo-Autolike.user.js
// @version 1
// ==/UserScript==

var myVar = setInterval(function(){ myTimer() }, 50);

function myTimer() {
	if(window.location.href.indexOf("encounters") > -1) {
		if(typeof document.getElementsByClassName('js-ovl-close')[0] == "undefined"){
			document.getElementsByClassName('js-profile-header-vote b-link')[0].click();
		}
		else
		{
			while(typeof document.getElementsByClassName('js-ovl-close')[0] != "undefined"){
				document.getElementsByClassName('js-ovl-close')[0].click();
			}

			myStopFunction();
		}
	}
}

function myStopFunction() {
	clearInterval(myVar);
}