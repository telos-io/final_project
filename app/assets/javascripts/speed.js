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

  $('#current-script').html(codeScript);

  $('.script-input').focus(function(){
    $('#timer').timer();
  });

  $(".script-input").on("keyup", function(){
      inputText = $(this).val();
      inputArray = inputText.split('');
      var html   = "";
      console.log(inputArray);
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
                  errorCount -= 1;
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
  inputTime = $('#timer').data('seconds');
  console.log(codeArray);
    if (inputArray.join() === codeArray.join()){
      wpm = computeWPM(inputTime)
      alert("Good " + wpm);
    }else{
      alert("fix it");
    }
  });

  function computeWPM(time){
    wpm = wordCount / inputTime;
  }

});
