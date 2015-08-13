$(document).ready(function(){

  if (!gon.codeScript){
    return;
  }

  var codeScript = gon.codeScript;
  var codeArray = codeScript.split('');
  var count;

  $.each(codeArray, function( key, value ){
    $('#current-script').append('<span>' + value + '<span>');
  });

  

});
