$(document).ready(function () {
    $(".fade-in").fadeIn(10000);
  
    $("#logo-container").animate({
      height: "400px",
      width: "400px",
      opacity: 0.9
    });
  
    $(".img-container").mouseover(function () {
      $(".fav-images")
        .animate(
          {
            opacity: "0.7",
            width: "250px"
          },
          600
        )
        .mouseout(function () {
          $(this).animate(
            {
              opacity: "1"
            },
            200
          );
        });
    });
  });
  