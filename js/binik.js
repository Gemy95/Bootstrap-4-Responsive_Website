
$(document).ready(function()
{

	
	$(".img_from_eight").mouseover(function()
	 { 
	 	$(this).css({"width":"90%","opacity":"0.5"}); 

	 });

    $(".img_from_eight").mouseleave(function()
	 { 
	 	$(this).css({"width":"100%","opacity":"1"}); 

	 });




    $(".any_left_button").mouseover(function()
	 { 
	 	$(this).css({"background-color":"#36B7F8","color":"white"}); 

	 });

    $(".any_left_button").mouseleave(function()
	 { 
	 	$(this).css({"background-color":"white","color":"#36B7F8"}); 

	 });



    $(".any_right_button").mouseover(function()
	 { 
	 	 $(this).css({"background-color":"white","color":"#36B7F8"});

	 });

    $(".any_right_button").mouseleave(function()
	 { 
	 	
	 	$(this).css({"background-color":"#36B7F8","color":"white"}); 

	 });




     $(".any_div_orange").mouseover(function()
	 { 
	 	$(this).css({"background-color":"black","color":"white"}); 

	 });

    $(".any_div_orange").mouseleave(function()
	 { 
	 	$(this).css({"background-color":"orange","color":"white"}); 

	 });



     $(".any_div_red").mouseover(function()
	 { 
	 	$(this).css({"background-color":"black","color":"white"}); 

	 });

    $(".any_div_red").mouseleave(function()
	 { 
	 	$(this).css({"background-color":"#E25044","color":"white"}); 

	 });



     $(".any_div_green").mouseover(function()
	 { 
	 	$(this).css({"background-color":"black","color":"white"}); 

	 });

    $(".any_div_green").mouseleave(function()
	 { 
	 	$(this).css({"background-color":"#28AE61","color":"white"}); 

	 });



    $(".inside_four_circle").mouseover(function()
	 { 
	 	$(this).css({"background-color":"#F4F4F4"}); 

	 });

    $(".inside_four_circle").mouseleave(function()
	 { 
	 	$(this).css({"background-color":"#F5F7F8"}); 

	 });



    $(".notify").mouseover(function()
	 { 
	    $('audio#mysound')[0].play(); 

	 });

      
     $(".notify").mouseleave(function()
	 { 
	 	 $('audio#mysound')[0].pause();
	 	 $('audio#mysound')[0].currentTime=0;

	 });

    


});




