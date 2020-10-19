console.log('js');
  $('#para1, #para2, #para3').hide();
  $('#two').hide();
  $('#image-staff1, #image-staff2, #image-staff3, #image-staff4, #image-staff5, #image-staff6').hide();
$(document).ready(function(){

  $('.menu').click(function(){
    $('#two').toggle();
  });

  $('#button-read').click(function(){
    $('#para1').toggle();
  });

  $('#button-read2').click(function(){
    $('#para2').toggle();
  });

  $('#button-read3').click(function(){
    $('.staff, #para3').toggle();
  });


  $('.button-gym').click(function(){
    alert('thanks for signing up!!');
  });

  $('.prices-six').click(function(){
    alert('booking succesfull!!');
  });

  $('.pay-butt').click(function(){
    alert('thanks for being part of our gym!!');
  });

  $('.dot').click(function(){
    $(this).toggleClass('active');
  });


  $('#prices-two').click(function(){
    $('#prices-two, #prices-three').css('background','green')

  });

  $('#prices-three').click(function(){
    $('#prices-two, #prices-three').css('background','green')

  });

});
