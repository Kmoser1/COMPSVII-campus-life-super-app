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
var marker
var markerGroup = L.featureGroup().addTo(map);
var vOpt = 1

var polygon = L.polygon([
    [40.87502534231824, -81.37351793583642],
    [40.87162305942941, -81.37363250471276],
    [40.87179632806028, -81.36418577991014],
    [40.874899334958045, -81.36398788821464]

]).addTo(map);

const markerGroup1 = L.layerGroup().addTo(map);
const markerGroup2 = L.layerGroup().addTo(map);
const markerGroup3 = L.layerGroup().addTo(map);

//
//SELECT-O-MATIC
//

document.getElementById('mapvOption1').addEventListener('click', () => {
    // Set map view
    map.setView([40.87365644631193, -81.36947012705369], 16);
    // Remove existing polygon
    if (polygon) {
        map.removeLayer(polygon);
    }
    // Add new polygon
    polygon = L.polygon([
        [40.87502534231824, -81.37351793583642],
        [40.87162305942941, -81.37363250471276],
        [40.87179632806028, -81.36418577991014],
        [40.874899334958045, -81.36398788821464]
    ]).addTo(map);
    vOpt = 1
});


document.getElementById('mapvOption2').addEventListener('click', () => {
   
    map.setView([40.87455569085701, -81.36784463575852], 19 );

    if (polygon) {
        map.removeLayer(polygon);
    }
    
    polygon = L.polygon([
    [40.874781202840694, -81.36825818269635],
    [40.87431654780062, -81.36822693663916],
    [40.874300796725166, -81.36731038562844],
    [40.87475757639193, -81.36731038562844]
    ]).addTo(map);
    vOpt = 2
});


document.getElementById('mapvOption3').addEventListener('click', () => {
   
    map.setView([40.87333809628368, -81.36806930178102], 19);

    if (polygon) {
        map.removeLayer(polygon);
    }
    
    polygon = L.polygon([
    [40.87349534891367, -81.3685009308821],
    [40.87309388302426, -81.36851597742884],
    [40.87309713376999, -81.3676690717987],
    [40.8735181039924, -81.367660473772]
    ]).addTo(map);
    vOpt = 3

})


document.getElementById('mapvOption4').addEventListener('click', () => {
   
    map.setView([40.87333954140214, -81.36722259288585], 19);

    if (polygon) {
        map.removeLayer(polygon);
    }
    
    polygon = L.polygon([
    [40.87348072064356, -81.36758739047389],
    [40.8731588979073, -81.36756589540714],
    [40.87315402179321, -81.3669661830447],
    [40.87346609237132, -81.36695543551131]
    ]).addTo(map);
    vOpt = 4
});


// Mapoption1 button
document.getElementById('mapoption1').addEventListener('click', () => {
    markerGroup1.clearLayers();
    markerGroup2.clearLayers();
    markerGroup3.clearLayers();
        if (vOpt == 0) {alert('please select a map first! (under MAP SELECTION OPTIONS).')}
        if (vOpt == 1){
            // Shows one marker for each building that has a basement
    const marker1 = L.marker([40.873319216031724, -81.3680492264267])
        .bindPopup("<b>BUILDING 2 Basement</b>")
        .addTo(markerGroup1);
    const marker2 = L.marker([40.87334092945668, -81.36720504317931])
        .bindPopup("<b>BUILDING 3 Basement</b>")
        .addTo(markerGroup1);
          }
        if (vOpt == 2){
            alert('attention! Building 1 does not have a basement! You may close this alert.')
            // For demonstration, Building 1 does not have a basement.
          }
        if (vOpt == 3){
            // Shows 2 rooms in the basement of Building 2
    const marker1 = L.marker([40.87340892131961, -81.36835770520275])
        .bindPopup("<b>BUILDING 2 room 001</b>")
        .addTo(markerGroup1);
    const marker2 = L.marker([40.87317188830398, -81.36777281615016])
        .bindPopup("<b>BUILDING 2 room 002</b>")
        .addTo(markerGroup1);
          }
         if (vOpt == 4){
            //Shows 2 rooms in the basement of Building 3
    const marker1 = L.marker([40.873235482611, -81.36746316900467])
        .bindPopup("<b>BUILDING 3 room 001</b>")
        .addTo(markerGroup1);
    const marker2 = L.marker([40.87340892131961, -81.367078977176])
        .bindPopup("<b>BUILDING 3 room 002</b>")
        .addTo(markerGroup1);
          }
});

