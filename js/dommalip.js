// Wrapping in curly braces for a object instead
// You can use a object instead for mutliple CSS properties if you want
$('p.para1').css({
  color: 'red',
  backgroundColor: '#ccc'
});

// Add and remove classes (one in CSS)
$('p.para2').addClass('myClass');
$('p.para2').removeClass('myClass');

// plus toggle if given a button
$('#btn1').click(function () {
  $('p.para2').toggleClass('myClass');
});

// adding and changing content within the dom'
$('#myDiv').text('Hello World');

// Also .HTML with tags
$('#myDiv').html('<h3>Hello World</h3>');
// Alert text
// alert($('#myDiv').text());

// Adds to the end
$('ul').append('<li>Append list item append</li>');

// Add to the top
$('ul').prepend('<li>Append list item prepend</li>');


// Append to (Will reverse sentences)
$('.para1').appendTo('.para2');
$('.para1').prependTo('.para2');

// Before the ul and not inside
$('ul').before('<h4>Hello</h4>');
// Then after
$('ul').after('<h4>Hello After</h4>');

// Takes all of the inner elements out = empty
// $('ul').empty();

// // Detach gets rids of it entirely on the DOM
// $('ul').detach();

// Working with atrributes
// Opens up another blank tab on href link (very handy)
$('a').attr('target', '_blank');
// alert($('a').attr('href'));

// You can also remove links innit!
// $('a').removeAttr('href')

// Wrapping (very handy) wraps each indvidual
$('p').wrap('<h1>');
// Wrap all will use one h1
$('p').wrapAll('<h1>');


// Keyup event and hit enter to populated items with append
// Check keycode (each key has their own code)

$('#newItem').keyup(function(e){
    let code = e.which;
    if(code === 13){
      e.preventDefault();
      $('ul').append('<li>'+ e.target.value + '</li>');
    }
});


let myArr = ['Steve', 'Brad', 'Kelly', 'Nate', 'Jose'];
// For each in jQuery with Arrays 
// takes an index and value as parameter
$.each(myArr, function(i, val){
  $('#users').append('<li>'+ val +'</li>')
});