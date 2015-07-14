$(document).ready(function(){

  var codeScript = gon.codeScript;

  var codeArray = codeScript.split('');

// Speed view, first iteration
  var count = 0;
  var inputArray = [];
  var textInput;
  var inputArray;
  var wordCount = codeArray.length / 5;
  var inputTime;
  var errorCount = 0;
  var errorRate;

  $('.script-input').focus(function(){
    $('#timer').timer();
  });

  $('.script-input').keyup(function(){
     textInput = $(this).val();
     var keyCode = event.keyCode;
        if (keyCode == 16){
          return;
        }else{
          inputArray = textInput.split('');
          count = inputArray.length;
          compare(inputArray, codeArray);
          return count;
      };
  });

  function compare(inputArray, codeArray){
        if (inputArray[count - 1] == codeArray[count - 1]){
          $('.output').append("<span>J</span>");
        }else{
          $('.output').append("<span>X</span>");
          errorCount += 1;
        };
        return errorCount;
  };

  $('.submit').on('click', function() {
    $('#timer').timer('pause');
    inputTime = $('#timer').data('seconds');

     if (inputArray.join() == codeArray.join()){
       compute(inputTime);
       alert("Good Job.  Speed = " + speed + "WPM.  Error Rate = " + errorRate +"%");
     }else{
       alert("Fix it");
     };
     return inputTime;
  });

  function compute(time){
    speed = wordCount / time * 60;
    if (errorCount == 0){
      errorRate = 0;
    }else{
      errorRate = codeArray.length/errorCount;
    }
    return speed, errorRate;
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
