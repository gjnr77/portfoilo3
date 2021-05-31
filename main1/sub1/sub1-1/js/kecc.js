;(function($){
var kecc = {
    init:function(){
        this.headerFn();
        this.allMenuFn();
        this.section1Fn();
        this.section2Fn();
        this.section3Fn();
        this.section4Fn();
        this.section5Fn();
    },
    headerFn:function(){
        var $subWrap = $('#header .sub-wrap');
        var $mainMenu = $('#header .main-menu');
        var $header = $('#header');
        var $subContainer = $('#header .sub-gap');
        var $li = $('#nav > ul > li');
  
        var $allMenu = $('#allMenu');
        var $closeBtn = $('#allMenu .close-btn');
        var $headerAllMenu = $('#header .all-menu');
      
  
        $mainMenu.each(function(idx){
          $(this).on({
            mouseenter:function(e){
              e.preventDefault();
              $header.addClass('addNav');
              $li.removeClass('addEvent');
              $li.eq(idx).addClass('addEvent');
            },
          })
        })
  
        $header.on({
          mouseleave:function(){
            $li.removeClass('addEvent');
            $header.removeClass('addNav');
          }
        })
  
  
        //all menu
        $headerAllMenu.on({
          click:function(){
            if($(window).innerWidth()<1400){
              $allMenu.toggleClass('addEvent');
              setTimeout(function(){
                $header.toggleClass('addEvent');
                $headerAllMenu.find('.txt').text('CLOSE');
              },1000)
            }
            else{
              $allMenu.addClass('addEvent');  
            }
          }
        })
        $closeBtn.on({
          click:function(){
            $allMenu.removeClass('addEvent');
          }
        })


        function scrollFn(){
          if($(window).scrollTop()>0){
            $header.addClass('addNav');
          }
          if($(window).scrollTop()<=10){
            $header.removeClass('addNav');
          }
        }
        $(window).scroll(function(){
          scrollFn();
        })
    },
    allMenuFn:function(){
    var $allMenu = $('#allMenu');
    var $allMenuLi = $('#allMenu .container > ul >li');
    var $winH = $(window).innerHeight();
    var $header = $('#header');

    function resizeFn(){
        $allMenuLi.eq(0).addClass('addMenu');
        $winH = $(window).innerHeight();
        var liH = ($winH-60)/5
        $allMenu.css({height:$winH})
        if($(window).innerWidth()>1400){
        $allMenuLi.css({height:liH})
        }
        else{
        $allMenuLi.css({height:72+'px'})
        }
    }
    resizeFn();
    $(window).resize(function(){
        resizeFn();
    })

    $allMenuLi.on({
        click:function(){
        $allMenuLi.removeClass('addMenu');
        $(this).addClass('addMenu');
        }
    })
    
    },
    section1Fn:function(){

    },
    section2Fn:function(){
      var $tapBox = $('#sub .tap-box');

      $tapBox.eq(0).addClass('addEvent');
      $tapBox.on({
        click:function(e){
          e.preventDefault();
          $tapBox.removeClass('addEvent');
          $(this).addClass('addEvent');
        }
      })

    },
    section3Fn:function(){

    },
    section4Fn:function(){
      var $tapBtn = $('.sub1-1 #section4 .tap-btn');
      var $section4 = $('.sub1-1 #section4');
      var $section5 = $('.sub1-1 #section5');
      var $line = $('.sub1-1 #section4 .tap-title > span');

      var $li = $('.sub1-1 #section4 .business li');
      var $datailBox = $('.sub1-1 #section4 .tap-content .detail-box');

      $datailBox.eq(0).addClass('addEvent')

      $tapBtn.eq(1).on({
        click:function(e){
          e.preventDefault();
          $section4.addClass('addEvent');
          $section5.addClass('addEvent');
          $line.removeClass('addEvent');
          $line.eq(1).addClass('addEvent');
        }
      })
      $tapBtn.eq(0).on({
        click:function(e){
          e.preventDefault();
          $section4.removeClass('addEvent');
          $section5.removeClass('addEvent');
          $line.removeClass('addEvent');
          $line.eq(0).addClass('addEvent');
        }
      })

      $li.each(function(idx){
        $(this).on({
          click:function(e){
            e.preventDefault();
            $li.removeClass('addEvent');
            $(this).addClass('addEvent');
            $datailBox.removeClass('addEvent');
            $datailBox.eq(idx).addClass('addEvent');
            console.log(idx)
          }
        })
      })
    },
    section5Fn:function(){

    }
}
kecc.init();
})(jQuery);