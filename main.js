mapboxgl.accessToken = config.MAPBOX_ACCESS_TOKEN;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/klee0511/cll1kf5on00vw01p7aiwn31m9',
    zoom: 15.5,
    center: [126.98957897888896, 37.54035898378337],
    maxZoom: 20,
    // maxBounds: [[126.98185, 37.53309], [126.99674, 37.54741]]
});



map.on('load', function () {
    map.addLayer({
        'id': 'priceData',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/gyunglidan_gil_price.geojson'
        },
        'paint': {
            'fill-color': ['step', ['get', 'Price_2020'],
                '#ffffff', 
                2000, '#ccedf5',
                5000, '#99daea',
                8000, '#66c7e0',
                11000, '#33b5d5',
                14000, '#00a2ca'],
            'fill-opacity': ['case', ['==', ['get', 'Price_2020'], null], 0, 0.65]
        }
    }, 'waterway');

    // // This is the function that finds the first symbol layer
    // let layers = map.getStyle().layers;
    // let firstSymbolId;
    //     for (var i = 0; i < layers.length; i++) {
    //     console.log(layers[i].id); // This is the line of code that we are adding
    //     if (layers[i].type === 'symbol') {
    //         firstSymbolId = layers[i].id;
    //         break;
    //     }
    // }
});

