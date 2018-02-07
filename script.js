$(document).ready(function() {

var userWeeklyBudget;

	$("#wrapperdiv").hide();

	$("#lessThanHundred").hide();

	$("#noMoney").hide();

	$("#budgetSubmitButton").click(function(event){
		event.preventDefault();
		userWeeklyBudget = $("#userBudgetInput").val();
		console.log(userWeeklyBudget);
		$("#userBudgetInput").val("");
		$("#budget").append(userWeeklyBudget);
		$("#budgetInputDiv").hide();
		$("#wrapperdiv").show();
	});

	$("#formsubmit").click(function(event){
		event.preventDefault(); 
		var item = $("#item").val();
		var price = $("#price").val();

		var itemIsEmpty = (item === "");
		var priceIsEmpty = (price === "");

		if (itemIsEmpty || priceIsEmpty) {
			alert("Please fill out the form");
		}
		var remaining = userWeeklyBudget-price;
		$("#budget").text("$"+remaining); 



	});

		


});

//1. Fade out welcome page on click ================ DONE
//2. Find budget input value ================ DONE
//3. Append budget value to "total budget" ================ DONE
//4. Make sure all inputs have values on submit ================ DONE
//    - Alert user that inputs must be filled ================ DONE
//5. Find input values for "amount spent" and "item" on click 
//6. Subtract "amount spent" from "total budget"
//7. Add "amount spent" to "total spent"
//8. Add amount spent to appropriate category, based on what category was selected in dropdown
//9. Append "item" and "individual expense" to hidden div based on category
//10. Once "total budget" is less than $100, fade in first pop up alert
//11. Once "total budget" reaches $0, fade in second popup alert
//12. Hide main form, ask user if they'd like to budget for another week
