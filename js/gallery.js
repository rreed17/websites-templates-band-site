$(document).ready( function()
{
	$(".gallery-container div").each(function(i)
	{		
		$(this).append("<img src='img/gallery/gallery_image_"+(++i)+".jpg'/>");
	});
	
	$("img").error(function ()
	{ 
		$(this).hide();
	});
});