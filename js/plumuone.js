$(function(){ 
  waitForWebfonts(['NotoSansCJKkr'], function() {
    $('.loading').delay(100).fadeOut(function(){
      $(this).remove();
      $('.main-banner .wrap').addClass('on');
    })
  });
  // 스와이프
  // bg-slide
  var bgSwiper = new Swiper('.bg-slide .swiper-container', {
    pagination: {
      el: '.bg-slide .swiper-pagination',   
      clickable: true,
    }, 
    loop: true,
  });
  // conviction
  var menus=['풀무원사업','히스토리','지속경영','가치체계'];
  var convictionImg=['img/conbg1.jpg','img/conbg2.jpg','img/conbg3.jpg','img/conbg4.jpg'];
  for (const i in convictionImg) {
    $('.conviction .swiper-slide').eq(i).css('background-image','url('+convictionImg[i]+')');
  }
  var convictionSwiper = new Swiper('.conviction .swiper-container', {
    effect: 'fade',
    pagination: {
      el: '.conviction .swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (menus[index]) + '</span>';
      },  
    },
  });  
  // newsroom
  var newsroomSwiper = new Swiper('#newsroom .swiper-container', { 
    slidesPerView: 'auto',                  
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'fraction',            
    },loop: true
  });
  //네비게이션
  $(window).on("load",function(){
    $(".content").mCustomScrollbar();
  }); 
  //모바일 메뉴
  $('#btn-menu').click(function(){    
    $('nav').addClass('on')
  })

  $('#close').click(function(){
    $('nav').removeClass('on')
  })
  //gnb 스크롤
  var scrollTop=0;
  $(window).scroll(function(){
    scrollTop=$(this).scrollTop();
    if(scrollTop>200){
      $('header').addClass('scroll')
    }else{
      $('header').removeClass('scroll')
    }
  })
  //언어선택
  $('.lang a').click(function(e){
    e.preventDefault();
    $('.lang li').removeClass('on');
    $(this).parent('li').addClass('on')
  })
 
  $('.family-site>a').click(function(e){
    e.preventDefault();
    $(this).find('i').toggleClass('on');
    $('.drop-up').stop().slideToggle();
  })
  $('.gnb .wrap ul li a, nav .etc-nav ul li a, .main-banner .wrap a, .conviction .con-text a, #newsroom .news a, .factory div a,footer div a, .drop-up .site li a ').click(function(e){
    e.preventDefault();
  })
  //리사이즈
  $(window).resize(function(){
    var windowW=$(window).width();
    $('.gnb ul').removeAttr('style'); 
    $('.gnb a').removeClass('active');
    $('.gnb > .wrap > .big, .gnb .wrap').off('mouseenter');
    
    $('.gnb').off('mouseleave');    
    if(windowW>767){//pc
      $('.gnb > .wrap > .big').on('mouseenter',function(){
        $('.gnb > li > a').removeClass('active');
        $(this).find('a').addClass('active');
        $('.gnb ul, .depth2-bg').stop().show();
        $('header').addClass('scroll');
      });

      $('.gnb').on('mouseleave',function(){
        $('.gnb > li > a').removeClass('active');
        $('.gnb ul, .depth2-bg').stop().hide();
        if(scrollTop<200){                    
            $('header').removeClass('scroll')
        }
      })      
      // 네비아이콘
      $('.gnb .wrap').on('mouseenter',function(){
        var i=$(this).index();
        var className='icon icon-navicon'+(i+1);
        $('.depth2-bg i').removeClass().addClass(className);
      }) 
      $(".bg-slide #bg1").attr('src','img/bg1.png');
      $(".bg-slide #bg2").attr('src','img/bg2.png');
      $(".bg-slide #bg3").attr('src','img/bg3.png');
      $(".factory img").attr('src','img/dufu.png');   
      $('.family-site .drop-up ul ul').show()
    }else{//모바일
      $('.gnb .wrap .big').click(function(e){
        e.preventDefault();
        if($(this).parent('.wrap').hasClass('on')){
          $('.gnb .wrap').removeClass('on')
          $('.gnb .wrap ul').hide()
        }else{
          $('.gnb .wrap').removeClass('on')
          $('.gnb .wrap ul').hide()
          $(this).siblings('ul').show()
          $(this).parent('.wrap').addClass('on')
        }
      })
      $(".bg-slide #bg1").attr('src','img/m-bg1.png');
      $(".bg-slide #bg2").attr('src','img/m-bg2.png');
      $(".bg-slide #bg3").attr('src','img/m-bg3.png');
      $(".factory img").attr('src','img/dufu-m.jpg');   
      //패밀리사이트 
      $('.family-site .drop-up ul ul').hide()
      $('.family-site .drop-up ul:nth-child(1) ul').show();
      $('.family-site .drop-up h2').removeClass('on');
      $('.family-site .drop-up ul:nth-child(1) h2').addClass('on');

      $('.family-site .drop-up h2').click(function(){
        $(this).parents('.drop-up').find('h2').removeClass('on')
        $(this).addClass('on')
        $('.family-site .drop-up ul ul').hide()
        $(this).next().show();
      })
      var windowH=$(window).height();       
      var shopH=$('nav').not(':hidden').find('.shop').outerHeight();
      var etcH=$('nav').not(':hidden').find('.etc-nav').outerHeight();
      var ulH=windowH-(shopH+etcH+etcH);            
      $('nav').not(':hidden').find('.gnb').height(ulH);     
    }
  }).resize();

  
})