                            //
                            // EARLY BAD CODE
                            //

// NAV Buttons special logic(?)
// probably will be for activating the API on each page.
// for now, just displays annoying alerts when any page is loaded.
// document.getElementById('IRCbutton').addEventListener('click', () => {
   //
   // alert('DEBUG; testing javascript functionality. Dismiss this alert.');
// });
// document.getElementById('MAPbutton').addEventListener('click', () => {
    // Placeholder
    // alert('DEBUG; Map refresh will trigger once API is implemented. Right now this just tests that the javascript is connected successfully.');
    //
// });
// document.getElementById('CALbutton').addEventListener('click', () => {
    //
    // alert('test of javascript functionality. Alerts are actually kind of annoying, maybe I"ll go back to testing with logs')
// });

                            //
                            //CHATSTUFF
                            //

  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {

    // yes, github flags this as a "publically leacked secret".
    // No, this is not a secret.
    // This is, in fact, the public apiKey. I'm 82% sure.
    // Cause the code interprets it as the apiKey and I'm pretty sure it wouldn't work if I just plugged in my actual secret for it.
    // I've read several times that firebase apiKeys sometimes get false-flagged as secrets.
    // But also I'm a complete novice at webdevelopment so do tell me if I really did just leak my secret.

    apiKey: "AIzaSyAfDAXtTt0ANx-rC63sRcXWad4Y_GBVq10",
    authDomain: "webdev-final-chatclient.firebaseapp.com",
    projectId: "webdev-final-chatclient",
    storageBucket: "webdev-final-chatclient.firebasestorage.app",
    messagingSenderId: "793040092508",
    appId: "1:793040092508:web:e9646dc698c8e1c88c9599",
    measurementId: "G-52S6JE07E0"
  };

document.addEventListener('DOMContentLoaded', () => {

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const db = firebase.database();

    // const chatBox = document.getElementById('chat-box');
    const input = document.getElementById('message-input');
    const btn = document.getElementById('send-btn');

    // Listen for new messages?
    const messagesRef = db.ref('messages');

    // display messages in chat-box?
    messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      // debug  
      // console.log('Received message:', message);
      // console.log(chatBox);
      const msgDiv = document.createElement('div');
      msgDiv.textContent = message.text;
      if (message.sender === 'me') {
        msgDiv.style.color = 'blue';
        } else {
        msgDiv.style.color = 'lime';
        }
        // pretty sure this isn't working right now but would probably be fun if I did actually connect 2+ users

      document.getElementById('chat-box').appendChild(msgDiv);
      document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
      // originally used "chatBox" (above) but replaced it all with the longer version during troubleshooting.
      // I could probably put it back to save on the characters but I'm really afraid of touching something and the whole thing falling apart. Again.
    });

    // Send message?
    btn.onclick = () => {
      const text = input.value;
      if (text.trim() !== "") {
        messagesRef.push({ text: text });
        input.value = "";
      }
    };
});

                    //
                    // OLD code from an API I abandoned mid-development to start over with something else
                    //

