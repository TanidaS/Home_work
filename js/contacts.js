function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(56.9501901, 24.1020694),
        zoom:18,
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }