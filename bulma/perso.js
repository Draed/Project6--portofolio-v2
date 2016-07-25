$(document).ready(function(){

  $('.pie-yum').addEventListener("mouseover",function(){
    ('.tag').fadeIn();
    ('.tag').style.display= "true";
  });

  $('.pie-yum').addEventListener("mouseout",function(){
    ('.tag').fadeOut();
    ('.tag').style.display= "none";

  });
});