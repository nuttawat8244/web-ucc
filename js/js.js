$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".tag");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }

});

$(document).ready(function(){
  $("#prod").load("prod.html");
  $("#activity").load("activity.html");
  $("#modal-product").load("modal.html");
  $("#iso-container").load("iso.html");
  $("#news-container").load("news.html");

  // $("#services").load("services.html");
  
});


$(document).ready(function () {
$(".owl-carousel1").owlCarousel({
  loop: true,
  center: true,
  margin: 330,
  responsiveClass: true,
  nav: false,
  autoplay: true, // Add autoplay option
  autoplayTimeout: 15000, // Set autoplay timeout in milliseconds (e.g., 5000ms = 5 seconds)
  autoplayHoverPause: true,
  smartSpeed:1700,
  responsive: {
    0: {
      items: 1,
      margin:50,
      nav: false
    },
    680: {
      items: 1,
      margin:30,
      nav: false,
      loop: true
    },
    1000: {
      items: 2,
      nav: true
    }
  }
});
});