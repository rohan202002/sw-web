$(document).ready(function() {

     $(window).scrollTop(0);

     membershipPagination();
    navactiveToggle();
    donatenowAccordian();
    headerSticky();
    navActive();
    masterLoader();
    homebanner();
    volunteerSlider();
    testimonialSlider();
    donorSlider();
    galleryPagination();
    smoothScrolltoTop();
    welcomePopup();
    loginTab();
    activeToggle();
    objectiveTab();
    objectiveTabActive();
    materialSlider();
    missionTab();
    missiontabToggle();
    mobileAccordian();
    labelAnimation();
    inputClear();
    //countDown();
    dob();
    volunteerDob();
    dropdownHover();
    //startVideo();
    scrolltoTop();
hpeventSlider();
keyFindingSlider();
//divEqlheight();
disablePrint();
disableImgtclick();
disablePrintscreen();
disableRightclick();
smoothscroll();

showeventDiv();
navbarsubMenu();

    
   
   


    if ($(window).width() <= 991) {

        eventSlider();
        memberSlider();
    }

    if($(window).width() >= 991) {
        divEqlheight();
    }



});


/*$(window).on('resize', function() {

  if($(window).width() <= 767) {

    eventSlider();
  }

});*/


$(window).on('load', function() {
    //welcomePopup();
    //eventpopup();
    loader();
      $('body').scrollTop(0);
    
});

$(document).scroll(function() {
    scrolltoTopIcon();
    showscrollDiv();
});

function smoothscroll() {
    $('html,body').animate({
      scrollTop: $(window.location.hash).offset().top
    },1000);
}

function masterLoader() {

    $("#header").load("header.html");
    $("#footer").load("footer.html");
}



function homebanner() {


    $('.hpbannerBlock.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        smartSpeed:2000,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,
        

        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 1,
                nav: true,
                loop: true,
                margin: 0
            }
        }
    });


}


function volunteerSlider() {

    $('.volunteersSlider.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        smartSpeed:2000,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 3,
                nav: false,
                loop: true,
                margin: 20
            }
        }
    });
}


function testimonialSlider() {

    $('.testimonialDiv.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed:2000,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,

        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: false,
                loop: true,
                margin: 20
            }
        }
    })
}


function donorSlider() {

    $('.donorSlider.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed:2000,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: false,
                margin: 20
            }
        }
    })
}

function navActive() {


    $(document).on('click', '.navbar-nav li', function() {
        $(".navbar-nav li").removeClass("active");
        $(this).addClass("active").siblings().removeClass("active");

    });
}

function headerSticky() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.stickynavbarSection').addClass("sticky");
        } else {
            $('.stickynavbarSection').removeClass("sticky");
        }
    });
}



function galleryPagination() {

    /*$('.pagination li a').click(function(event) {
            event.preventDefault();
            //$(".mainWrapper .firstContainer").hide();
            var index = $(this).index();
            //alert(index)
            $('.pagination a.page-link').removeClass('active');
            $(this).addClass('active');
            $(".galleryImg").eq(index).show().siblings().hide();

        });*/

    $('.pagination a').click(function(event) {
        event.preventDefault();
        //$(".mainWrapper .firstContainer").hide();
        var index = $(this).index();
        //alert(index)
        $('.pagination a.clickTop').removeClass('active');
        $(this).addClass('active');
        $(".galleryImg").eq(index).show().siblings().hide();
        $("html, body").animate({ scrollTop: 200 }, "slow");
        return false;

    });
}

function scrolltoTopIcon() {

    var y = $(this).scrollTop();
    if (y > 800) {
        $('.scrollTopBlock').fadeIn();
    } else {
        $('.scrollTopBlock').fadeOut();
    }
}

function smoothScrolltoTop() {

    $(".scrolltopBlock a").click(function() {

        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
}

function welcomePopup() {

    $('#welcomePopup').modal({ backdrop: 'static', keyboard: false });
    // if(localStorage.getItem('popState') != 'shown'){
    //       $('#welcomePopup').modal({backdrop: 'static', keyboard: false});
    //       localStorage.setItem('popState','shown')
    //   }

}

function loginTab() {
    $(document).on('click', '.loginlistItem li a', function(event) {
        event.preventDefault();
        $(".loginfieldWrap .loginInput").hide().removeClass('activeLogin');
        $(".loginfieldWrap .loginInput").eq($(this).parents("li").index()).show().addClass();
    });
}


function activeToggle() {

    $(".loginlistItem ul li a").click(function() {
        $(".loginlistItem ul li a").removeClass("activeLogin");
        $(this).addClass("activeLogin");
    });

}


function navactiveToggle() {

    // $(document).on('click', '.navbar-nav .nav-item', function(e) {
    //   $(".navbar-nav .nav-item").removeClass("active");
    //   $(this).addClass("active");

    // });

    // pageUrl = 'Swadhey/index.html'
    // $('.navbar-nav li.nav-item').removeClass("active");
    // if (pageUrl) {
    //    $('.navbar-nav .nav-item:has(a[href="' + pageUrl + '"])').addClass("active");
    // }

    var current_page_URL = location.href;
    $(".nav-item a").each(function() {
        if ($(this).attr("href") !== "#") {
            var target_URL = $(this).prop("href");
            if (target_URL == current_page_URL) {
                $('.nav-item a').parents('li, ul').removeClass('active');
                $(this).parent('li').addClass('active');
                return false;
            }
        }
    });
}



function objectiveTab() {

    $(document).on('click', '.objectiveList li a', function(e) {

        e.preventDefault();
        var tbvr = $(this).parent('li').index();

        $('.tabText').hide();
        $('.tabText').eq(tbvr).show();

    });
}

function objectiveTabActive() {

    $(document).on('click', '.objectiveList li', function(e) {
        e.preventDefault();
        $('.objectiveList li').removeClass('activeObjective');
        $(this).addClass('activeObjective');

    });
}

function materialSlider() {

    $('.materialSlider.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false,
                margin: 20
            }
        }
    })
}

