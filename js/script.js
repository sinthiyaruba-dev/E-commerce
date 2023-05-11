$(function(){

  // BANNER SLIDER START
  $('.banner-slider').slick({
    infinite: true,
    autoplay: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: true,
    pauseOnHover: false,
    prevArrow: '.banner-left',
    nextArrow: '.banner-right',
  });
  // BANNER SLIDER END

  // PRO-COUNTDOWN START

  (function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "09/30/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());

  // PRO-COUNTDOWN END
  // PHONE SLIDER START

  $('.phone-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '.phone-right',
    nextArrow: '.phone-left',
    centerMode: true,
    centerPadding: '0',
  });

  // PHONE SLIDER END
  // TESTIMONIAL SLIDER START

  $('.test-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: true,
    prevArrow: '.test-right',
    nextArrow: '.test-left',
    centerMode: true,
    centerPadding: '0',
  });

  // TESTIMONIAL SLIDER END
  

})
$(function(){

  //  COUNTER-COUNT-START
  $('.count').counterUp({
    delay: 10,
    time: 1500,
  });
  //  COUNTER-COUNT-END
  
  // PARTNER SLIDER START
  $('.partner-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '.right',
    nextArrow: '.left',
    centerMode: true,
    centerPadding: '0px',
  });
  // PARTNER SLIDER END
  
  })
  // top button js part
$('.scroll-button').on("click",function(){
  $("html,body").animate({scrollTop:0},1000)
})
$(window).scroll(function(){
  var scroll= $(this).scrollTop();
  if (scroll>500){
    $('.scroll-button').fadeIn(500);
  }
  else{
    $('.scroll-button').fadeOut(500);
  }
})