// Mapoption2 button
document.getElementById('mapoption2').addEventListener('click', () => {
    markerGroup1.clearLayers();
    markerGroup2.clearLayers();
    markerGroup3.clearLayers();
    if (vOpt == 0) {alert('please select a map first! (under MAP SELECTION OPTIONS).')}
    if (vOpt == 1){
        //shows all buildings with a ground floor
    const marker1 = L.marker([40.87450748918151, -81.36791246064942])
        .bindPopup("<b>BUILDING 1</b>")
        .addTo(markerGroup2);
    const marker2 = L.marker([40.873319216031724, -81.3680492264267])
        .bindPopup("<b>BUILDING 2</b>")
        .addTo(markerGroup2);
    const marker3 = L.marker([40.87334092945668, -81.36720504317931])
        .bindPopup("<b>BUILDING 3</b>")
        .addTo(markerGroup2);
    }
    if (vOpt == 2){
        //shows rooms on the groundfloor of building 1
    const marker1 = L.marker([40.8747215666354, -81.36802147180167])
        .bindPopup("<b>BUILDING 1 room 100</b>")
        .addTo(markerGroup2);
    const marker2 = L.marker([40.874657973755866, -81.36821452341707])
        .bindPopup("<b>BUILDING 1 room 101</b>")
        .addTo(markerGroup2);
    const marker3 = L.marker([40.874315438331415, -81.36793354730356])
        .bindPopup("<b>BUILDING 1 room 102</b>")
        .addTo(markerGroup2);
    }
    if (vOpt == 3){
        //shows rooms on the groundfloor of building 2
    const marker1 = L.marker([40.87314057392155, -81.36810504496974])
        .bindPopup("<b>BUILDING 2 room 100</b>")
        .addTo(markerGroup2);
    const marker2 = L.marker([40.873473293360796, -81.36791813685788])
        .bindPopup("<b>BUILDING 2 room 101</b>")
        .addTo(markerGroup2);
    const marker3 = L.marker([40.873379072096384, -81.36831142267658])
        .bindPopup("<b>BUILDING 2 room 102</b>")
        .addTo(markerGroup2);
    }
        if (vOpt == 4){
            //shows rooms on the groundfloor of building 3
    const marker1 = L.marker([40.87323185110229, -81.3675034344847])
        .bindPopup("<b>BUILDING 3 room 100</b>")
        .addTo(markerGroup2);
    const marker2 = L.marker([40.873306933850195, -81.36704200508359])
        .bindPopup("<b>BUILDING 3 room 101</b>")
        .addTo(markerGroup2);
    const marker3 = L.marker([40.873399683009445, -81.36731068549437])
        .bindPopup("<b>BUILDING 3 room 102</b>")
        .addTo(markerGroup2);
    }
});

// Mapoption3 button
document.getElementById('mapoption3').addEventListener('click', () => {
    markerGroup1.clearLayers();
    markerGroup2.clearLayers();
    markerGroup3.clearLayers();

    if (vOpt == 0) {alert('please select a map first! (under MAP SELECTION OPTIONS).')}

    if (vOpt == 1) {
        // shows all buildings with a second floor
    const marker1 = L.marker([40.87450748918151, -81.36791246064942])
        .bindPopup("<b>BUILDING 1 Floor 2</b>")
        .addTo(markerGroup3);
    const marker2 = L.marker([40.873319216031724, -81.3680492264267])
        .bindPopup("<b>BUILDING 2 Floor 2</b>")
        .addTo(markerGroup3);
    }

        if (vOpt == 2) {
    const marker1 = L.marker([40.87440277602746, -81.36783534193381])
        .bindPopup("<b>BUILDING 1 Room 200</b>")
        .addTo(markerGroup3);
    const marker2 = L.marker([40.87438952635628, -81.36753940409004])
        .bindPopup("<b>BUILDING 1 Room 201</b>")
        .addTo(markerGroup3);
    }

        if (vOpt == 3) {
    const marker1 = L.marker([40.87341926552625, -81.36812522954745])
        .bindPopup("<b>BUILDING 2 Room 200</b>")
        .addTo(markerGroup3);
    const marker2 = L.marker([40.87322198943936, -81.36779035251371])
        .bindPopup("<b>BUILDING 2 Room 201</b>")
        .addTo(markerGroup3);
    }

        if (vOpt == 4) {
            alert('attention! Building 3 does not have any upper floors! You may close this alert.')
            // for demonstration, Building 3 does not have any upper floors.
    }
});

