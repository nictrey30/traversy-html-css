var platform = new H.service.Platform({
  apikey: 'fHZbJkoZ7797Og2t4Snj4IBr7Wjf1SJc_65IpTUNHUY'
});

// Obtain the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
  document.querySelector('.mapContainer'),
  defaultLayers.vector.normal.map,
  {
    zoom: 10,
    center: { lat: 44.93, lng: 26.01 }
  }
);
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});

// Sticky menu background
window.addEventListener('scroll', () => {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});
