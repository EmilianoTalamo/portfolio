$(document).ready(function()
{
  $(window).scroll(function()
  {
    if ($(window).scrollTop() <= 700)
    {
      $('#navbar').stop().animate({
        'top': '-50px'
      }, 300);
    }
    else{
      $('#navbar').stop().animate({
        'top': '0'
      }, 800);
    }
  });
});
