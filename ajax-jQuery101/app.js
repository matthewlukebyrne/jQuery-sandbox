// AJAX makes calls and request behind the scenes so you don't have to refresh the page, other htmls, JSON, post requests


// Load test.html file using AJAX with load! 
$('#result').load('test.html', function (responseTxt, statusTxt, xhr) {
  if (statusTxt === 'success') {
    alert('it went grand dude');
  } else if (statusTxt == 'error') {
    alert('Error:' + xhr.statusText);
  }
});


// Get - alternative wat to fetch the load method above
$.get('test.html', function (data) {
  $('#result').html(data);
});


// Get JSON data from user.json (user.firstName)
$.getJSON('user.json', function (data) {
  $.each(data, function (i, user) {
    $('ul#users').append('<li>' + user.firstName + '</li>');
  });
});


// Ajax method to fetch data from a API (very handy!)
$.ajax({
  method: 'GET',
  url: 'https://jsonplaceholder.typicode.com/posts',
  dataType: 'json'
}).done(function (data) {
  console.log(data);
  $.map(data, function (post, i) {
    $('#result').append('<h3>' + post.title + '</h3><p>' + post.body + '</p>');
  })
});



// POST REQUEST using Jquery and Ajax
$('#postForm').submit(function (e) {
  e.preventDefault();
  let title = $('#title').val();
  let body = $('#body').val();
  let url = $(this).attr('action');


  $.post(url, {title:title, body: body}).done(function (data){
    console.log(data);
    console.log('Post Saved');
    console.log(data);
  });
});



// https://jsonplaceholder.typicode.com/