/*
    (function() {
    var w = window;
    var ic = w.Intercom;
    if (typeof ic === "function") {
      ic('reattach_activator');
      ic('update', window.intercomSettings);
    } else {
      var d = document;
      var i = function() {
        i.c(arguments);
      };
      i.q = [];
      i.c = function(args) {
        i.q.push(args);
      };
      w.Intercom = i;
      function l() {
        var s = d.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://widget.intercom.io/widget/YOUR_APP_ID';
        var x = d.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
      }
      if (document.readyState === 'complete') {
        l();
      } else {
        window.addEventListener('load', l);
      }
    }
  })();
*/

                                //
                                //CALSTUFFS
                                //

    document.addEventListener('DOMContentLoaded', function() {
      var calendarEl = document.getElementById('cal-box');
      var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        editable: true,
        events: []
      });
      calendar.render();

      // Default action: calDo (calendar do = 1: add, 2: edit, 3: delete)
      var calDo = 1;

      //would work, but requires more tinkering than it feels worth for the ~5 lines it saves

      /* Set calDo based on selected radio button
      document.querySelectorAll('input[name="action"]').forEach(radio => {
        radio.addEventListener('change', () => {
          calDo = parseInt(radio.value);
        });
      });
        */

      // This block is more my style anyway.
    document.getElementById('caloption1').addEventListener('click', () => {
        calDo = 1
    });
    document.getElementById('caloption2').addEventListener('click', () => {
        calDo = 2
    });
    document.getElementById('caloption3').addEventListener('click', () => {
        calDo = 3
    });
      
    // Handle submit button click
    document.getElementById('caloption6').addEventListener('click', () => {
        const action = calDo;
        const dateStr = document.getElementById('caloption4').value;
        //debug
        // alert('datestring test' + dateStr)
        const eventName = document.getElementById('caloption5').value.trim();

        if (!dateStr || !eventName) {
          alert('Please enter both date and event name.');
          return;
        }
        
        // This one is a fun one.
        // had to do a whole workaround because apparently the Calendar API I chose does funny things with timezones,
        // Which actually resulted in the input date being 1 day off from where the scheduled event appears.
        // So this function pretty much handles that, converting timezones.
        // Of course, it used to only work in UTC, now it only works in OUR timezone.
        function getUTCDateString(dateStr) {
            const date = new Date(dateStr);
            const year = date.getUTCFullYear();
            const month = String(date.getUTCMonth() + 1).padStart(2, '0');
            const day = String(date.getUTCDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
            }
            const isoDate = getUTCDateString(dateStr);

        if (action == 1) {
          // Add Event
            const isoDate = getUTCDateString(dateStr);
            calendar.addEvent({
            title: eventName,
            start: isoDate,
            allDay: true
            });

        } else if (action == 2) {
          // Edit Event
          // Finds first event matching the date, renames it
          const events = calendar.getEvents();
          let eventFound = false;
          for (let ev of events) {
            if (ev.title == eventName || ev.start.toISOString().startsWith(dateStr)) {
              ev.setProp('title', eventName);
              ev.setStart(eventDate);
              eventFound = true;
              break;
            }
          }
          if (!eventFound) {
            alert('No matching event found to edit.');
          }

        } else if (action == 3) {
          // Delete Event
          // Only if both the event date and event name match.
          const events = calendar.getEvents();
          let deleted = false;
          for (let ev of events) {
            if (ev.title == eventName && ev.start.toISOString().startsWith(dateStr)) {
              ev.remove();
              deleted = true;
              break;
            }
          }
          if (!deleted) {
            alert('No matching event found to delete.');
          }
        }
      });
    });

    // Convert date string to ISO string at midnight UTC continued because funny fullcalendar
    function getUTCDateString(dateStr) {
    const date = new Date(dateStr);
    // Format as YYYY-MM-DDTHH:MM:SSZ (UTC)
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
    // ISO format for allDay events?
}

                                //
                                // early bad junk code, started from scratch
                                //

/*
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('cal-box');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth'
                    
    });
    calendar.render();
});           

//set default for which radio button is selected
var calDo = 1

document.getElementById('caloption1').addEventListener('click', () => {
    calDo = 1
});
document.getElementById('caloption2').addEventListener('click', () => {
    calDo = 2
});
document.getElementById('caloption3').addEventListener('click', () => {
    calDo = 3
});
document.getElementById('caloption4').addEventListener('', () => {
    
});
document.getElementById('caloption5').addEventListener('', () => {
    
});
document.getElementById('caloption6').addEventListener('', () => {
    
});
*/



                                //
                                //MAPSTUFFS
                                //

// DEFAULT POS. the buttons eventListeners should setView.
// hardcoding coords seems like best practice for this specifically, but I'm sure one could streamline it

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

//SELECT-O-MATIC

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

                                //
                                // old bad code. And I mean, REALLY abysmal.
                                //

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

