// jQuery

$(function () {
  // smooth scroll header app
  $("nav li a").click(function () {
    var secClassName = "." + $(this).attr("id");
    if(secClassName == ".home"){
        $("html,body").animate({
            scrollTop: 0,
        });
    }else {
        $("html,body").animate({
            scrollTop: $(secClassName).offset().top,
          });
          console.log($(secClassName).offset().top)
    }
    
  });


  // scroll to up button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 250) {
      $("#upBtn").show();
    } else {
      $("#upBtn").hide();
    }
  });

  $("#upBtn").on("click", function () {
    $("html,body").animate({
      scrollTop: 0,
    }, 700);
  });

  $("nav li a").click(function(click) {
    click.preventDefault();
});

});
