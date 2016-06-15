(function($){
    $(document).ready(function(){
        $('.pics').cycle('fade');
    });
})(jQuery);

$(document).ready(function(){
    $("#bus_101").attr("class", "selected");
    $("#Img_bus_101").show();

    $("#bus_101").click(function(){
        $("#bus_101").attr("class", "selected");
        $("#bus_103").attr("class", "");
        $("#bus_104").attr("class", "");
        $("#bus_1051").attr("class", "");
        $("#bus_R66").attr("class", "");

        $("#Img_bus_101").slideDown("slow");
        $("#Img_bus_103").slideUp("slow");
        $("#Img_bus_104").slideUp("slow");
        $("#Img_bus_1051").slideUp("slow");
        $("#Img_bus_R66").slideUp("slow");
    });

    $("#bus_103").click(function(){
      $("#bus_101").attr("class", "");
      $("#bus_103").attr("class", "selected");
      $("#bus_104").attr("class", "");
      $("#bus_1051").attr("class", "");
      $("#bus_R66").attr("class", "");

      $("#Img_bus_101").slideUp("slow");
      $("#Img_bus_103").slideDown("slow");
      $("#Img_bus_104").slideUp("slow");
      $("#Img_bus_1051").slideUp("slow");
      $("#Img_bus_R66").slideUp("slow");
    });

    $("#bus_104").click(function(){
      $("#bus_101").attr("class", "");
      $("#bus_103").attr("class", "");
      $("#bus_104").attr("class", "selected");
      $("#bus_1051").attr("class", "");
      $("#bus_R66").attr("class", "");

      $("#Img_bus_101").slideUp("slow");
      $("#Img_bus_103").slideUp("slow");
      $("#Img_bus_104").slideDown("slow");
      $("#Img_bus_1051").slideUp("slow");
      $("#Img_bus_R66").slideUp("slow");
    });

    $("#bus_1051").click(function(){
      $("#bus_101").attr("class", "");
      $("#bus_103").attr("class", "");
      $("#bus_104").attr("class", "");
      $("#bus_1051").attr("class", "selected");
      $("#bus_R66").attr("class", "");

      $("#Img_bus_101").slideUp("slow");
      $("#Img_bus_103").slideUp("slow");
      $("#Img_bus_104").slideUp("slow");
      $("#Img_bus_1051").slideDown("slow");
      $("#Img_bus_R66").slideUp("slow");
    });

    $("#bus_R66").click(function(){
      $("#bus_101").attr("class", "");
      $("#bus_103").attr("class", "");
      $("#bus_104").attr("class", "");
      $("#bus_1051").attr("class", "");
      $("#bus_R66").attr("class", "selected");

      $("#Img_bus_101").slideUp("slow");
      $("#Img_bus_103").slideUp("slow");
      $("#Img_bus_104").slideUp("slow");
      $("#Img_bus_1051").slideUp("slow");
      $("#Img_bus_R66").slideDown("slow");
    });
});
