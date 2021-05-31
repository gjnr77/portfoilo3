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
          var $section3 = $('.main5 #section3');
          var $sec3Li =  $('.main5 #section3 li');

          $(window).scroll(function(){
            if($(window).scrollTop()>30){
          // setTimeout(function(){
            $sec3Li.each(function(idx){
              setTimeout(function(){
                $sec3Li.eq(idx).addClass('addEvent');
              },300*idx)
            })
          // },300)
            }
          })

        },
        section4Fn:function(){
        var $section4 = $('.main5 #section4');
        var $sec3Li =  $('.main5 #section3 li');

        // setTimeout(function(){
        //   $section4.addClass('addEvent');

        // },1000)
        //스크롤 이벤트
        $(window).scroll(function(){
          if($(window).scrollTop()>=$section4.offset().top-400){
            $section4.addClass('addEvent');
            $sec3Li.removeClass('addEvent');

          }
          else{
            $section4.removeClass('addEvent');
          }

          console.log($section4.offset().top)
          console.log($(window).scrollTop())
        })
        },
        section5Fn:function(){
          var $section5 = $('.main5 #section5');

          $(window).scroll(function(){
            if($(window).scrollTop()>=$section5.offset().top-200){
              $section5.addClass('addEvent');
  
            }
            else{
              $section5.removeClass('addEvent');
            }
          })
        }
    }
    kecc.init();
    })(jQuery);