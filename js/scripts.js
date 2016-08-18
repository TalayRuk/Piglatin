// translating function

// ****Hint for qu
// // for pig latin
// // 
// // var word = "square";
// // var i = word.split("").indexOf("q"); // i = 1; ***
// ****split put string into array & w/("") split it into ["s","q","u","a","r", "e"];
// ****ie; split () split it into word [square]
// // if ( word[i] === "q" && word[i+1] === "u") {
// //   var ending = word.slice(i+2,word.length); //= "are"; 
// *****for square .. slice (3,word.length) or just put in slice(3)=are
// //   var output = ending + word.slice(0, i+2) + "ay";
// // }
// //
// // square
// // arsquay






var vowelChecker = function(piglatinphrase) {
  var result;
  // for( var i=0 ; i<piglatinphrase.length; i++ ){
    if(piglatinphrase.charAt(0) === 'a' ||
      piglatinphrase.charAt(0) === 'e' ||
      piglatinphrase.charAt(0) === 'i' ||
      piglatinphrase.charAt(0) === 'o' ||
      piglatinphrase.charAt(0) === 'u' ||
      piglatinphrase.charAt(0) === 'y') {
        var result = true;
      } else {
        var result = false;
      }
  // };
  return result;
};


var numberChecker = function(piglatinphrase) {
  for(var i =0; i < piglatinphrase.length; i++) {
    if (!isNaN(piglatinphrase[i])) {
      return true;
    }
  }
  return false;
}

var piglatin = function(piglatinphrase) {
  if (numberChecker(piglatinphrase)) {
    return piglatinphrase + " contains at least one number. Please try again.";
  }else if (vowelChecker(piglatinphrase)){
    alert("vowel Checker");
    return piglatinphrase + "ay";
  }else {
    alert("con Checker");
    var anotherpiglatinphrase = piglatinphrase.slice(0,1);
    var wordending = piglatinphrase.slice(1,piglatinphrase.length);
    return  wordending + anotherpiglatinphrase + "ay";
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
