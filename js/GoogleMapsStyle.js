var map;
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.349360, lng: -121.939148},
    zoom:16,
    styles: [
        {
            featureType: 'poi.school',
            elementType: 'geometry',
            stylers: [{color: '#81d68c'}]
        },
        {
            featureType: 'poi.business',
            stylers: [{visibility: 'off'}]
        },
        {
            featureType: 'poi.place_of_worship',
            stylers: [{visibility: 'off'}]
        },
        {
            featureType: 'poi.attraction',
            stylers: [{visibility: 'off'}]
        }]
    });

    var SantaClaraCoords = [
        {lat: 37.346733,  lng:-121.941278 },
        {lat:37.347449, lng: -121.938510 },
        {lat:37.346743,  lng: -121.937632 },
        {lat:37.345651,lng:  -121.935819 },
        {lat: 37.345344, lng: -121.933834 },
        {lat: 37.348810, lng: -121.932642 },
        {lat: 37.352230,  lng: -121.937706 },
        {lat: 37.350192,  lng: -121.943403 },
        {lat: 37.346733,  lng:-121.941278 },
    ];

    var SCOutline = new google.maps.Polyline({
        path: SantaClaraCoords,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });

    SCOutline.setMap(map);
}