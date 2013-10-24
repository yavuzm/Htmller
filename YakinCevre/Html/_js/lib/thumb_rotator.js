
/*Custom Image Rotater
	yavuz mercan 11/09/2013
*/
(function($){

$.fn.imageRotator = function(options){

	defaults = {
	next: $(this).parent().parent().find('.next'),
	prev: $(this).parent().parent().find('.prev'),
	container: 	$(this),
	visible: 5
	}

	var opt = $.extend(defaults, options);
	var items = $(this).children('li');
	var w =  items.outerWidth(true);
	var totalWidth = items.length * w;
	var count = 0;
	
	items.parent().parent().css({
			'width': opt.visible * w,
			'position':'relative'
		});
	
	items.parent().css({
		'width':totalWidth,
		'position':'absolute',
		'left':'0px'
		
		});
	
	opt.next.on('click',function(){
		
		if(count < items.length - opt.visible ){
			if(opt.container.queue('fx').length < 1){
				opt.container.stop(true,true).animate({'left':'-='+ w});	
				count++;
			}
		}
	});
	
	opt.prev.on('click',function(){
		
		if(count != 0 && count > 0){
			if(opt.container.queue('fx').length < 1){
				opt.container.stop(true,true).animate({'left':'+='+ w});	
				count--;
			}
		}
	});
		
};
})(jQuery);
