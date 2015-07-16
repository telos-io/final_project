$(document).ready(function(){

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
    //codeArrayCount += 1;
  });

  $('.script-input').focus(function(){
    $('#timer').timer();
  });

  // var output = function(inputCount){
  //   while (var j = 0; j <= codeArray.length; j += 1){
  //     $('current-script').append('<span>'codeArray[j]'</span>');
  //   };
  // };


  $('.script-input').keyup(function(){
     textInput = $(this).val();
     var keyCode = event.keyCode;
        if (keyCode == 16){
          return;
        }else{
          inputArray = textInput.split('');
          count = inputArray.length;
          $(this).toggleClass("active");
          compare(inputArray, codeArray);
          return count;
      };
  });

  function compare(inputArray, codeArray){
    //$('<span>' + inputArray[count] + '</span>').addClass("active")
        if (inputArray[count - 1] == codeArray[count - 1]){
          $(inputArray[count - 1]).toggleClass("green");
          //stays green
        }else{
          $('#current-script').toggleClass("red");
          //change red
          errorCount += 1;
        };
        return errorCount;
  };

  $('.submit').on('click', function() {
    $('#timer').timer('pause');
    inputTime = $('#timer').data('seconds');

     if (inputArray.join() == codeArray.join()){
       computeWPM(inputTime);
       computeErrorRate(errorCount);
       alert("Good Job.  Speed = " + speed + "WPM.  Error Rate = " + errorRate +"%");
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

//compare(inputArray, codeArray);

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
