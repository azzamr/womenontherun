'use-strict';

$(document).ready(function(){
  submitListener();
  categoryListener();
})

function submitListener(){
  var $form = $(".signup")

  $form.submit(function(event){
    event.preventDefault();
    $('.submit-button').val('please wait...').prop('disabled',true);
    var data = $form.serialize();
    $.ajax({
      type: 'POST',
      url: '//nyc.us11.list-manage.com/subscribe/post-json?u=7aa897cfc40f7cfbb83ffadd4&amp;id=710836cd94&c=?',
      data: $form.serialize(),
      timeout: 5000,
      cache: false,
      dataType: 'jsonp',
      contentType: "application/json; charset=utf-8",
      error: function(err) {console.log("Error.")},

      success: function(data){

        if (data.result != "success") {
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



function categoryListener(){
  $(".categories").click(function(event){
    event.preventDefault();
    var category = $(event.target.closest('a')).attr("class");
    
    if(category === "all"){
      showAll();
    }
    else{
      showCategory(category);
    }
  });
}

function showCategory(category){
  hideCards();
  unhideCards(category);
}

function showAll(){
  var cards = findAll();
  reDisplay(cards);
}

function unhideCards(category){
  var cards = findToShow(category);
  reDisplay(cards);
}

function hideCards(category){
  var cards = findAll();
  unDisplay(cards);
}

function findAll(){
  var cards = [];
  $.each($('.posts').children(), function(){
    if(!(this.hasAttribute("id"))){
      cards.push(this);
    }
  });
  return cards;
}

function findToShow(category){
  var toShow = [];
  $.each($('.posts').children(),function(){
    if($(this).hasClass(category)){
      toShow.push(this);
    }
  })
  return toShow;
}

function reDisplay(cards){
  $.each(cards,function(){
      $(this).show(500);
  });
}

function unDisplay(cards){
  $.each(cards,function(){
      $(this).hide(500);
  });
}





