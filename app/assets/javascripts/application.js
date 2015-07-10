// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .

$(document).ready(function(){

  var codeScript = gon.codeScript;

  var codeArray = codeScript.split('');

// Speed view, first iteration
  var count = -1;
  var inputArray = [];

  $('.script-input').keydown(function(){

      count += 1;
      var textInput = $(this).val();
      inputArray.push(textInput[textInput.length -1]);
      console.log(inputArray);

    if (inputArray[count] == codeArray[count]){
      $('.output').append("<span>J</span>");
    }else{
      $('.output').append("<span>X</span>");
    };
  });
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
