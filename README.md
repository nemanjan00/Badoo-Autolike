# Badoo-Autolike

# **NOTE: This is better version: https://github.com/nemanjan00/BadooNearbyLike**

## Using the script as a JavaScript bookmark

Fast and lightweight way to run the script.

1. Go to the bookmark menu of your browser and add a new bookmark with the title of your choice.

2. Copy the following snippet and paste it into the URL-Field: `javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://rawgit.com/nemanjan00/Badoo-Autolike/master/Badoo-Autolike.user.js';})();`

3. Save the Bookmark.

4. From now on, you can just click on that bookmark when you want to boost encounters.

## Installing the script using Greasemonkey (Firefox)

Installing the userscript via Greasemonkey will automatically run it everytime you visit the TPP stream.

1. Install the [Greasemonkey extension](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) for Firefox.

2. Click this link to navigate to the script URL: https://raw.githubusercontent.com/nemanjan00/Badoo-Autolike/master/Badoo-Autolike.user.js

3. Greasemonkey will detect the userscript and ask what to do with it. Tell it to "Install" the script.

4. Refresh the page with Encounters


## Installing the script using Tampermonkey (Chrome)

Tampermonkey lets you install userscripts in Chrome, similarly to how Greasemonkey does it in Firefox.

1. Install the [Tampermonkey extension](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo/related) for Chrome.

2. Click this link to navigate to the script URL: https://raw.githubusercontent.com/nemanjan00/Badoo-Autolike/master/Badoo-Autolike.user.js

3. Tampermonkey will detect the userscript and will open a new tab. Click on `Install to Tampermonkey` and click Ok.

4. Refresh the page with Encounters

## Run the script via the console (no extensions needed)

If you don't want or can't install one of the previously mentioned browser extensions, one possibility is to run the script via the developer console. However, you will need to rerun the script every time you refresh the stream.

1. On the Encounters page, open your broser's developer console.
    * On Firefox, press `Ctrl` + `Shift` + `K`
    * On Chrome, press `Ctrl` + `Shift` + `J`
    * On Safari, press `Ctrl` + `Alt` + `I`
    * On IE9+, press `F12`
    * On Opera, press `Ctrl` + `Shift` + `I`
    * If you are having trouble opening your console, try reading the in depth explanation [here](http://webmasters.stackexchange.com/questions/8525/how-to-open-the-javascript-console-in-different-browsers)

2. Copy the following snippet and paste it into the developer console on the TPP page: `javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://rawgit.com/nemanjan00/Badoo-Autolike/master/Badoo-Autolike.user.js';})();`

3. Press `Enter` to run the code.
