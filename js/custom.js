    $(document).ready(function() {
                $("#floatleft").click(function(event) {
                    event.preventDefault();
                    $("#floatleft").fadeTo('slow', 0,function  (event) {
                        $(this).hide();
                    });
                });
                $("#floatleftclick a").click(function(event) {
                    event.preventDefault();
                    $("#floatleft").fadeTo('slow', 1);
                });
                $("#floatright").click(function(event) {
                    event.preventDefault();
                    $("#floatright").fadeTo('slow', 0,function  (event) {
                        $(this).hide();
                    });
                });
                $("#floatrightclick a").click(function(event) {
                    event.preventDefault();
                    $("#floatright").fadeTo('slow', 1);
                });
                function afis () {
                    var top = $(window).scrollTop();
                    $("#floatleft").css("top",top);
                    $("#floatright").css("top",top);
                      var height = $(window).height;
                        height-=40;
                    $("#floatleft > img").css("height",height);
                    $("#floatright > img").css("height",height);
                }
                function resizepics () {
                    var els = $(".lecturer");
                    var hs = $(".text > h1");
                    var top = $(hs[0]).offset().top;

                    $.each(els, function(index, val) {
                        el = $(els[index]);
                        h = $(hs[index]);
                        // console.log(top); 
                        if(index > 0)
                        {
                            mt = parseInt(h.offset().top - top) - 72;
                            // console.log(mt);
                            el.css("margin-top",mt + "px");
                            top = h.offset().top;
                        }
                        
                    });
                // console.log(els.length , els.length);
                }
                resizepics();
                $(window).resize(function(event) {
                    event.preventDefault();
                    resizepics();
                });
                $(".navbar-right  li a").click(function(event) {
                    var cta = $(this).attr("href");//call to action
                    var offset = $(cta).offset().top;
                    if(cta == "#anasayfa")
                    {
                        $('html, body').stop().animate({
                         scrollTop: 0
                         }, 2000);
                    }
                    else
                    {
                        $('html, body').stop().animate({
                         scrollTop: offset
                         }, 2000);    
                    }
                    
                });
                $("#btn-back-to-top").click(function(event) {
                    event.preventDefault();
                     $('html, body').stop().animate({
                     scrollTop: 0
                     }, 2000);
                    // $('#year').text(austDay.getFullYear());
                });
                // console.log($.browser)
                calctime();
                var h1 = $("#anasayfa").offset().top;
                var h2 = $("#hakkinda").offset().top ;
                var h3 = $("#oturumlar").offset().top ;
                var h4 = $("#nerede").offset().top ;
                var h5 = $("#sponsorlar").offset().top ;
                // console.log(h1);
                afis();
                $(document).scroll(function  (event) {
                var top = $(window).scrollTop();
                afis();

                if(top < h2 -1)
                {
                    $("li.active").removeClass('active');
                    $(".navbar-right  >  li").eq(0).addClass('active');
                }
                else if( top > h2 -1 && top < h3 -1)
                {
                    $("li.active").removeClass('active');
                    $(".navbar-right > li").eq(1).addClass('active');
                }
                else if( top > h3 -1 && top < h4 -1)
                {
                    $("li.active").removeClass('active');
                    $(".navbar-right > li").eq(2).addClass('active');
                }
                else if( top > h4 -1 && top < h5 -1 )
                {
                    $("li.active").removeClass('active');
                    $(".navbar-right > li").eq(3).addClass('active');
                }
                else if( top > h5 -1    )
                {
                    $("li.active").removeClass('active');
                    $(".navbar-right > li").eq(4).addClass('active');
                }
                if(top > 0)
                {
                    // console.log($("#nav-bar").length);
                    // console.log("white");
                    // alert('change');
                        if($("#nav-bar").hasClass('navbar-active') == false)
                        {
                          $("#nav-bar").addClass('navbar-active');  
                        }
                        $(this).fadeOut('slow');
                    
                   
                }
                else
                {
                    if($("#nav-bar").hasClass('navbar-active') == true)
                    {
                     $("#nav-bar").removeClass('navbar-active')   
                    }
                      $("#nav-bar").addClass('navbar-default');  


                }
                // console.log(top);
            });
            var width = $( window ).width();
                console.log(width)
                if(width < 600)
                {
                    $("td").eq(0).css("width","90px");
                    $("#floatleftclick,#floatrightclick").hide();
                    $(".sponsors").removeClass('sponsors').addClass('sponsors_mini');
                    $("#sponsorlar li").css("margin-left","0px");
                }
        });