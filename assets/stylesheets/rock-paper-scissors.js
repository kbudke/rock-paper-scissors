var userChoice = prompt("do you choose rock, paper or scissors?");
var computerChoice = math.random();
if(computerChoice,=0.33){
	computerChoice = "rock";
} else if (computerChoice<=0.34>=0.66){
	computerChoice = "paper";
} else {
	computerChoice = "scissors"
}
choice1 = userChoice;
choice2 = computerChoice;



function compare (choice1, choice2)
{
	if(choice1===choice2){
		return("the result is a tie");
	}
	if(choice1==="rock"){
		if(choice2==="scissors"){
			return("rock wins!");
		}else{
			return("Paper Wins!");
		}
	}


	if(choice1===choice2){
		return("the result is a tie");
	}
	if(choice1==="paper"){
		if(choice2==="rock"){
			return("Paper wins!");
		}else{
			return("Scissors Wins!");
		}
	}

	if(choice1===choice2){
		return("the result is a tie");
	}
	if(choice1==="scissors"){
		if(choice2==="rock"){
			return("rock wins!");
		}else{
			return("scissors Wins!");
		}
	}
}

