var noVowels = function(enteredPhrase) {
  var phraseArray = enteredPhrase.split("");
  for (var index = 0; index < phraseArray.length; index +=1) {
    if (phraseArray[index] === "a" || phraseArray[index] === "e" || phraseArray[index] === "i" || phraseArray[index] === "o" || phraseArray[index] === "u") {
      phraseArray[index] = "-"
    }
    var answer = phraseArray.join("");
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
