$(document).ready(function(){

if (!gon.codeScript){
  return;
}
  var codeScript = gon.codeScript;
  var codeScriptId = gon.codeScriptId;
  var currentUser = gon.currentUser
  var codeArray = codeScript.split('');
  var wordCount = codeArray.length / 5;
  var inputArray = [];
  var errorCount = 0;
  var wpm = 0;
  var errorRate = 0;
  var round = {};
  var note = "";

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
      wpm = parseInt(computeWPM(inputTime).toFixed(1));
      errorRate = parseInt(computeErrorRate(errorCount).toFixed(2));
      $('#wpm').html(wpm + " words per minute");
      $('#errorRate').html(errorRate + "%");
      round = {
        code_id: codeScriptId,
        user_id: currentUser,
        wpm: wpm,
        accuracy: errorRate,
        note: note
      };
    }else{
      alert("Fix it");
    }
    return round;
  });

  // function postRound(round){
  //   $.ajax({
  //     url: "/users/" + currentUser + "/rounds/" + codeScriptId,
  //     type: "post",
  //     contentType: 'application/json',
  //     dataType: "json",
  //     data: JSON.stringify(round),
  //     success: function(){
  //      console.log("success");
  //     },
  //     error: function(){
  //      console.log("error");
  //     }
  //   });
  // }

  function computeWPM(time){
    return wordCount / (time / 60);
  }

  function computeErrorRate(errorCount){
    return errorRate = ((inputArray.length - errorCount) / inputArray.length) * 100;
  }

  $('#note_submit').click(function(){
    return note = $("#note").val();
  });

  $("#reload").click(function(){
    note = $("#note").val();
    $.ajax({
      url: "/users/" + currentUser + "/rounds/" + codeScriptId,
      type: "post",
      contentType: 'application/json',
      dataType: "json",
      data: JSON.stringify(round),
      success: function(){
       console.log("success");
      },
      error: function(){
       console.log("error");
      }
    });
  })

  $("#progress").click(function(){
    note = $("#note").val();
    console.log(note);
    $.ajax({
      url: "/users/" + currentUser + "/rounds/" + codeScriptId,
      type: "post",
      contentType: 'application/json',
      dataType: "json",
      data: JSON.stringify(round),
      success: function(){
       console.log("success");
      },
      error: function(){
       console.log("error");
      }
    });
  })

  $(".dismiss").click(function(){
    location.reload();
  });

});
