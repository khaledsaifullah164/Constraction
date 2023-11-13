$(function () {
  $(".wrapper").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  $(function () {
    $(".nice-scroll").niceScroll({
      cursorcolor: "#00F",
      cursorHight: "20px",
    });
  });
});
