// Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 6.616980532650674, lng: 3.367172186390563};
  // centered map on location
  const map = new google.maps.Map(document.querySelector('.map')
  , {
    zoom:14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });

}

//  Sticky Menu Background

window.addEventListener('scroll', function() {
  if  (this.window.scrollY > 150) {
    this.document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

// Smooth scrolling

$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !=='') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
}
);
