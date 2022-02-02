// Write a recursive function that reverses the order of words in a sentence. For instance, "I am a cat" should become "cat a am I".

function sentReverse(sentence){
  sentence.split(" ").reverse().join(" ")
} 

const sentReverseRecursion = (sentence) => {
  //termination
  // if(not a string???){
  //   return;
  // }
  //base case
  //if the sentence is reversed, end
  if(sentence = sentence.split(" ").reverse().join(" ")){
    return sentence;
  }
  //recursion
  //send first word to the end 
  else{
    //turn sentence into array
    //shift first index out?
    //add to end 
    const word = sentence.split(" ").shift();
    return sentReverseRecursion(sentence.join(" ") + word);
  } 
}