'use strict';


mapboxgl.accessToken = 'pk.eyJ1IjoibW9uYW11cnBoeSIsImEiOiJjbWFjbzVhc28wNWViMnNvajMwYTFkcmJiIn0.DqOotGc3wUnCdSU6EVvWbA';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [0, 0],
    zoom: 15,
    pitch: 40
});

const marker = new mapboxgl.Marker({color: '#af79ed'});
const options = {
    enableHighAccuracy: true
}

function getLocation(position) {
    let { latitude, longitude } = position.coords;
    map.setCenter([longitude,latitude]);
    marker.setLngLat([longitude, latitude]).addTo(map);
}

function errorHandler() {
    console.log('Unable to retrieve your location');
}

function disabledOptions() {
    map.dragPan.disable();
    map.keyboard.disable();
    map.scrollZoom.disable();
    map.doubleClickZoom.disable();
    map.touchZoomRotate.disable();
}

function displayPosition() {
    if('geolocation' in navigator){
        navigator.geolocation.watchPosition(getLocation, errorHandler, options);
    } else {
        console.log('Geolocation is not supported by this browser.');
    }
}

displayPosition();

