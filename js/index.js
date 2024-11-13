// loader
$(document).ready(function () {
    $(".lds-circle").fadeOut(1000, function () {
        $("#loading").fadeOut(1000, function () {
            $("body").css("overflow", "auto")
            $("#loading").remove()
        });
    })

    // to change navbar color 
    let sectionOffset = $("#about").offset().top
    
    $(window).scroll(function () {
        let windowScroll = $(window).scrollTop()
        if(windowScroll > sectionOffset - 100){
            $(".navbar").addClass('bg-white')
            $(".back-to-top").fadeIn(500);
            $(".nav-link a").removeClass("active");
        }else{
            $(".navbar").removeClass('bg-white')
            $(".back-to-top").fadeOut(500)
        }
    })
    
    // to scroll between sections smoothely :)
    $("a[href^='#']").click(function (e) {
        let aHref = e.target.getAttribute('href')
        let sectionOffset = $(aHref).offset().top
        $("html, body").animate({scrollTop:sectionOffset}, 1000)
        $(e.target).parent().siblings().children('a').removeClass('active') // w momkn bdl children --> find
        $(e.target).addClass('active')
    })

});    
