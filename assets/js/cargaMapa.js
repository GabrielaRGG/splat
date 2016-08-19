 var map;
var markers = [];
var geocoder = new google.maps.Geocoder();
var infoWindow = null;
 var marker= null;
var f = new Date();
var date = f.toISOString().slice(0,10); // "2014-05-12"
document.getElementById('txtfecha').value =date;
 
function openInfoWindow(marker) {
    var markerLatLng = marker.getPosition();
     document.getElementById('unolat').value = markerLatLng.lat();
    document.getElementById('unolong').value = markerLatLng.lng();
    infoWindow.setContent([
        'La posicion del marcador ha sido actualizada'
    ].join(''));
    infoWindow.open(map, marker);
}

window.onload = function() {
    var myLatlng = new google.maps.LatLng(20.0843785, -98.36926340000002);
    var options = {
        zoom: 12,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    map = new google.maps.Map(document.getElementById('map'), options);
    infoWindow = new google.maps.InfoWindow();
  //  map.addListener('click', function(event) {
   // addMarker(event.latLng);
//  });

  // Adds a marker at the center of the map.
 // addMarker(myLatlng);



       document.getElementById('search').onclick = function() {
          setMapOnAll(null);
            clearMarkers();
  markers = [];
            // Obtiene la ubicación (string) a georreferenciar

            var location = document.getElementById('location').value;

            // Inicia el proceso de georreferenciación (asíncrono)

            processGeocoding(location, addMarkers);

            // Detiene el procesamiento del evento

            return false;
        }
    } // Fin del método window.onload

     function processGeocoding(location, callback)
    {
        // Propiedades de la georreferenciación
    //marker.setMap(null);
        var request = {
            address: location
        }

        // Invocación a la georreferenciación (proceso asíncrono)

        geocoder.geocode(request, function(results, status) {

            /*
             * OK
             * ZERO_RESULTS
             * OVER_QUERY_LIMIT
             * REQUEST_DENIED
             * INVALID_REQUEST
             */

            // Notifica al usuario el resultado obtenido

        //    document.getElementById('message').innerHTML = "Respuesta obtenida: " + status;

            // En caso de terminarse exitosamente el proyecto ...

            if(status == google.maps.GeocoderStatus.OK)
            {
                // Invoca la función de callback

                callback (results);

                // Retorna los resultados obtenidos

                return results;
            }

            // En caso de error retorna el estado

            return status;
        });
    }

// Adds a marker to the map and push to the array.
/*function addMarker(location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
  markers.push(marker);
}
*/

  function addMarkers(geocodes)
    {
                
        for(i=0; i<geocodes.length; i++)
        {
            // Centra el mapa en la nueva ubicación
            map.setCenter(geocodes[i].geometry.location);
            // Valores iniciales del marcador
             marker = new google.maps.Marker({
                //position: myLatlng,
                draggable: true,
                position: geocodes[i].geometry.location,
                map: map,
                title: "Aquí esta el problema!!!"
            });
       
            // Establece la ubicación del marcador
 //marker.setPosition(geocodes[i].geometry.location);
           markers.push(marker);

            // Establece el contenido de la ventana de información
             document.getElementById('unolat').value = geocodes[i].geometry.location.lat();
             document.getElementById('unolong').value = geocodes[i].geometry.location.lng();
          // Asocia el evento de clic sobre el marcador con el despliegue
            // de la ventana de información

            google.maps.event.addListener(marker, 'click', function(event) {
               // infoWindow.open(map, marker);
               openInfoWindow(marker);
            });
        }
    }

// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  markers = [];
}