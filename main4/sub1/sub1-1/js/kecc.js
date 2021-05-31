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
      var $section3 = $('.main4 #section3');
      function resizeFn(){
        $section3.css({width:80+'%',margin:'0 auto'});
      }
      resizeFn()
      $(window).resize(function(){
        resizeFn();
      })
    },
    section4Fn:function(){
      
    },
    section5Fn:function(){

    }
}
kecc.init();
})(jQuery);