$("#🍔").on("click", function()
{
  $("nav").css({"left": "0"});
});

$("html").on("swiperight", function()
{
  $("nav").css({"left": "0"}); 
});

$("body").on("swipeleft", function()
{
  $("nav").css({"left": "-80vw"}); 
});

$("section, aside, footer").on("click", function()
{
  $("nav").css({"left": "-80vw"}); 
});