$(document).ready(function(){ 	
	$('#rock').click(function(){ 
		results = compare("rock", computerChoice())
		$('p').html(results)	}) 	
	$('#scissors').click(function(){ 	
		results = compare("scissors", computerChoice())
		$('p').html(results)	}) 	
	$('#paper').click(function(){ 	
		results = compare("paper", computerChoice())
			$('p').html(results) })  })



function computerChoice(){var computerChoice = Math.random();
console.log(computerChoice)

if(computerChoice<=0.33){
	computerChoice = "rock";
} else if (computerChoice<=0.66){
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}
return computerChoice;}



function compare(choice1, choice2)
{
	console.log(choice1, choice2)
	if(choice1==choice2){
		return("the result is a tie");
	}
	if(choice1=="rock"){
		if(choice2=="scissors")
			return("rock wins!");
		else if("paper")
			return("Paper Wins!");
		
	}


	if(choice1==choice2){
		return("the result is a tie");
	}
	if(choice1=="paper"){
		if(choice2=="rock")
			return("Paper wins!");
		else if("scissors")
			return ("Scissors Wins!");
	}

	if(choice1==choice2){
		return("the result is a tie");
	}
	if(choice1=="scissors"){
		if(choice2=="rock")
			return("rock wins!");
		else if("paper")
			return("scissors Wins!");
		}
	}










