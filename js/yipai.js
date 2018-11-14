window.onload = function() {

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  });


	$(".top_1").mouseover(function(){
		$(".top_scoll1").show();
	});
	$(".top_scoll1").mouseover(function(){
		$(".top_scoll1").show();
	});
	$(".top_scoll1").mouseout(function(){
		$(".top_scoll1").hide();
	});
	$(".top_1").mouseout(function(){
		$(".top_scoll1").hide();
	});
}; 



$(".pic ul li").hover(function(){
	$(this).stop(true).animate({width:"789px"},500).siblings().stop(true).animate({width:"100px"},500);
});