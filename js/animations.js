// Fade Out Effects
$('#btnFadeOut').click(function (){
  // Can set fast or slow or milliseconds
  // Inlcude a additional function with text if you want as a parameter (will show in button)
  $('#box').fadeOut(3000, function(){
    $('#btnFadeOut').text('Ergh my gawd its gone!');
  });
});
// Fade Out Effects (When you fade out obvs)
$('#btnFadeIn').click(function () {
  $('#box').fadeIn(3000);
});

// Fade Toggle (When you fade out obvs)
$('#btnFadeTog').click(function () {
  $('#box').fadeToggle(100);
});


// Effects All things Slide
$('#btnSlideDown').click(function () {
  $('#box').slideDown(3000);
});
$('#btnSlideUp').click(function () {
  $('#box').slideUp(3000);
});
$('#btnSlideTog').click(function () {
  $('#box').slideToggle(100);
});
$('#btnStop').click(function (){
  $('#box').stop();
})

// Animated Effects
// Css values needs to be positon relative otherwise they will not work
$('#moveRight').click(function (){
  // Passes in a object with options
  // Adds css property of left 500
  // You can add a series of atrributes that have to be numeric
  $('#box2').animate({
    left: 500,
    height: '300px',
    width: '300px',
    opacity: '0.5',
  });
});

// Animated Effects
// Css values needs to be positon relative otherwise they will not work
$('#moveLeft').click(function () {
  // Passes in a object with options
  // Adds css property of left 500
  $('#box2').animate({
    left: 0,
    height: '100px',
    width: '100px',
    opacity: '1',
  });
});


$('#moveAround').click(function () {
  let box = $('#box2');
  box.animate({
    left: 300
  });
  box.animate({
    top: 300
  });
  box.animate({
    left: 300
  });
  box.animate({
    left: 0,
    top: 300
  });
  box.animate({
    left: 0,
    top: 0,
  });
});