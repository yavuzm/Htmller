
/*Custom Styled Input file
	yavuz mercan 20/07/2013
*/
(function($){

$.fn.fileUpload = function(options){

	defaults = {
	
	buttonText:'Gözat',
	labelText:'Dosya Seçiniz'
	
	
	}

	var opt = $.extend(defaults, options);

	var items = $(this);
	items.each(function(index, element) {
      	/*items wrap then append fake ınput and button*/
		var uniq = $(this).attr('id');
		var capsul = 'file_'+uniq+'';
		
		 $(this).wrap('<div class="inputFile '+capsul+'" />');
		
		 $(this).wrap(function() {
			$(this).addClass('opacity0');
		
			$(this).parent()
				.append(
					$('<div class="fakeInput" />').append($('<span class="label" />').html(opt.labelText))
				).append('<input type="button" value="'+opt.buttonText+'">');		
		});
		
		
		/*Click Button*/
		$('.'+capsul).children('input[type="button"]').bind('click', function(){
				$(this).parent().children('#'+uniq).trigger('click');
		});
		
		/*Value write label*/
		$('.'+capsul).children('#'+uniq).change(function(e) {
			
			var fileValue = $('#'+uniq).val();
			fileValue = ClearFakePath(fileValue);
			
			$('#'+uniq).next().children().html(fileValue);
			
        });
		
		
	    
    });
	
	
	function ClearFakePath(fileValue){
	//console.log(fileValue);
	fileSplit = fileValue.split('\\');
	var fileval;
	if(fileSplit.length > 1){
		//console.log(fileSplit);
		fileval = fileSplit[fileSplit.length-1];
	}else {
		fileval = fileValue;
	}
	return fileval;
}
		
};
})(jQuery);