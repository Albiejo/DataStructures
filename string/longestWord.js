//with split

function longestWord(s) {
  let max = "";
  let array = s.split(" ");
  for (let word of array) {
    if (word.length > max.length) {
      max = word;
    }
  }

  return max;
}

console.log(longestWord("Hi Im Albinjoseph"));

//without split

function longestWord(s) {
  let max = "";
  let word = "";

  for (let i = 0; i < s.length; i++) {
    if(s[i]!==" "){
        word=word+s[i]
    }else{
        if(max.length<word.length){
            max=word
            word=""
        }
    }
  }
  if(word.length && max.length < word.length){
    max=word
  }

  return max
}

console.log(longestWord("Hi Im Albinjoseph"));
