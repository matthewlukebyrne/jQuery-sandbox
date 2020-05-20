// Functions expanding on simple selectors and then using a array of different features malipulating the elements on the page
// If you want to load jquery at the top of an index page "doucment.ready" will do this (handy to know)


// Selecting id of btn1 and incorporating a function
// There is a event in the parameter
// $('#btn1').click(function (e){
//   alert('button clicked')
// });


// // Behind the scenes its running the on method which is the longer one than above
// $('#btn1').on('click', function (e) {
//     alert('Button clicked!');
// });


// Click button to hide text
$('#btn1').on('click', function () { 
  $('.para1').hide();
});


// Click button to show text
$('#btn2').on('click', function () {
  $('.para1').show();
});

// Click button to toggle text
$('#btn3').on('click', function () {
  $('.para1').toggle();
});

// Double click to toggle text
$('#btn4').dblclick(function (){
  $('.para1').toggle();
});

// Hover toggle (shorthand syntax for two other events mouseenter and mouseleave into one!)
$('#btn5').hover(function (){
  $('.para1').toggle();
});

// // onclick example of hover with mouseenter and mouseleave
// $('#btn5').on('mouseenter', function () {
//   $('.para1').toggle();
// });

// $('#btn5').on('mouseleave', function () {
//   $('.para1').toggle();
// });

// Mousemove to make your text go crazy
$('#btn6').on('mousemove', function () {
  $('.para2').toggle();
});


// Mouse Up and down when held and clicked
$('#btn7').on('mousedown', function () {
  $('.para2').toggle();
});

$('#btn7').on('mouseup', function () {
  $('.para2').toggle();
});

// Click event on the console returns all the MouseEvents you can select
$('#btn8').click(function (e){
  console.log(e);
  // Full button id
  console.log(e.target);
});

// Co-ords on the console log 
// Doucument to highlight the entire window and show on html
$(document).on('mousemove', function (e) {
  $('#co-ords').html(`You have moved on ${e.clientY} and ${e.clientX}`);
});

// Form Events with focus on a particular element
// Blur switches it back to its color preffered state / outside the box
// The this keyword coming back to haunt me again from JS
$('input').focus( function () {
  $(this).css('background-color', 'pink');
});
$('input').blur( function () {
  $(this).css('background-color', 'white');
});


// Keyup and Keydown events
// Output whatever goes to the console
$(document).keyup(function (e){
  $('#text-show').html(`${e.target.value}`)
});

// Change
$('#gender').change(function(e){
  alert('Changed');
});

// Form Submit Events
// Need to prevent the default value of passing through with prevent default
// Right click and get selector value in dev tools to target specific things (handy)
$('#form').submit(function (e){
  e.preventDefault();
  alert(`You have submitted this value ${e.target[0].value} ${e.target[1].value} successfully!`);
  console.log(e)
});

// https://www.w3schools.com/jquery/jquery_events.asp