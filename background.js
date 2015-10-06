// Handle requests for passwords
chrome.browserAction.onClicked.addListener(function(activeTab) {
	//execute playlist
	if (activeTab.url.indexOf("http://www.englishspeak.com/") != -1) { // Inspect whether the place where user clicked matches with our list of URL
		chrome.tabs.executeScript(activeTab.id, {file: "jquery-1.11.1.min.js"});
        chrome.tabs.executeScript(activeTab.id, {
            file: "auto-playlist.js"
        }, function () { // Execute your code
            console.log("Script Executed .. "); // Notification on Completion
        });
    } else {
		alert("This is not a English Speak site!");
	}
});