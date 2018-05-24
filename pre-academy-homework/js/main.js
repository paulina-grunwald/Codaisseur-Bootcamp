
$(document).ready(function(){
    // smooth scrolling to various sections of the website
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);
        var scroll;

        // Immediately stop if no anchors are found.
        if (!this.validAnchor && !$target.length) {
          return;
        }
        
        if($(window).scrollTop()==0){
            scroll =  ($target.offset().top) - 160
        }else{
            scroll =  ($target.offset().top) - 60
        }
        $('html, body').stop().animate({
            'scrollTop': scroll
        }, 900, 'swing', function () {
            //window.location.hash = target;
        });
    });

    // Animate the main quote on the website
    $('.quote').each(function(){
      $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });

    anime.timeline({loop: true})
      .add({
        targets: '.quote .letter',
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: function(el, i) {
          return 150 * (i+1)
        }
      }).add({
        targets: '.quote',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
    });
