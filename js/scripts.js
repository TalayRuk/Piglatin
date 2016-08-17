// translating function
var piglatin = function(piglatinphrase) {
  for( var i=0 ; i<piglatinphrase.length; i++ ){
    if(piglatinphrase.charAt(i) === 'a' ||
      piglatinphrase.charAt(i) === 'e' ||
      piglatinphrase.charAt(i) === 'i' ||
      piglatinphrase.charAt(i) === 'o' ||
      piglatinphrase.charAt(i) === 'u' ||
      piglatinphrase.charAt(i) === 'y') {
        alert("this is a vowel");
        var result = piglatinphrase;
      }else{
        alert("not a vowel");
        var result = piglatinphrase;
      }
  };
  return result;
};

// page stuff and/or front end

$(function(){
  $(".btn").click(function(){
    var piglatinphrase = $("input#yourphrase").val();
    var result = piglatin(piglatinphrase);
    $(".finalresult").text(result);
  });
});
