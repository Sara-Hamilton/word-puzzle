var noVowels = function(enteredPhrase) {
  var vowels = ["a", "e", "i", "o", "i"];
  var phraseArray = enteredPhrase.split(""); // changes input from string to array
    for (var index = 0; index < phraseArray.length; index +=1) {
      if (vowels.includes(phraseArray[index])) {
        phraseArray[index] = "-"
      }
    var answer = phraseArray.join(""); // turns the array into a string
  };
  return answer;
};


$(document).ready(function(){
  $("#puzzle").submit(function(event){
    event.preventDefault();
      var enteredPhrase = $("input#phrase").val();
      $(".blankVowels").append(noVowels(enteredPhrase));
      $("#result").show();
  });
});
