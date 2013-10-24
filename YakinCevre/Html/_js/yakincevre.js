

/*________________________________

INDEX
________________________________

1- Weather
2- Mainpage Slider
3- Popular Ticker
4- User Comment
5- PlaceHolder
6- BreadCrumb Add Active
7- Select Chosen
8- Pretty Checkboxes
9- Uye Hesabi Photo Gallery
10- Fancybox
11- Accordion
12- File Input style
13 - Top Scrolling Btn
14 - Haritada İşaretle
15 - CK Editor
*/






/*--------------------------
Function
----------------------------*/
SelectBoxTransform = function(el, width, searchVal, returnVal) {
	el.chosen({width: width, disable_search:searchVal}).change(function() {
		var val = $(this).val();

		if(returnVal && typeof (returnVal) === "function" ){
			returnVal(val);
		}
	});
}

function larg(){
	var wWidth = $(window).width();
	if(wWidth < 1023){
		$('.base_slider').children('.wrapper').addClass('min1024');
	}else{
		$('.base_slider').children('.wrapper').removeClass('min1024');
	}
}


/*--------------------------
Document Ready
----------------------------*/

$(window).resize(larg);	

$(document).ready(function(e) {

larg();

/* 1- Weather */
if(typeof $.simpleWeather == 'function'){
	$.simpleWeather({
		woeid: '2347289',
		unit: 'c',
		image : '_img/weather/',
		success: function(weather) {
			html = '<a href="javascript:;" style="background:url(_img/weather/white/'+weather.code+'.png) 0 0 no-repeat;">'+weather.temp+'<sup>&bull;</sup></a>';
			html += '<a href="javascript:;" style="background:url(_img/weather/white/humidity.png) 0 6px no-repeat;">'+weather.humidity+'<sup>%</sup></a>';
			$(".weather").html(html);
		},
		error: function(error) {
			$(".weather").html('<p>'+error+'</p>');
		}
	});
}
/* 2- Mainpage Slider */
if(typeof $.fn.slidesjs == 'function'){
	$('.slider_container').slidesjs({
        width: 940,
        height: 340,
        navigation: {
          effect: "fade"
        },
        pagination: {
          effect: "fade"
        },
        effect: {
          fade: {
            speed: 400,
			crossfade: true
          }
        }
    });
}
	
/* 3- Popular Ticker */
if(typeof $.fn.newsticker == 'function'){
	$('.newsticker_scroll_search').newsticker( {
	  'style'         : 'scroll',
	  'reverseOrder'  : true,
	  'scrollSpeed'   : 25,        
	  'autoStart'     : true,
	  'slideSpeed'    : 300,
	  'slideEasing'   : 'swing',
	  'showControls'  : true,
	  'pauseOnHover'  : true
	});
	
	$('.newsticker_scroll_firm').newsticker( {
	  'style'         : 'scroll',
	  'reverseOrder'  : true,
	  'scrollSpeed'   : 25,        
	  'autoStart'     : true,
	  'slideSpeed'    : 300,
	  'slideEasing'   : 'swing',
	  'showControls'  : true,
	  'pauseOnHover'  : true
	});
}
	
/* 4- User Comment */	
	var cLi = $('.comment_outer ul li'),
		cLiLength = cLi.length;
	
	for(var i=0; i< cLiLength; i++){
		$('.base_popularcomment .bullets').append($('<a href="javascript:;" data-i="'+i+'"></a>'));
	}
	$('.base_popularcomment .bullets a').eq(0).addClass('selected');
		
	$('.base_popularcomment .bullets').on('click','a', function(){
		var index = $(this).index();
		$(this).addClass('selected').siblings().removeClass('selected');
		cLi.eq(index).fadeIn().siblings().fadeOut();
	});

/* 5- PlaceHolder */
	if(typeof $.fn.placeholder == 'function'){
		$('input, textarea').placeholder();
	}
	
/* 6- BreadCrumb Add Active */
var brLiL = $('.bread_crumb ul li').length -1;
$('.bread_crumb ul li').eq(brLiL).addClass('active');



/* 7- Select Chosen  */
if( typeof $.fn.chosen === 'function' ){
	var selectbox0 = new SelectBoxTransform($('.by_category select'), '165px', true, /*>>> optivan value */function(val) {});
	var selectbox1 = new SelectBoxTransform($('#search_category'), '260px', true, /*>>> optivan value */function(val) {});
	var selectbox2 = new SelectBoxTransform($('#uyelik_bilgileri select'), '68px', true, /*>>> optivan value */function(val) {});
	var selectbox3 = new SelectBoxTransform($('#gunvelik_ayarlari select'), '340px', true, /*>>> optivan value */function(val) {});
	var selectbox4 = new SelectBoxTransform($('#add_firma .adres'), '210px', true, /*>>> optivan value */function(val) {});
	var selectbox5 = new SelectBoxTransform($('#ustFirma'), '435px', true, /*>>> optivan value */function(val) {});
	var selectbox6 = new SelectBoxTransform($('#add_firma .kategori'), '170px', false, /*>>> optivan value */function(val) {});
	var selectbox7 = new SelectBoxTransform($('#add_product #price_type'), '90px', true, /*>>> optivan value */function(val) {});
	var selectbox8 = new SelectBoxTransform($('#add_product .sel_full'), '554px', true, /*>>> optivan value */function(val) {});
	var selectbox9 = new SelectBoxTransform($('#add_product #sel_sure'), '210px', true, /*>>> optivan value */function(val) {});
		
}

/* 8- Pretty Checkboxes  */
if( typeof $.fn.prettyCheckboxes === 'function' ){
	$(".sidebar_box input[type='checkbox']").prettyCheckboxes({
		checkboxWidth : 15,
		checkboxHeight : 15
	});
	
	
	$("#uyelik_bilgileri input[type='radio'], #gunvelik_ayarlari input[type='radio']").prettyCheckboxes();
	$('#abonelik input[type="radio"]').prettyCheckboxes();
	$('.tabbed_box input[type="checkbox"], .message input[type="checkbox"]').prettyCheckboxes();
	
	$('#add_firma input[type="checkbox"]').prettyCheckboxes();
	
	$('#add_product input[type="radio"], #add_product input[type="checkbox"]').prettyCheckboxes();
	
	$('.register_box input[type="checkbox"]').prettyCheckboxes();
}

if(typeof $.fn.slider == 'function'){
	$(".master").slider({
		value:1,
		max: 246,
		min: 1,
		step: 24.6,
		orientation: "horizontal",
		range:'min',
		animate: true
	});
}

/*$(".newsticker_controls").on('mouseleave', function(){
	$('.newsticker_scroll_search').newsticker('resume');
});
*/



/*9- Uye Hesabi Photo Gallery*/
	if(typeof $.fn.imageRotator == 'function'){
		$('.user_photos ul').imageRotator({visible:5});
	}

/*10- Fancybox*/
	if(typeof $.fn.fancybox == 'function'){
		$('.fancybox').fancybox({padding:0, margin:0, radius:0});
	}

/*11- Accordion*/
	$('.accordion dt').on('click',function(){
		$(this).toggleClass('active');
		$(this).next().slideToggle(600,'',function(){
			$(this).prev().children('ul').fadeToggle('fast');
		});
	});

/*12- File Input style*/
	if(typeof $.fn.fileUpload == 'function'){
		$('#add_firma input[type="file"]').fileUpload();
		$('#add_product input[type="file"]').fileUpload();
	}
	

/*13 - Top Scrolling Btn*/
	if(typeof $.fn.carouFredSel == 'function'){
		$('.top_scrolling_btn ul').carouFredSel({
			direction:'up',
			circular:true,
			scroll:{
				pauseOnHover:true,
				easing:'swing'
			}
			
		});
		
	$('#top_firms').carouFredSel({
			direction:'left',
			circular:false,
			auto:false,
			scroll:{
				pauseOnHover:true,
				easing:'swing',
				items: 5,
			},
			items :{
				visible:5	
			},
			prev : {
				button: $('.top_firm_control .prev')
			},
			next : {
				button: $('.top_firm_control .next')
			}
			
		});
		
	
		
	}
	

	var checkstatus = true;
	var lbl = $('#all_checked').parent().parent().next().find('label');
	$('label[for="all_checked"]').on('click', function () {
		if(checkstatus == true){
			checkstatus = false;
			lbl.not('.checked').trigger('click');
		}else{
			checkstatus = true;
			lbl.filter('.checked').trigger('click');
		}
	});
		
		
	
	



/*14 - Haritada İşaretle*/
$('.pin_map, .whereis input[type="button"]').click(function(){
		$.fancybox({padding:0, margin:0,
			content:'<div id="map_canvasPopup" style="width:450px; height:450px;"></div>',
			beforeShow   : function() {
				add_pin();
			}
		});
});



/*15 - CK Editor*/
if(typeof $.fn.ckeditor == 'function'){
$( '#editor1' ).ckeditor();
}






if(typeof $.fn.datepicker == 'function'){
	
	jQuery(function($){
        $.datepicker.regional['tr'] = {
                closeText: 'kapat',
                prevText: '&#x3c;geri',
                nextText: 'ileri&#x3e',
                currentText: 'bugün',
                monthNames: ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran',
                'Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'],
                monthNamesShort: ['Oca','Şub','Mar','Nis','May','Haz',
                'Tem','Ağu','Eyl','Eki','Kas','Ara'],
                dayNames: ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'],
                dayNamesShort: ['Pz','Pt','Sa','Ça','Pe','Cu','Ct'],
                dayNamesMin: ['Pz','Pt','Sa','Ça','Pe','Cu','Ct'],
                weekHeader: 'Hf',
                dateFormat: 'dd.mm.yy',
                firstDay: 1,
                isRTL: false,
                showMonthAfterYear: false,
                yearSuffix: ''};
        $.datepicker.setDefaults($.datepicker.regional['tr']);
});
	
	$( "#start_date" ).datepicker({
		showOn: "button",
		buttonImage: "_img/calender.png",
		buttonImageOnly: true,
		defaultDate: "+1w",
		changeMonth: true,
		numberOfMonths: 1,
		onClose: function( selectedDate ) {
		$( "#end_date" ).datepicker( "option", "minDate", selectedDate );
	}
	});
	$( "#end_date" ).datepicker({
		showOn: "button",
		buttonImage: "_img/calender.png",
		buttonImageOnly: true,
		defaultDate: "+1w",
		changeMonth: true,
		numberOfMonths: 1,
		onClose: function( selectedDate ) {
		$( "#start_date" ).datepicker( "option", "maxDate", selectedDate );
	}
	});
	
	
	$( ".datepicker" ).datepicker({
		showOn: "button",
		buttonImage: "_img/calender.png",
		buttonImageOnly: true
	});

}


if($('#other_detail').length > 0){
	var t = $('#other_detail');
	var limit = 50;
	t.on('keypress',function(){
		if($(this).val().length <= 60){
			$(this).prev().fadeIn();
		}
		else{
			$(this).prev().fadeOut();
		}
	}).on('blur', function(){
		if($(this).val().length == 0 ){
			$(this).prev().fadeOut();
		}
	});
	
}


});