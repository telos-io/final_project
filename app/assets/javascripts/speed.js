$(document).ready(function(){

if (!gon.codeScript){
  return;
}
  var codeScript = gon.codeScript;
  var codeArray = codeScript.split('');
  var wordCount = codeArray.length / 5;
  var inputArray = [];
  var errorCount = 0;
  var wpm;
  var errorRate;

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
      return errorCount;
  });

$('.submit').click(function(){
  $('#timer').timer('pause');
  var inputTime = $('#timer').data('seconds');
    if (inputArray.join() === codeArray.join()){
      wpm = computeWPM(inputTime).toFixed(1);
      errorRate = computeErrorRate(errorCount).toFixed(2);
      $('#wpm').html(wpm + " words per minute");
      $('#errorRate').html(errorRate + "%");
    }else{
      alert("Fix it");
    }
    console.log(wpm, errorRate)
    return wpm, errorRate;
  });

  function computeWPM(time){
    return wordCount / (time / 60);
  }

  function computeErrorRate(errorCount){
    return errorRate = ((inputArray.length - errorCount) / inputArray.length) * 100;
  }


  $(".dismiss").click(function(){
    location.reload();
  });

});
