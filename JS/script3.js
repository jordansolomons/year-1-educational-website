$(document).ready(function(){
    $(".sun-moon-button1").click(function(){ // Executes when button 1 is clicked // 
        $(".sun-moon-content2").css("display", "none"); // Removes content 2 from being displayed //
        $(".sun-moon-content3").css("display", "none"); // Removes content 3 from being displayed  //
        $(".sun-moon-content1").css("display", "block"); // Makes content 1 the only content being displayed //
        $(".sun-moon-content").css("border", "2px solid white"); // Adds a border to content 1 // 
    });

    $(".sun-moon-button2").click(function(){ // Executes when button 2 is clicked // 
        $(".sun-moon-content1").css("display", "none");
        $(".sun-moon-content3").css("display", "none");
        $(".sun-moon-content2").css("display", "block");
        $(".sun-moon-content").css("border", "2px solid white");
    });

    $(".sun-moon-button3").click(function(){ // Executes when button 3 is clicked // 
        $(".sun-moon-content1").css("display", "none");
        $(".sun-moon-content2").css("display", "none");
        $(".sun-moon-content3").css("display", "block");
        $(".sun-moon-content").css("border", "none"); // Removes border as the video does not need one // 
    });
});