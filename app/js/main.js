$(function () {
  
      $('.reviews__slider').slick({
        slideToShow: 1,
        slideToScroll: 1,
        infinite: true,
        
        prevArrow: '<button class="slick-btn slick-prev"><svg class="slick-svg" width="22" height=""><use xlink: href="images/svg-sprite/sprite.svg#left"></use></svg></button>',
        nextArrow: '<button class="slick-btn slick-next"><svg class="slick-svg" width="22" height=""><use xlink: href="images/svg-sprite/sprite.svg#right"></use></svg></button>'
      });



      // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
      modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    


      $(document).scroll(function () {
    var scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    if (scrollTop >= 50) {
      $('.scroll-top').addClass("hidden");
    }
    else {
      $('.scroll-top').removeClass("hidden");
    }
  });


  $(document).scroll(function () {
    var scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    if (scrollTop >= 120) {
      $('.scroll-top').addClass("appearance");
    }
    else {
      $('.scroll-top').removeClass("appearance");
    }
  });


  $(document).scroll(function () {
    var scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    if (scrollTop >= 1000) {
      $('.scroll').addClass("active");
    }
    else {
      $('.scroll').removeClass("active");
    }
  });

});