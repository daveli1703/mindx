function wordBlank(myNoun, myadjective, myVerb,  myAdverb){
    var result =`the ${myNoun} ${myadjective} ${myVerb} to the store ${myAdverb}`;
    // result += "the " +myadjective+myNoun+myVerb+"to the store"+myAdverb;
    return result;
}
console.log(wordBlank("dog", "big", "ran", "quickly"));

