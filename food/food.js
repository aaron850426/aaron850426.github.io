(function($){
    $(document).ready(function(){
        $('.pics').cycle('fade');

        $("#choose_button").click(function(){
            $("#menu_pics").hide("slow");
        });

        $("#menu_button").click(function(){
            $("#menu_pics").show("slow");
        });
    });
})(jQuery);

var food = [["八方雲集", "QQ魯肉飯", "雅盧"],
            ["河豚很多", "竹間", "義家之煮"],
            ["美而美早餐", "美芝城早餐"],
            ["一粒咖啡", "comebuy", "清心"]];
var address = [["202基隆市中正區新豐街416號", "202基隆市中正區新豐街405號", "202基隆市中正區北寧路154巷23號"],
            ["202基隆市中正區正濱路88號", "201基隆市信義區深溪路80號", "201基隆市信義區深溪路73號"],
            ["202基隆市中正區祥豐街843號", "202基隆市中正區祥豐街849號" ],
            ["202基隆市中正區北寧路242-6號", "20248基隆市中正區中正路820號", "基隆市中正區中正路782號"]];
var random_value;
var arrayIndex;

function start(){
  rand_pic();
  initMap();
  var form3 = document.getElementById("three").checked;
  document.getElementById( "choose_button" ).addEventListener( "click", rand_pic, false );
}
window.addEventListener( "load", start, false );

function rand_pic(){
  var form_name = document.getElementById('form1');
  if(form1.foodItem[0].checked){
    arrayIndex = 0;
  }else if(form1.foodItem[1].checked){
    arrayIndex = 1;
  }else if(form1.foodItem[2].checked){
    arrayIndex = 2;
  }else if(form1.foodItem[3].checked){
    arrayIndex = 3;
  }
  random_value = Math.floor( Math.random() * food[arrayIndex].length );
  document.getElementById( "choose_pics" ).innerHTML = "<img src = 'food_img/" + food[arrayIndex][random_value] + "_招牌.jpg'/>";
  document.getElementById("address").value = address[arrayIndex][random_value];
  geocodeAddress(geocoder, map);
}


// Modal Image Gallery
function onClick() {
  document.getElementById("img01").src = "food_img/" + food[arrayIndex][random_value] + "_菜單.jpg";
  document.getElementById("modal01").style.display = "block";
}

var map;
var geocoder;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: {lat: -34.397, lng: 150.644}
  });
  geocoder = new google.maps.Geocoder();
  geocodeAddress(geocoder, map);
  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });
}

function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
