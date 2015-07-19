$(document).ready(function(){

if (!gon.codeScript){
  return;
}
  var codeScript = gon.codeScript;

  var codeArray = codeScript.split('');

// Speed view, first iteration
  var count = 0;
  var codeArrayCount = 0;
  var inputArray = [];
  var textInput;
  var wordCount = codeArray.length / 5;
  var inputTime;
  var errorCount = 0;
  var errorRate;

  $.each(codeArray, function( key, value ){
    $('#current-script').append('<span>' + value + '</span>');
  });

  $('.script-input').focus(function(){
    $('#timer').timer();
  });

  $('.script-input').keydown(function(){
     textInput = $(this).val();
     var keyCode = event.keyCode;
        if (keyCode == 16){
          return;
        }else{
          inputArray = textInput.split('');
          count = inputArray.length;
          $("#current-script span").eq(count).addClass("active");
          $("#current-script span").eq(count - 1).removeClass("active");
          compare(inputArray, codeArray);
          return count;
      };
  });
  //comapres input to code
  function compare(inputArray, codeArray){
    var num = count - 1;
    // console.log("inputArray[num]: " + inputArray[num]);
    // console.log("codeArray[num]: " + codeArray[num]);
    $.each(inputArray[num], function()){
      if (inputArray.join() === codeArray.join()){
        $("#current-script span").eq(num).addClass("green");
        $("#current-script span").eq(num).removeClass("red");
        //stays green
      }else{
        $("#current-script span").eq(num).addClass("red");
        //change red
        errorCount += 1;
      };
    };
    return errorCount;
  };
  //click submit and computes the scores
  $('.submit').on('click', function() {
    $('#timer').timer('pause');
    inputTime = $('#timer').data('seconds');

     if (inputArray.join() == codeArray.join()){
       computeWPM(inputTime);
       computeErrorRate(errorCount);
       alert("Good Job.  Speed = " + speed + " WPM.  Error Rate = " + errorRate +"%");
     }else{
       alert("Fix it");
     };
     return inputTime;
  });

  function computeWPM(time){
    speed = wordCount / time * 60;
    return speed;
  };

  function computeErrorRate(errorCount){
    if (errorCount == 0){
      errorRate = 0;
    }else{
      errorRate = codeArray.length/errorCount;
    }
    return errorRate;
  };

  // end, first iteration

//Accuracy view
  // $('.submit').click(function(){
  //   var inputScript = $('.script-input').val();
  //   var inputArray = inputScript.split('');
  //
  //   if (codeArray.join() == inputArray.join()){
  //     alert("Hooray");
  //   } else {
  //     alert("Too bad");
  //   };
  // });

//end, accuracy iteration


});