function missionTab() {

    $(document).on('click', '.vissionList li a', function(e) {

        e.preventDefault();

        var content_tab = $(this).parent('li').index();


        $('.vissionContentWrap .vissionContentDiv').hide();
        $('.vissionContentWrap .vissionContentDiv').eq(content_tab).show();
        $("html, body").animate({ scrollTop: 300 }, "slow");


    });
}


function missiontabToggle() {

    $(document).on('click', '.vissionList li', function(e) {

        e.preventDefault();

        $('.vissionList li').removeClass('activeVission');
        $(this).addClass('activeVission');

    });
}

function eventSlider() {


    $('.eventsliderSec.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,

        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 1,
                nav: true,
                loop: false,
                margin: 20
            }
        }
    });

}


function mobileAccordian() {

    $(document).on('click', '.objectiveTab .mobileTab', function(e) {
        e.preventDefault();

        $('.objectiveTab .mobileTab').toggleClass('Objectiveactive');
        $('.objectiveTab .mobileTab').not($(this)).removeClass('Objectiveactive');

        $(this).next('.tabText').slideToggle();
        $('.tabText').not($(this).next()).slideUp();
    });
}

function donatenowAccordian() {

    $(document).on('click', '.objectiveTab .mobileTab', function(e) {
        e.preventDefault();

        $('.objectiveTab .mobileTab').toggleClass('Donateactive');
        $('.objectiveTab .mobileTab').not($(this)).removeClass('Donateactive');

        $(this).next('.vissiontabText').slideToggle();
        $('.vissiontabText').not($(this).next()).slideUp();
    });
}

function labelAnimation() {

    $.fn.materializeInputs = function(selectors) {

        // default param with backwards compatibility
        if (typeof(selectors) === 'undefined') selectors = "input, textarea";

        // attribute function
        function setInputValueAttr(element) {
            element.setAttribute('value', element.value);
        }

        // set value attribute at load
        this.find(selectors).each(function() {
            setInputValueAttr(this);
        });

        // on keyup
        this.on("keyup", selectors, function() {
            setInputValueAttr(this);
        });

        this.on("change", selectors, function() {
            setInputValueAttr(this);
        });
    };
}

function inputClear() {

    $('body').materializeInputs();
}

/*function countDown() {

  var deadline = new Date("june 6, 2020 12:00:00").getTime();             
var x = setInterval(function() {
   var currentTime = new Date().getTime();                
   var t = deadline - currentTime; 
   var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
   var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
   var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
   var seconds = Math.floor((t % (1000 * 60)) / 1000); 
   document.getElementById("day").innerHTML =days ; 
   document.getElementById("hour").innerHTML =hours; 
   document.getElementById("minute").innerHTML = minutes; 
   document.getElementById("second").innerHTML =seconds; 
   if (t < 0) {
      clearInterval(x); 
      document.getElementById("time-up").innerHTML = "TIME UP"; 
      document.getElementById("day").innerHTML ='0'; 
      document.getElementById("hour").innerHTML ='0'; 
      document.getElementById("minute").innerHTML ='0' ; 
      document.getElementById("second").innerHTML = '0'; 
   } 
}, 1000);  

}*/

function dob() {
    $("#datepicker").datepicker(

        {

            changeMonth: true,
            changeYear: true,
            yearRange: '1900:+0',
            dateFormat: 'dd-mm-yy',
            maxDate: new Date()
        }

    );
}

function volunteerDob() {

    $("#datepickerVolunteer").datepicker({

        changeMonth: true,
        changeYear: true,
        yearRange: '1900:+0',
        dateFormat: 'dd-mm-yy',
        maxDate: new Date()
    });

}

// function eventpopup() {

//     $('#eventPopup').modal('show');
    

// }

// function startVideo() {

    
//     $(document).on('click', '.close', function(){

//         $('#video').get(0).play();
//         $('#video')[0].currentTime = 0;

//     })

// }


