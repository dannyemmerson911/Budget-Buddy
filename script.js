$(document).ready(function() {

var userWeeklyBudget;

	$("#budgetSubmitButton").click(function(){
		userWeeklyBudget = $("#userBudgetInput").val();
		console.log(userWeeklyBudget);
		$("#userBudgetInput").val("");
	});

});