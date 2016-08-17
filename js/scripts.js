// translating function
var vowelChecker = function(piglatinphrase) {
  for( var i=0 ; i<piglatinphrase.length; i++ ){
    if(piglatinphrase.charAt(i) === 'a' ||
      piglatinphrase.charAt(i) === 'e' ||
      piglatinphrase.charAt(i) === 'i' ||
      piglatinphrase.charAt(i) === 'o' ||
      piglatinphrase.charAt(i) === 'u' ||
      piglatinphrase.charAt(i) === 'y') {
        alert("this is a vowel");
        var result = true;
      }else{
        alert("not a vowel");
        var result = false;
      }
  };
  return result;
};

var numberChecker = function(inputWord) {
  for(var i =0; i < inputWord.length; i++) {
    if (!isNaN(inputWord[i])) {
      return true;
    }
  }
  return false;
}

var piglatin = function(word) {
  if (numberChecker(word)) {
    return word + " contains at least one number. Please try again.";
  } else {
    return word + "ay";
  }
}

// page stuff and/or front end

$(function(){
  $("#translatorform").submit(function(event){
    event.preventDefault();
    var piglatinphrase = $("input#yourphrase").val().toLowerCase();
    var result = piglatin(piglatinphrase);
    $(".finalresult").text(result);
  });
});
