$("#accordion h3").click(function() {
  $(this).toggleClass('open');

  $(this).parent().siblings().find('h3').removeClass('open');
  $("#accordion ul ul").slideUp("fast");
  if (!$(this).next().is(":visible")) {
    $(this).next().slideDown("fast");
  
  }
})


  $('.leftsidebarButton').click(function(){
    $('#left-side').toggleClass('active');
})
