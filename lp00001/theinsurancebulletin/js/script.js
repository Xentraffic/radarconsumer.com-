var fillInPage = (function() {
    var updateRegionText = function(geoipResponse) {
  
      /*
       * It's possible that we won't have any names for this city.
       * For language codes with a special character such as pt-BR,
       * replace names.en with names['pt-BR'].
      */
      var regionName = geoipResponse.subdivisions ? geoipResponse.subdivisions[0].names.en : '';
  
      document.getElementById('title-region').innerHTML = 'in ' + regionName;
      document.getElementById('subtitle-region').innerHTML = regionName;
    };
  
    var onSuccess = function(geoipResponse) {
      updateRegionText(geoipResponse);
    };
  
    // If we get an error, we will display an error message
    var onError = function(error) {
      document.getElementById('title-region').innerHTML = ''
      document.getElementById('subtitle-region').innerHTML = ''
    };
  
    return function() {
      if (typeof geoip2 !== 'undefined') {
        geoip2.city(onSuccess, onError);
      } else {
        document.getElementById('city').innerHTML = 'a browser that blocks GeoIP2 requests'
      }
    };
  }());
  
  fillInPage();