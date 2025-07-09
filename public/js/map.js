mapboxgl.accessToken = mapToken;
const listing = JSON.parse(document.getElementById('listing-data').textContent);
const map = new mapboxgl.Map({
     container: 'map', 
     style: "mapbox://styles/mapbox/streets-v12",
     center: listing.geometry.coordinates,
     zoom: 9 
    });       
    console.log("Coordinates:", listing?.geometry?.coordinates);
    const marker = new mapboxgl.Marker({color:'red'})
        .setLngLat(listing.geometry.coordinates)
        .setPopup(
            new mapboxgl.Popup({offset: 25})
            .setHTML(`<h1>${listing.title}</h1><p>Exact Location will be  provided after booking</p>`))
        .addTo(map);

       

// console.log(coordinates);
// const marker = new mapboxgl.Marker()
// .setLngLat(coordinates)
// .addTo(map);
        