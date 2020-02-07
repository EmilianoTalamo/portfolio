$(document).ready(function()
{
  $(window).scroll(function()
  {
    if ($('body').height() <= ($(window).height() + $(window).scrollTop()))
    {
      $('#footer').stop().animate({
        'bottom': '-635px'
      }, 1000);
    }
    else{
      $('#footer').stop().animate({
        'bottom': '-700px'
      }, 500);
    }
  });
});
