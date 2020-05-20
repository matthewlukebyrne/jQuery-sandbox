// JQuery is small fast and feature rich library
// Makes DOM maniluplation much easier (but still easier these days in vanilla JS also, but nice to know the syntax)

// SELECTORS
// The basics of selectors
// Money sign represent Jquery!
// Single quotes are better in the world of JS keep using them 
// Usually with J Query you see double or single quotes

$('h1').hide(); // // All H1s

$('h1#heading1').hide(); // // Target particular heading with ID #

$('h1.heading2').hide(); // Target class headings with class .

// Target the span inside the paragraph to red with css method
$('p span').css('color', 'red');

// Get more specific with CSS3 selectors li:first child
// Can use HEX values
$('ul#list li:first').css('color', 'red');
// $('ul#list li:last').css('color', 'red');

// Even and odd elements
$('ul#list li:even').css('color', 'orange');
$('ul#list li:odd').css('background-color', 'green');

// Every third value with nth value - very specific - list style none remove bullets - every third doesnt have a bullet
$('ul#list li:nth-child(3n)').css('list-style', 'none');

// Can use the type html atrribute as a selector in jQuery (pretty handy)
// $(':button').hide();
// $(':submit').hide();
// $(':text').hide();

// Change all the elements that have a href atrribute - work with atrributes as selectors
$('[href]').css('color', 'red');

// One step further - you can target atrrbutes as well atrributes values in JQuery
$('[href="http://yahoo.com"]').css('color', 'white');

// Highlights everthing with a astrik!
// $('*').hide();

// https://www.w3schools.com/jquery/jquery_ref_selectors.asp






