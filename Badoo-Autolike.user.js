// ==UserScript==
// @name Badoo-Autolike
// @author nemanjan00
// @include https://badoo.com/*/encounters/
// @downloadURL https://raw.githubusercontent.com/nemanjan00/filmovizija-adblock/master/filmovizija.user.js
// @namespace https://github.com/nemanjan00/Badoo-Autolike
// @updateURL https://raw.githubusercontent.com/nemanjan00/filmovizija-adblock/master/filmovizija.user.js
// @version 1
// ==/UserScript==

var myVar = setInterval(function(){ myTimer() }, 10);

function myTimer() {
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

function myStopFunction() {
	clearInterval(myVar);
} 