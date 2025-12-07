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

//DEFAULT POS. the buttons eventListeners should setView.
var map = L.map('map').setView([40.87365644631193, -81.36947012705369], 17);
var polygon = L.polygon([
    [40.87502534231824, -81.37351793583642],
    [40.87162305942941, -81.37363250471276],
    [40.87179632806028, -81.36418577991014],
    [40.874899334958045, -81.36398788821464]

]).addTo(map);

//SELECT-O-MATIC

document.getElementById('mapvOption1').addEventListener('click', () => {

    map.setView([40.87365644631193, -81.36947012705369], 17);
    
    polygon.remove()
    
    polygon = L.polygon([
    [40.87502534231824, -81.37351793583642],
    [40.87162305942941, -81.37363250471276],
    [40.87179632806028, -81.36418577991014],
    [40.874899334958045, -81.36398788821464]
]).addTo(map);
})

document.getElementById('mapvOption2').addEventListener('click', () => {
   
    map.setView([40.87455569085701, -81.36784463575852], 19 );

    polygon.remove()
    
    polygon = L.polygon([
    [40.874781202840694, -81.36825818269635],
    [40.87431654780062, -81.36822693663916],
    [40.874300796725166, -81.36731038562844],
    [40.87475757639193, -81.36731038562844]
]).addTo(map);
})

document.getElementById('mapvOption3').addEventListener('click', () => {
   
    map.setView([40.87333809628368, -81.36806930178102], 19);

    polygon.remove()
    
    polygon = L.polygon([
    [40.87349534891367, -81.3685009308821],
    [40.87309388302426, -81.36851597742884],
    [40.87309713376999, -81.3676690717987],
    [40.8735181039924, -81.367660473772]
]).addTo(map);
})
document.getElementById('mapvOption4').addEventListener('click', () => {
   
    map.setView([40.87333954140214, -81.36722259288585], 19);

    polygon.remove()
    
    polygon = L.polygon([
    [40.87348072064356, -81.36758739047389],
    [40.8731588979073, -81.36756589540714],
    [40.87315402179321, -81.3669661830447],
    [40.87346609237132, -81.36695543551131]
]).addTo(map);
})

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);