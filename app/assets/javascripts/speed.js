$(document).ready(function(){

if (!gon.codeScript){
  return;
}
  var codeScript = gon.codeScript;
  var codeArray = codeScript.split('');
  var wordCount = codeArray.length / 5;
  var inputArray = [];
  var errorCount = 0;
  var wpm = 0;
  var errorRate = 0;

  $('#current-script').html(codeScript);

  $('.script-input').focus(function(){
    $('#timer').timer();
  });

  $(".script-input").on("keyup", function(){
      inputText = $(this).val();
      inputArray = inputText.split('');
      var html   = "";
      var keyCode = event.keyCode;
         if (keyCode == 16){
           return;
         }else{
            for(var i = 0; i < codeArray.length; i++){
              var shouldCountAsError = inputArray[i] !== codeArray[i] && i < inputArray.length;
              if(inputArray.length === (i)){
                  html = html + "<span class='active'>" + codeArray[i] + "</span>";
              } else if(inputArray[i] === codeArray[i]){
                  html = html + "<span class='green'>" + codeArray[i] + "</span>";
              } else if(shouldCountAsError){
                  html = html + "<span class='red'>" + codeArray[i] + "</span>";
                  errorCount += 1;
              } else {
                  html = html + codeArray[i];
              }
            }
          }
      $("#current-script").html(html);
      //console.log(errorCount);
  });

$('.submit').click(function(){
  $('#timer').timer('pause');
  var inputTime = $('#timer').data('seconds');
    if (inputArray.join() === codeArray.join()){
      wpm = computeWPM(inputTime);
      errorRate = computeErrorRate(errorCount);
      return wpm, errorRate;
    }else{
      alert("fix it");
    }
  });

  function computeWPM(time){
    return wordCount / (time / 60);
  }

  console.log(wpm, errorRate)

  function computeErrorRate(errorCount){
    return errorRate = ((inputArray.length - errorCount) / inputArray.length) * 100;
  }
  // $('#modal').modal('hide', function(wpm, errorRate) {
  //   $('#wpm').html(wpm);
  //   $('#errorRate').html(errorRate);
  // });

  $(".dismiss").click(function(){
    location.reload();
  });

});
