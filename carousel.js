// Get carousel elements

var tLeftButton = $("#testimonials-l");
var tRightButton = $("#testimonials-r");

// Get number of <li> elements in carousel

var tItemCount = document.getElementById('testimonials-ul').querySelectorAll('li').length;

// Set length based on that

var tWidth = tItemCount * 100 + "vw";
$(".testimonials ul").css("width", tWidth);

// Button functionality (looped)

var tPosition = 0;
var tAnimating = false;

var goToPosition = function(newPosition) {
  if (tAnimating) return;
  tAnimating = true;
  tPosition = newPosition;
  var m = "-" + (100 * tPosition) + "vw";
  $(".testimonials ul").animate({
    "left": m
  }, 500, function() {
    tAnimating = false;
  });
};

tRightButton.click(function() {
  var next = (tPosition + 1) % tItemCount;
  goToPosition(next);
});

tLeftButton.click(function() {
  var prev = (tPosition - 1 + tItemCount) % tItemCount;
  goToPosition(prev);
});

// If there's only one quote, hide the buttons altogether

if (tItemCount == 1) {
  $('.testimonials-control').css('display', 'none');
}
