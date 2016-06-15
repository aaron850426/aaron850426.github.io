(function($){
    $(document).ready(function(){
        $('.pics').cycle('fade');
    });
})(jQuery);

$(document).ready(function(){
    $("#Peace_Island").click(function(){
        $("#Peace_Island_text").slideToggle("slow");
        $("#nightmarket_text").slideUp("slow");
        $("#Jiu_Fen_text").slideUp("slow");
        $("#Lotus_Valley_text").slideUp("slow");
        $("#museum_text").slideUp("slow");
        $("#Keelung_port_text").slideUp("slow");
    });

    $("#nightmarket").click(function(){
        $("#Peace_Island_text").slideUp("slow");
        $("#nightmarket_text").slideToggle("slow");
        $("#Jiu_Fen_text").slideUp("slow");
        $("#Lotus_Valley_text").slideUp("slow");
        $("#museum_text").slideUp("slow");
        $("#Keelung_port_text").slideUp("slow");
    });

    $("#Jiu_Fen").click(function(){
        $("#Peace_Island_text").slideUp("slow");
        $("#nightmarket_text").slideUp("slow");
        $("#Jiu_Fen_text").slideToggle("slow");
        $("#Lotus_Valley_text").slideUp("slow");
        $("#museum_text").slideUp("slow");
        $("#Keelung_port_text").slideUp("slow");
    });

    $("#Lotus_Valley").click(function(){
        $("#Peace_Island_text").slideUp("slow");
        $("#nightmarket_text").slideUp("slow");
        $("#Jiu_Fen_text").slideUp("slow");
        $("#Lotus_Valley_text").slideToggle("slow");
        $("#museum_text").slideUp("slow");
        $("#Keelung_port_text").slideUp("slow");
    });

    $("#museum").click(function(){
        $("#Peace_Island_text").slideUp("slow");
        $("#nightmarket_text").slideUp("slow");
        $("#Jiu_Fen_text").slideUp("slow");
        $("#Lotus_Valley_text").slideUp("slow");
        $("#museum_text").slideToggle("slow");
        $("#Keelung_port_text").slideUp("slow");
    });

    $("#Keelung_port").click(function(){
        $("#Peace_Island_text").slideUp("slow");
        $("#nightmarket_text").slideUp("slow");
        $("#Jiu_Fen_text").slideUp("slow");
        $("#Lotus_Valley_text").slideUp("slow");
        $("#museum_text").slideUp("slow");
        $("#Keelung_port_text").slideToggle("slow");
    });
});
