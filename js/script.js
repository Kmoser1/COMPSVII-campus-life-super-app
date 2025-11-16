// NAV Buttons special logic(?)
// probably will be for activating the API on each page.
// for now, just displays annowing alerts when any page is loaded.

document.getElementById('IRCbutton').addEventListener('click', () => {
   //
   alert('DEBUG; testing javascript functionality. Dismiss this alert.');
});
document.getElementById('MAPbutton').addEventListener('click', () => {
    // Placeholder
    alert('DEBUG; Map refresh will trigger once API is implemented. Right now this just tests that the javascript is connected successfully.');
    //
});
document.getElementById('CALbutton').addEventListener('click', () => {
    //
    alert('test of javascript functionality. Alerts are actually kind of annoying, maybe I"ll go back to testing with logs')
});
