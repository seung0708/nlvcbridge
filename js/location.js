var map, marker, mapLabel;

function initMap() {
    
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 34.1306434, lng: -118.2666877 },
        zoom: 15,
        disableDefaultUI: true,
        zoomControl: true,
        styles: [
            {
                elementType: 'geometry',
                stylers: [{color: 'white'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#fad778'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#ffffff'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#708090'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#ffffff'}]
            },
            {
                featureType: 'poi',
                stylers: [{visibility: 'off'}]
            }
           
        ]
       
    });

    marker = new google.maps.Marker({
        position: { lat: 34.1306434, lng: -118.2666877 }, 
        map: map,
        animation: google.maps.Animation.DROP,
        icon: "./assets/images/bye2.png"
    });
    
    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }
}

