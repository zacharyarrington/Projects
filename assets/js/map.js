mapboxgl.accessToken = 'pk.eyJ1IjoiemFjaGFyeXphYyIsImEiOiJja3BqemN3a3cwbnhpMnFvZ3JnM2p3NjlsIn0.5D-_KORCVRFBR3e5CJ54NA';

var map;

function initMap(){
    map = new mapboxgl.Map({
        container: 'map',
        // style: 'mapbox://styles/mapbox/streets-v11'
        // style: 'mapbox://styles/mapbox/dark-v10',
        // center: [getRandomInRange(-180, 180, 3), getRandomInRange(-90, 90, 3)],
        center: world.features[getRandomInt(0, 297)].geometry.coordinates,
        zoom: 4
    });

    setInterval(el => {
        map.panBy([.5, 0], {
            easing: easing
        });
    }, 500)
}



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(world.features[getRandomInt(0, 297)])

function easing(t) {
    return t * (4 - t);
}

