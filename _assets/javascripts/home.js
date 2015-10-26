'use-strict';

$(document).ready(function(){
  submitListener();
  categoryListener();
})

function submitListener(){
  console.log("submit ready");
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
  console.log("cards to unhide" + cards);
  reDisplay(cards);
}

function hideCards(category){
  var cards = findAll();
  console.log("cards to hide" + cards);
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
      console.log("unhidden" + this);
  });
}

function unDisplay(cards){
  $.each(cards,function(){
      $(this).hide(500);
      console.log("hidden" + this);
  });
}