function memberSlider() {


    $('.member_slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,

        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 1,
                nav: true,
                loop: false,
                margin: 20
            }
        }
    });

}

function dropdownHover() {

    $(document).on('hover', '.dropdown', function() {

        $('.slideDropdown').slideToggle();

    });

}

function membershipPagination() {
    

    $('.pagination a').click(function(event) {
        event.preventDefault();
        //$(".mainWrapper .firstContainer").hide();
        var index = $(this).index();
        //alert(index)
        $('.pagination a.clickTop').removeClass('active');
        $(this).addClass('active');
        $(".firstContainer").eq(index).show().siblings().hide();
        $("html, body").animate({ scrollTop: 200 }, "slow");
        return false;

    });

    

  }

  /*function developerName() {
    $(document).on('hover', '.developerBlock p a', function(event) {
        event.preventDefault();

        //$('.developerBlock .contactBox').show();
        alert(100);

    });
    $('.developerBlock .developerName p').click(function(event) {

        event.preventDefault();
        $('.developerBlock .contactBox').show();
    })
  }*/

  function scrolltoTop() {

    $(document).on('click', '.js_scrollTop', function() {

        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;

    });
  }

  function showscrollDiv() {

    var y = $(this).scrollTop();
      if (y > 800) {
        $('.scrolltopArrow').fadeIn();
      } else {
        $('.scrolltopArrow').fadeOut();
    }

  }

function hpeventSlider() {
    $(".hpeventSlider.owl_content").owlCarousel({
    rewindNav: false,
    addClassActive: true, //important
    mouseDrag: false,
    afterAction: function add_mid_class(el){
      $('.owl-item')                     
        .removeClass('middle')
        .removeClass('middle_beside')
        .removeClass('next_to_mid')
        .removeClass('prev_to_mid');
      var middle_item = Math.floor($('.active').length / 2);
      middle_item --;
      $('.active').eq(middle_item - 1).addClass('middle_beside');
      $('.active').eq(middle_item).addClass('middle');
      $('.active').eq(middle_item + 1).addClass('middle_beside');
      $('.active').eq(middle_item + 1).nextAll().addClass('next_to_mid');
      $('.active').eq(middle_item - 1).prevAll().addClass('prev_to_mid');
    }
  });

  var owl = $(".owl_content").data('owlCarousel');
  $('.owl_wrapper .next').click(function(){owl.next();});
  $('.owl_wrapper .prev').click(function(){owl.prev();});
}


function keyFindingSlider() {
    var owl = $('#fundSliderMain');  

    owl.owlCarousel({       
        loop: false,
        center: true,
        items: 3,
        margin: 0,
        autoplay: false,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        dots: true,
        nav: false,
         // navText: ["<img src='assets/images/white_arrow.png'>","<img src='assets/images/white_arrow.png'>"],
        responsive: {
            0: {
                items: 1,
                dots: true
            },
            768: {
                items: 3,
                dots: true
            },
            1170: {
                items: 3,
                dots: true
        }
        }
    });

    $('.owl-dot.active').next().trigger('click');
    $('.owl-dot:nth-child(1)').addClass('red');
    $('.owl-dot:nth-child(2)').addClass('green');
    $('.owl-dot:nth-child(3)').addClass('blue');
    $('.owl-dot:nth-child(4)').addClass('red');
}


function divEqlheight() {

    var s1 = $('.eventImgblock').height();
    var s2 = $('.eventText').height();

    if (s1 > s2)
        $('.eventText').css('height', s1 + "px");
    else
        $('.eventImgblock').css('height', s2 + "px");
}


function disablePrint() {

    $(document).bind('keyup keydown', function(e) {

        if(e.ctrlKey && e.keyCode == 80){

            return false;
        }


    });

//     jQuery(document).bind("keyup keydown", function(e){
//     if(e.ctrlKey && e.keyCode == 80){
//         return false;
//     }
// });

}

function disableImgtclick() {

    $(document).on('contextmenu', 'img', function(e) {

        return false;

    });

}

function disablePrintscreen() {

    $(window).keyup(function(e){
      if(e.keyCode == 44){
        $("body").hide();
      }

    });
}

function disableRightclick() {

    $('body').contextmenu(function() {
        return false;
    });
}


function showeventDiv() {


     $('.js_eventSec').change(function(){
            $('.eventSLiderWrap').hide();
            $('#' + $(this).val()).show();
        });
}


function loader(){

    setTimeout(function(){

        $('.loaderWrap').hide();

    }, 1000);

}

function navbarsubMenu(){

    $(document).on('click', '.dropdown-menu', function (e) {
      e.stopPropagation();
    });


    if ($(window).width() < 992) {
        $('.dropdown-menu a').click(function(e){
            e.preventDefault();
            if($(this).next('.submenu').length){
                $(this).next('.submenu').toggle();
            }
            $('.dropdown').on('hide.bs.dropdown', function () {
               $(this).find('.submenu').hide();
            })
        });
    }
}

  


  
