'use-strict';

$(document).ready(function(){
  submitListener();
  friendListener();
});

function submitListener(){
  var $form = $(".signup");

  $form.submit(function(event){
    event.preventDefault();
    $('.submit-button').val('please wait...').prop('disabled',true);
    $.ajax({
      type: 'POST',
      url: '//nyc.us11.list-manage.com/subscribe/post-json?u=7aa897cfc40f7cfbb83ffadd4&amp;id=710836cd94&c=?',
      data: $form.serialize(),
      timeout: 5000,
      cache: false,
      dataType: 'jsonp',
      contentType: "application/json; charset=utf-8",
      error: function(err) {console.log("Error.");},

      success: function(data){

        if (data.result !== "success") {
          console.log(data);
          $('.submit-button').val('Please Wait...').prop('disabled',true);
          $('#conf-message').html('').slideUp(700);
          $('#conf-message').html("Something went wrong, please try to submit your details again.").slideDown(700, function(){
            $('.submit-button').val('Raise Your Hand!').prop('disabled',false);
          });
        }

        else {
          console.log(data);
            $('.signup').children().hide(400,function()
              {$('#conf-message').html("Thanks! Please confirm your email address.").slideDown(700);
          });
        }
      }
    });
  });
}

function submitListener(){
  var $form = $(".friends");

  $form.submit(function(event){
    event.preventDefault();
    $('.submit-button').val('please wait...').prop('disabled',true);
    $.ajax({
      type: 'POST',
      url: '//nyc.us11.list-manage.com/subscribe/post-json?u=7aa897cfc40f7cfbb83ffadd4&amp;id=710836cd94&c=?',
      data: $form.serialize(),
      timeout: 5000,
      cache: false,
      dataType: 'jsonp',
      contentType: "application/json; charset=utf-8",
      error: function(err) {console.log("Error.");},

      success: function(data){

        if (data.result !== "success") {
          console.log(data);
          $('.submit-friends').val('Please Wait...').prop('disabled',true);
          $('#conf-friends').html('').slideUp(700);
          $('#conf-friends').html("Something went wrong, please try to submit your details again.").slideDown(700, function(){
            $('.submit-friends').val('Raise Your Hand!').prop('disabled',false);
          });
        }

        else {
          console.log(data);
            $('.signup').children().hide(400,function()
              {$('#conf-friends').html("Thanks! Please confirm your email address.").slideDown(700);
          });
        }
      }
    });
  });
}