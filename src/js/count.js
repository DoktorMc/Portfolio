
// $(window).scroll(function () {
  $('.facts_items-numbers').each(function () {
    $(this).prop('Count', 0).animate({
      Count: $(this).text()
    }, {
      duration: 2000,
      easing: 'swing',
      step: function (now) {
        $(this).next(Math.ceil(now));
        console.log(now)
      }
    });
  });
// });
