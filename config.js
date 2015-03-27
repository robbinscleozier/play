var url = window.location.href;

if (url.indexOf("localhost") != -1) {
  var serviceURL = "http://www.complex.com/tv/api/";
} 

var app_name = "ComplexTV";

var ComplexTV = {};
ComplexTV.base_url = serviceURL;