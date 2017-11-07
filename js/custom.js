$(document).ready(function() {
  // Pop up the QR code modal when user click the icom
  $(".facebook-icon").on('click', function() {
    $("#qrModal img").attr("src", "image/facebook_qr.jpg");
    $("#qrModal .text-center").html("Scan the QR code or follow this "
      +"<a target='_blank' href='https://www.facebook.com/cheng.chaoran'>link</a>");
    $("#qrModal").modal();
  });
  $(".wechat-icon").on('click', function() {
    $("#qrModal img").attr("src", "image/wechat_qr.jpg");
    $("#qrModal").modal();
  });
  $(".github-icon").on('click', function() {
    $("#qrModal img").attr("src", "image/QR_Code_github.jpg");
    $("#qrModal .text-center").html("Scan the QR code or follow this "
      +"<a target='_blank' href='https://github.com/laecheng'>link</a>");
    $("#qrModal").modal();
  });
  $(".linkedin-icon").on('click', function() {
    $("#qrModal img").attr("src", "image/QR_Code_linkedin.jpg");
    $("#qrModal .text-center").html("Scan the QR code or follow this "
      +"<a target='_blank' href='https://www.linkedin.com/in/chaorancheng/'>link</a>");
    $("#qrModal").modal();
  });

  // notity user the sections
  $('body').scrollspy({target: ".navbar-custom", offset: 50});

  // dynamiclly affix the navbar
  $('.navbar-custom').affix({
      offset: {
        top: function(){return $("header").height()}
      }
  });

  // add smooth scroll animation to the navagation bar
  $(".navbar-custom a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 550, function(){
        window.location.hash = hash;
      });
    }
  });

  // initialize the plugin for pinterest grid
  $('#portfolio_grid').pinterest_grid({
    no_columns: 4,
    padding_x: 25,
    padding_y: 40,
    margin_bottom: 50,
    single_column_breakpoint: 751
  });
  // dynamiclly change the text of the show more link
  $(".link-toggle").click(function() {
    if($(this).html() == "Show more") {
      $(this).html("Show less");
    } else {
      $(this).html("Show more")
    }
  });
  // $(window).resize(function() {
  //   var window_size = $(window).width();
  //   if(window_size <= 752) {
  //     $("#myCarousel").addClass("header-hide");
  //     $(".navbar-custom").removeClass("affix-top");
  //     $(".navbar-custom").addClass("fixed-top");
  //   } else {
  //     $("#myCarousel").removeClass("heade-hide")
  //     $(".navbar-custom").removeClass("fixed-top");
  //   }
  // });
});
