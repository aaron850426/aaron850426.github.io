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
            ["一粒咖啡"]];
var random_value;
var arrayIndex;

function start(){
  rand_pic();
  initMap();
  var form3 = document.getElementById("three").checked;
  document.getElementById( "choose_button" ).addEventListener( "click", rand_pic, false );
  document.getElementById( "menu_button" ).addEventListener( "click", rand_pic_menu, false );
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
}

function rand_pic_menu(){
  document.getElementById( "menu_pics" ).innerHTML = "<img src = 'food_img/" + food[arrayIndex][random_value] + "_菜單.jpg'/>";
}

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: {lat: -34.397, lng: 150.644}
  });
  var geocoder = new google.maps.Geocoder();
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
