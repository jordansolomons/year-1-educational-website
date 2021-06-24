$(document).ready(function(){ 
    $(".planet-button1").click(function(){ // Executes when button 1 is clicked // 
        $(".planets-images").css("display","none"); // Removes images tab from being displayed //
        $(".planets-statistics").css("display","none"); // Removes statistics tab from being displayed //
        $(".planets-idk").css("display","none"); // Removes planets tab from being displayed //
        $(".planets-funfacts").css("display","block"); // Makes fun facts the only tab being displayed //
    });
    
    $(".planet-button2").click(function(){ // Executes when button 2 is clicked // 
        $(".planets-funfacts").css("display","none");
        $(".planets-statistics").css("display","none");
        $(".planets-idk").css("display","none");
        $(".planets-images").css("display","block");
    });
    
    $(".planet-button3").click(function(){ // Executes when button 3 is clicked // 
        $(".planets-images").css("display","none");
        $(".planets-idk").css("display","none");
        $(".planets-funfacts").css("display","none");
        $(".planets-statistics").css("display","block");
    });
    
    $(".planet-button4").click(function(){ // Executes when button 4 is clicked // 
        $(".planets-images").css("display","none");
        $(".planets-funfacts").css("display","none");
        $(".planets-statistics").css("display","none");
        $(".planets-idk").css("display","block");
    });
});
