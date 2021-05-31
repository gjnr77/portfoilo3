;(function($){
  var kecc = {
    init:function(){
      var that = this;
      that.headerFn();
      that.allMenuFn();
      that.section1Fn();
      that.section2Fn();
      that.section3Fn();
      that.section4Fn();
      that.section5Fn();
      that.section6Fn();
      that.section7Fn();
      that.section8Fn();
      that.commonFn();
      that.popupFn();

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
      var $section1 = $('#main > #section1');
      var $winH = $(window).innerHeight();

      var $slide = $('#main > #section1 .slide');
      var cnt = 0;

      var $prevBtn = $('#main > #section1 .slide-prev-btn');
      var $nextBtn = $('#main > #section1 .slide-next-btn');
      var $slideBtn = $('#main > #section1 .slide-btn');

      var z = 0;

      $section1.addClass('addEvent');
      //스크롤 이벤트
      $(window).scroll(function(){
        if($(window).scrollTop()==$section1.offset().top){
          $section1.addClass('addEvent');
        }
        else{
          $section1.removeClass('addEvent');
        }
      })

      // 페이드인아웃 슬라이드
      function nextSlideFn(idx){
        if(z==null){
          z = cnt==0?3:cnt-1
        }
        $slide.css({zIndex:1});
        $slide.eq(cnt).css({zIndex:3})
        $slide.eq(cnt).stop().animate({opacity:1},0)
        $slide.eq(z).css({zIndex:4})
        $slide.eq(z).stop().animate({opacity:1},0).animate({opacity:0},500)
        colorFn();
        z=null;
        console.log(cnt)
        console.log(z)
      }

      function prevSlideFn(idx){
        if(z==null){
          z = cnt==3?0:cnt+1
        }

        $slide.css({zIndex:1});
        $slide.eq(cnt).css({zIndex:3})
        $slide.eq(cnt).stop().animate({opacity:1},0)
        $slide.eq(z).css({zIndex:4})
        $slide.eq(z).stop().animate({opacity:1},0).animate({opacity:0},500)
        colorFn();
        z=null;
        console.log(z)
      }

      
      $slideBtn.each(function(idx){
        $(this).on({
          click:function(){
           
            $slideBtn.removeClass('addEvent')
            $slideBtn.eq(idx).addClass('addEvent')
            
            z = cnt
            if(cnt<idx){ //다음
              cnt=idx;
              nextSlideFn()
            }
            if(cnt>idx){ //이전
              cnt=idx;
              prevSlideFn();
            }
          }
        })
      })

      function colorFn(){
        $slideBtn.removeClass('addEvent')
        $slideBtn.eq(cnt).addClass('addEvent')
        
      }

      $prevBtn.on({
        click:function(){
          cnt--;
          if(cnt<0){cnt=3}
          prevSlideFn()
        }
      })
      $nextBtn.on({
        click:function(){
          cnt++;
          if(cnt>3){cnt=0}
          nextSlideFn()
        }
      })

      

    },
    section2Fn:function(){
      var $section2 = $('#main > #section2');
      var $slideBtn = $('#main > #section2 .slide-btn');
      var $winH = $(window).innerHeight();
      var $txt = $('#main > #section2 .txt-content span');
      var t =0;
      var $linkBox = $('#main > #section2 .link-box > ul');

      var $slideBox = $('#main > #section2 .slide-box');
      var $slideWrap = $('#main > #section2 .slide-box > ul');
      var $slide = $('#main > #section2 .slide-box > ul > li');
      var $slideW = $slide.innerWidth();
      var $prevBtn = $('#main > #section2 .prev-btn');
      var $nextBtn = $('#main > #section2 .next-btn');
      var cnt = 0;

        //스크롤 이벤트
      $(window).scroll(function(){
        if($(window).scrollTop()==$section2.offset().top){
          $section2.addClass('addEvent');
        }
        else{
          $section2.removeClass('addEvent');
        }
      })
      function resizeFn(){
        $winH = $(window).innerHeight();
        $section2.css({height:$winH});

        $slideW = $slide.innerWidth();
        if($(window).innerWidth()<=1200){
          $slideBox.css({width:$slideW*2})
        }
        else{
          $slideBox.css({width:'auto'})
        }
      }
      setTimeout(resizeFn,100);
      $(window).resize(function(){
        resizeFn();
      })

      $slideBtn.each(function(idx){
        $(this).on({
          mouseenter:function(){
            //글씨 움직이기
              for(var i=0;i<=$(this).find('span').length;i++){
                $(this).find('span').eq(i).stop().animate({marginTop:-20+'px'},100*(i+2),'easeInSine').animate({marginTop:0+'px'},100*(i+2),'easeInSine');
              console.log($(this).find('span').length)
            };
            
            //링크 박스 바뀌기
            $linkBox.removeClass('addEvent');
            $linkBox.eq(idx).addClass('addEvent');
          }
        })
      })

      // 슬라이드
      function slideFn(){
        $slideWrap.stop().animate({left:-($slideW*cnt)},300);
      }

      function nextCountFn(){
        cnt++;
        if(cnt>$slide.length-2){
          cnt=$slide.length-2;
        }
        slideFn()
      }
      function prevCountFn(){
        cnt--;
        if(cnt<0){
          cnt=0;
        }
        slideFn()
      }

      $nextBtn.on({
        click:function(){
          nextCountFn();
        }
      })
      $prevBtn.on({
        click:function(){
          prevCountFn();
        }
      })
    },
    section3Fn:function(){
      var $slideBox = $('#main #section3 .slide-box');

      var $slideImgWrap = $('#main #section3 .slide-img-wrap');
      var $slideBtn = $('#main #section3 .slide-btn');
      
      var $arrowLeft = $('#main #section3 .arrow-left');
      var $arrowRight = $('#main #section3 .arrow-right');
      var $slideWrap = $('#main #section3 .slide-wrap');
      var $slide = $('#main #section3 .slide');
      var $slideW = $slide.innerWidth();
      var $slideRate = 0.895943563;
      var $slideH = $slideW*$slideRate;
      var $slideCon = $('#main #section3 .slide-container');
      var show = 4;
      var cnt = 0;

      var $barLine = $('#main #section3 .left-box >span');
      var $barLineW = $barLine.innerWidth();
      var $bar = $('#main #section3 .bar');
      var $barW = $bar.innerWidth();
      var moveLine = $barLineW - $barW;
      var show = null;
      var $barLeft = moveLine/($slide.length-show);

      var $header = $('#header');
      var $section3 = $('#main #section3');

      //스크롤 이벤트
      $(window).scroll(function(){
        if($(window).scrollTop()==$section3.offset().top){
          $section3.addClass('addEvent');
          $slide.each(function(idx){
            setTimeout(function(){
              $slide.eq(idx).stop().animate({left:$slideW-$slideW},200)
            },200*idx)
            console.log($slideW)
          });
        }
        else{
          $section3.removeClass('addEvent');
          $slide.removeClass('addEvent');
          $slide.stop().animate({left:100+'%'},0)
        }
      })

      //리사이즈
      function resizeFn(){
        $slideW = $slide.innerWidth();

        if($(window).innerWidth()>1280){
          $slideRate = .95;
          show = 4
        }
        else if($(window).innerWidth()<=1280 && $(window).innerWidth()>900){
          $slideRate = 1.11695064;
          show = 3
        }
        else if($(window).innerWidth()<=900){
          $slideRate = 0.956416465;
          show = 2
        }
        $barLineW = $barLine.innerWidth();
        $barW = $bar.innerWidth();
        moveLine = $barLineW - $barW;
        $barLeft = moveLine/($slide.length-show);
        

        $slideH = $slideW*$slideRate;
        $slide.css({height:$slideH});
        $slideCon.css({height:$slideH+4});

        slideFn();
      }
      resizeFn();
      $(window).resize(function(){
        resizeFn()
      })


      // 헤더 색상 변경 
      $(window).scroll(function(){
        if($(window).scrollTop()==$section3.offset().top){
            $header.addClass('addEvent');
        }
        else{
          $header.removeClass('addEvent')
        }

      })


      //박스 애니메이션
      $slideBox.each(function(idx){
        $slideBox.eq(idx).on({
          mouseenter:function(){
            
                $slideBtn.eq(idx).addClass('addEvent');//가로선
            
            console.log($slideBtn.eq(idx).hasClass('addEvent'))
              setTimeout(function(){
                  $slideImgWrap.eq(idx).addClass('addEvent'); //세로선
              },300)  
          },
          mouseleave:function(){            
              
                  $slideImgWrap.removeClass('addEvent');
              
              setTimeout(function(){
                  $slideBtn.eq(idx).removeClass('addEvent');
              },300)
            }            
        })

        console.log($slideImgWrap.hasClass('addEvent'))
      }) //박스애니메이션

      //슬라이드
      function slideFn(){
        $slideWrap.stop().animate({left:-($slideW*cnt)},500)
        $bar.stop().animate({left:$barLeft*cnt},500)
      }

      function nextCount(){
        cnt++;
        if(cnt>=$slide.length-show){cnt=$slide.length-show}
        slideFn();
      }
      function prevCount(){
        cnt--;
        if(cnt<0){cnt=0}
        slideFn();
      }
      $arrowLeft.on({
        click:function(){
          prevCount();
        }
      })
      $arrowRight.on({
        click:function(){
          nextCount();
        }
      })

    },
    section4Fn:function(){
      var $section4 = $('#main #section4');
      var $section4W = $section4.innerWidth();
      var $img = $('#main #section4 img');
      var $imgW = $img.innerWidth();
      var imgLeft = ($imgW-$section4W)/2

      //스크롤 이벤트
      $(window).scroll(function(){
        if($(window).scrollTop()==$section4.offset().top){
          $section4.addClass('addEvent');

        }
        else{
          $section4.removeClass('addEvent');
        }
      })

      function resizeFn(){
        $section4W = $section4.innerWidth();
        $imgW = $img.innerWidth();
        imgLeft = ($imgW-$section4W)/2
        
        $img.css({left:-imgLeft})
      }
      resizeFn();
      $(window).resize(function(){
        resizeFn();
      })

      $(window).scroll(function(){
        if($(window).scrollTop()==$section4.offset().top){
          setTimeout(function(){
            $section4.addClass('addEvent');
          },200)
        }
        else{
          $section4.removeClass('addEvent');
        }

      })



    },
    section5Fn:function(){
      var $slideBox = $('#main #section5 .slide-box');

      var $slideImgWrap = $('#main #section5 .slide-img-wrap');
      var $slideBtn = $('#main #section5 .slide-btn');
      
      var $arrowLeft = $('#main #section5 .arrow-left');
      var $arrowRight = $('#main #section5 .arrow-right');
      var $slideWrap = $('#main #section5 .slide-wrap');
      var $slide = $('#main #section5 .slide');
      var $slideW = $slide.innerWidth();
      var $slideRate = 0.895943563
      var $slideH = $slideW*$slideRate;
      var $slideCon = $('#main #section5 .slide-container');
      var cnt = 0;

      var $barLine = $('#main #section5 .left-box >span');
      var $barLineW = $barLine.innerWidth();
      var $bar = $('#main #section5 .bar');
      var $barW = $bar.innerWidth();
      var moveLine = $barLineW - $barW;
      var show = null;
      var $barLeft = moveLine/($slide.length-show);

      var $header = $('#header');
      var $section5 = $('#main #section5');

      //스크롤 이벤트
      $(window).scroll(function(){
        if($(window).scrollTop()==$section5.offset().top){
          $section5.addClass('addEvent');
          $slide.each(function(idx){
            setTimeout(function(){
              $slide.eq(idx).addClass('addEvent');
            },idx*200)
          })
        }
        else{
          $section5.removeClass('addEvent');
          $slide.removeClass('addEvent');
        }
      })
      
      //리사이즈
      function resizeFn(){
        $slideW = $slide.innerWidth();

        if($(window).innerWidth()>1280){
          $slideRate = 1;
          show = 4
        }
        else if($(window).innerWidth()<=1280 && $(window).innerWidth()>900){
          $slideRate = 1.11695064;
          show = 3
        }
        else if($(window).innerWidth()<=900){
          $slideRate = 0.956416465;
          show = 2
        }
        $barLineW = $barLine.innerWidth();
        $barW = $bar.innerWidth();
        moveLine = $barLineW - $barW;
        $barLeft = moveLine/($slide.length-show);
        
        $slideH = $slideW*$slideRate;
        $slide.css({height:$slideH});
        $slideCon.css({height:$slideH+4});

        slideFn();
      }
      resizeFn();
      $(window).resize(function(){
        resizeFn()
      })
      // 헤더 색상 변경 
      $(window).scroll(function(){
        if($(window).scrollTop()==$section5.offset().top){
            $header.addClass('addEvent');
        }
        //왜 여기 else { 리무브 클래스하면 섹션3은 addclass가 안되는것인가}

      })

      //박스 애니메이션
      $slideBox.each(function(idx){
        $slideBox.eq(idx).on({
          mouseenter:function(){
            
                $slideBtn.eq(idx).addClass('addEvent');//가로선
            
            console.log($slideBtn.eq(idx).hasClass('addEvent'))
              setTimeout(function(){
                  $slideImgWrap.eq(idx).addClass('addEvent'); //세로선
              },300)  
          },
          mouseleave:function(){            
              
                $slideImgWrap.removeClass('addEvent');
              
              setTimeout(function(){
                  $slideBtn.eq(idx).removeClass('addEvent');
              },300)
            }            
        })
      }) //박스애니메이션

      //슬라이드
      function slideFn(){

        $slideWrap.stop().animate({left:-($slideW*cnt)},500)
        $bar.stop().animate({left:$barLeft*cnt},500)

      }

      function nextCount(){
        cnt++;
        if(cnt>=$slide.length-show){cnt=$slide.length-show}
        slideFn();
      }
      function prevCount(){
        cnt--;
        if(cnt<0){cnt=0}
        slideFn();
      }
      $arrowLeft.on({
        click:function(){
          prevCount();
        }
      })
      $arrowRight.on({
        click:function(){
          nextCount();
        }
      })

    },
    section6Fn:function(){
      var $section6 = $('#main #section6');

      //스크롤 이벤트
      $(window).scroll(function(){
        if($(window).scrollTop()==$section6.offset().top){
          $section6.addClass('addEvent');
        }
        else{
          $section6.removeClass('addEvent');
        }
      })
    },
    section7Fn:function(){
      var $section7 = $('#main #section7');

      //스크롤 이벤트
      $(window).scroll(function(){
        if($(window).scrollTop()==$section7.offset().top){
          $section7.addClass('addEvent');
        }
        if($(window).scrollTop()<$section7.offset().top){
          $section7.removeClass('addEvent');
        }
      })
    },
    section8Fn:function(){

    },
    commonFn:function(){
      var $pageBtn = $('#page-btn-box .page-btn');

      //창높이 리사이즈
      var $section = $('.section');
      var winH = $(window).innerHeight();

      function resizeFn(){
        $winH = $(window).innerHeight();
        $section.css({height:$winH});
      }
      setTimeout(resizeFn,100);
      $(window).resize(function(){
        setTimeout(resizeFn,100);
      })

      //마우스 휠 이벤트
      var wheelDelta = null;

      $section.each(function(idx){
        $(this).on({
          mousewheel:function(e){
            e.preventDefault();
            wheelDelta = e.originalEvent.wheelDelta;
            // console.log(idx)
            var z = $('#footer').offset().top-$(window).scrollTop()
            if(wheelDelta<0){ //마우스 휠 아래로
              if(!$('html,body').is(':animated')){
                if(idx==6){
                  $('html,body').stop().animate({scrollTop:$section.eq(6).offset().top+$('#footer').innerHeight()},700);
                  $pageBtn.fadeOut(300);
                  return false;
                }
                else{
                  $('html,body').stop().animate({scrollTop:$section.eq(idx+1).offset().top},700)
                  $pageBtn.removeClass('addEvent');
                  $pageBtn.eq(idx+1).addClass('addEvent');
                }
              }
            }
            
            if(wheelDelta>0){ //마우스 휠 위로
              if(!$('html,body').is(':animated')){
                if(idx==0){
                  return false
                }
                else{
                  $('html,body').stop().animate({scrollTop:$section.eq(idx-1).offset().top},700);
                  $pageBtn.removeClass('addEvent');
                  $pageBtn.eq(idx-1).addClass('addEvent');
                }
                if($(window).scrollTop()==$section.eq(6).offset().top+$('#footer').innerHeight()){
                  $('html,body').stop().animate({scrollTop:$section.eq(6).offset().top},700);
                  $pageBtn.fadeIn(300);

                }
              }              
            }
          }
        })
      }) //section 마우스 휠 이동
      console.log($('#footer').innerHeight())
      
      
      //페이지 이동 버튼 이벤트

      $pageBtn.each(function(idx){
        $(this).on({
          click:function(){
            $('html,body').stop().animate({scrollTop:$section.eq(idx).offset().top},700);
            $pageBtn.removeClass('addEvent');
            $(this).addClass('addEvent');
          }
        })
      })
      

      console.log($('#main #section7').offset().top);
      console.log($('#footer').offset().top);
      console.log($(window).innerHeight());
      
      //smooth 버튼
      var $smooth = $('.smooth');
      var url = $smooth.attr('href');
      var btnColor = parseInt(url.slice(8))-1;

      $smooth.on({
        click:function(){
          $('html,body').stop().animate({scrollTop:$(url).offset().top},500);
          $pageBtn.removeClass('addEvent');
          $pageBtn.eq(btnColor).addClass('addEvent');
        }
      })


    },
    popupFn:function(){
      var today = new Date();
      var txt = '';
      var $xBtn = $('#popup .x-wrap');
      var $popup = $('#popup');

      function cookieFn(name,value,expires){
        console.log(name,value,expires)
        today = new Date();
        today.setDate(today.getDate()+1);
        txt+=name+'='+value+';';
        txt+='expires='+today.toUTCString()+';'; 
        //   ';path=/' 게시판 연동문제 때문에 path 삭제한다는 뜻으로 추가해야함!
        
        document.cookie = txt;
        console.log(today)
      }

      $xBtn.on({
        click:function(){
          if($('#24hours').is(':checked')){
            cookieFn('keccpopup1','no',1);
            $popup.addClass('addcookie');
          }
          else{
            $popup.addClass('addcookie');
          }
        }
      })

      function getCookieFn(name){
        var start = 0;
        var end = name.length;
        if(document.cookie.slice(start,end)==name){
          start = document.cookie.indexOf('=')+1; 

          return document.cookie.slice(start,13)
        }

      }

      function openPopupFn(){
        var exist = getCookieFn('keccpopup1');
        if(exist=='no'){
          $popup.addClass('addcookie');
        }
        else{
          $popup.removeClass('addcookie');
        }
        console.log(exist)

      }
      openPopupFn();


    }
  }//kecc
  kecc.init();
})(jQuery);