/*
document.getElementById('mapvOption1').addEventListener('click', () => {

    map.setView([40.87365644631193, -81.36947012705369], 16);
    
    polygon.remove()

    polygon = L.polygon([
    [40.87502534231824, -81.37351793583642],
    [40.87162305942941, -81.37363250471276],
    [40.87179632806028, -81.36418577991014],
    [40.874899334958045, -81.36398788821464]
    ]).addTo(map);

    document.getElementById('mapoption1').addEventListener('click', () => {
        
        marker.clearLayers();

        marker = new L.marker([40.873319216031724, -81.3680492264267]).addTo(map);
        map.addLayer(marker);
        marker.bindPopup("<b>BUILDING 2 Basement").openPopup();
        marker = new L.marker([40.87334092945668, -81.36720504317931]).addTo(map);
        map.addLayer(marker);
        marker.bindPopup("<b>BUILDING 3 Basement").openPopup();

    })

    document.getElementById('mapoption2').addEventListener('click', () => {
        
        marker.clearLayers();

        marker = new L.marker([40.87450748918151, -81.36791246064942]).addTo(map);
        map.addLayer(marker);
        marker.bindPopup("<b>BUILDING 1").openPopup();
        marker = new L.marker([40.873319216031724, -81.3680492264267]).addTo(map);
        map.addLayer(marker);
        marker.bindPopup("<b>BUILDING 2").openPopup();
        marker = new L.marker([40.87334092945668, -81.36720504317931]).addTo(map);
        map.addLayer(marker);
        marker.bindPopup("<b>BUILDING 3").openPopup();

    })

    document.getElementById('mapoption3').addEventListener('click', () => {
        
        markerGroup.clearLayers();

        marker = new L.marker([40.87450748918151, -81.36791246064942]).addTo(map);
        map.addLayer(marker);
        marker.bindPopup("<b>BUILDING 1 Floor 2").openPopup();
        marker = new L.marker([40.873319216031724, -81.3680492264267]).addTo(map);
        map.addLayer(marker);
        marker.bindPopup("<b>BUILDING 2 Floor 2").openPopup();

    })

})

document.getElementById('mapvOption2').addEventListener('click', () => {
   
    map.setView([40.87455569085701, -81.36784463575852], 19 );

    polygon.remove()
    marker.remove()
    
    polygon = L.polygon([
    [40.874781202840694, -81.36825818269635],
    [40.87431654780062, -81.36822693663916],
    [40.874300796725166, -81.36731038562844],
    [40.87475757639193, -81.36731038562844]
    ]).addTo(map);

    document.getElementById('mapoption1').addEventListener('click', () => {
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 000").openPopup();
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 001").openPopup();
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 002").openPopup();
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 003").openPopup();

    })

    document.getElementById('mapoption2').addEventListener('click', () => {
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 000").openPopup();
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 001").openPopup();
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 002").openPopup();
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 003").openPopup();

    })

    document.getElementById('mapoption3').addEventListener('click', () => {
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 000").openPopup();
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 001").openPopup();
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 002").openPopup();
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 003").openPopup();

    })

})

document.getElementById('mapvOption3').addEventListener('click', () => {
   
    map.setView([40.87333809628368, -81.36806930178102], 19);

    polygon.remove()
    marker.remove()
    
    polygon = L.polygon([
    [40.87349534891367, -81.3685009308821],
    [40.87309388302426, -81.36851597742884],
    [40.87309713376999, -81.3676690717987],
    [40.8735181039924, -81.367660473772]
    ]).addTo(map);

    document.getElementById('mapoption1').addEventListener('click', () => {
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 000").openPopup();
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 001").openPopup();
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 002").openPopup();
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 003").openPopup();

    })

    document.getElementById('mapoption2').addEventListener('click', () => {
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 000").openPopup();
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 001").openPopup();
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 002").openPopup();
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 003").openPopup();

    })
    
    document.getElementById('mapoption3').addEventListener('click', () => {
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 000").openPopup();
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 001").openPopup();
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 002").openPopup();
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 003").openPopup();

    })
})
document.getElementById('mapvOption4').addEventListener('click', () => {
   
    map.setView([40.87333954140214, -81.36722259288585], 19);

    polygon.remove()
    marker.remove()
    
    polygon = L.polygon([
    [40.87348072064356, -81.36758739047389],
    [40.8731588979073, -81.36756589540714],
    [40.87315402179321, -81.3669661830447],
    [40.87346609237132, -81.36695543551131]
    ]).addTo(map);

    document.getElementById('mapoption1').addEventListener('click', () => {
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 000").openPopup();
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 001").openPopup();
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 002").openPopup();
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 003").openPopup();

    })
    
    document.getElementById('mapoption2').addEventListener('click', () => {
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 000").openPopup();
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 001").openPopup();
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 002").openPopup();
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 003").openPopup();

    })
    
    document.getElementById('mapoption3').addEventListener('click', () => {
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 000").openPopup();
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 001").openPopup();
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 002").openPopup();
        marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Basement: room 003").openPopup();

    })
})
*/
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);