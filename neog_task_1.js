let question=["May i know your name","May i know your age ","Where is your Hometown","Where is your fevourit food","Who is my favorite superhero","Which is my favorite song","Which is my favorite Game"]
console.log("-: THIS IS YOUR QUESTION :-")
answer_list=["Samridhi","19","Lucknow","Pizza","Tiger Shrof","Aeroplain","Pubg"]
let score=0
let i=0
let final_score=7
while (i<question.length){
    console.log(i+1,question[i])
var input=require("readline-sync")
let answer=input.question("Enter the right answer:-")
    if (answer===answer_list[i]){
        console.log("congrats your answer is right")
        score+=1
        console.log("Your Score",score)
        console.log("Highest Score",final_score)
        console.log("**************")
    }
    else{
        console.log("sadly apka javab galat hai")
        console.log("Your Score",score)
        console.log("Highest Score",final_score)
        console.log("**************")
    
}
i++
}
if (final_score===score){
    console.log("*** YOU ARE THE WINNER OF THIS GAME ***")
}
else{
    console.log("*** YOU ARE LOOSER ***")
}
console.log("**^.^** THANKS FOR PLAYING THIS GAME **^.^**")