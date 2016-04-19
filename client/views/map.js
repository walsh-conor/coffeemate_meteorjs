Meteor.startup(function() {  
  GoogleMaps.load();
});

Template.map.helpers({  
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(52.2475523,-7.1481352),
        zoom: 12
      };
    }
  }
});


Template.map.onCreated(function() {  
  var self = this;

  GoogleMaps.ready('map', function(map) {

    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });

    // Create and move the marker when latLng changes.
   google.maps.event.addListener(map.instance, 'click', function(event) {
    	var latLng = event.latLng;

      // If the marker doesn't yet exist, create it.
      if (! marker) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(latLng.lat, latLng.lng),
          map: map.instance
        });
         marker.setPosition(latLng);
         return latLng;
      }
      // The marker already exists, so we'll just change its position.
      else {
        marker.setPosition(latLng);
        return latLng;
      }
    });
  });
});