let map;
let infoWindow;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 14
    });

    infoWindow = new google.maps.InfoWindow();

    // Try HTML5 geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                infoWindow.setPosition(pos);
                infoWindow.setContent('Your Location');
                infoWindow.open(map);
                map.setCenter(pos);

                // Call a function to fetch and display nearby therapists
                fetchNearbyTherapists(pos);
            },
            () => {
                handleLocationError(true, infoWindow, map.getCenter());
            }
        );
    } else {
        // Browser doesn't support geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

// function fetchNearbyTherapists(userLocation) {
//     const radius = 5000; // Search radius in meters (adjust as needed)
//     const types = 'health|doctor|psychologist'; // Adjust the types based on your requirements

//     const placesService = new google.maps.places.PlacesService(map);

//     placesService.nearbySearch({
//         location: userLocation,
//         radius: radius,
//         type: types
//     }, (results, status) => {
//         if (status === google.maps.places.PlacesServiceStatus.OK) {
//             for (let i = 0; i < results.length; i++) {
//                 createMarker(results[i]);
//             }
//         }
//     });
// }
function fetchNearbyTherapists(userLocation) {
    const radius = 5000; // Search radius in meters (adjust as needed)
    const types = 'health|doctor|psychologist'; // Adjust the types based on your requirements

    const placesService = new google.maps.places.PlacesService(map);

    placesService.nearbySearch({
        location: userLocation,
        radius: radius,
        type: types
    }, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        } else {
            console.error('Places API request failed with status:', status);
        }
    });
}


function createMarker(place) {
    const marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', () => {
        infoWindow.setContent(place.name);
        infoWindow.open(map, marker);
    });
}

