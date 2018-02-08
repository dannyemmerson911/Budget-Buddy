$(document).ready(function() {

  var userWeeklyBudget;
  var price;
  var initialSpent = 0;
  var entertainmentTotal = 0;
  var foodTotal = 0;
  var clothingTotal = 0;
  var billsTotal = 0;

  //on page load, hides popup warning divs and the div containing the main expense tracker
  $("#wrapperdiv").hide();
  $("#lessThanHundred").hide();
  $("#noMoney").hide();


  //on submit button click:
  // - assigns userWeeklyBudget input to the variable "userWeeklyBudget"
  // - clears the input field
  // - appends the user's weekly bugdet input value to the expense tracker div
  // - hides the main div
  // - shows the expense tracker div
  $("#budgetSubmitButton").click(function(event) {
    event.preventDefault();
    userWeeklyBudget = $("#userBudgetInput").val();
    $("#userBudgetInput").val("");
    $("#budget").append("$" + userWeeklyBudget);
    $("#budgetInputDiv").hide();
    $("#wrapperdiv").show();
  });
  //on form submit button click:
  // - grabs user input values for item and price of item, and assigns them to variables "item" and "price"
  // - if the price or item input values are empty, alert the user that inputs must be filled in
  // - subtracts the price of the item from the userWeeklyBudget total
  // - displays the updated userWeeklyBudget total in the h2 element with the id of "budget"
  $("#formsubmit").click(function(event) {
      event.preventDefault();
      var item = $("#item").val();
      price = Number($("#price").val());
      var moneySpentEl = $("#moneyspent");
      var itemIsEmpty = (item === "");
      var priceIsEmpty = (price === "");
      if (itemIsEmpty || priceIsEmpty) {
        alert("Please fill out the form");
      }
      var remaining = userWeeklyBudget - price;
      $("#budget").text("$" + remaining);
      initialSpent = price += Number(initialSpent);
      // console.log(initialSpent);
      moneySpentEl.text("$" + initialSpent);
    // Below here is what I added
    //
    // $("#moneyspent").text("$" + price);
    // userWeeklyBudget = remaining;
    // $("#item").val("");
    // $("#price").val("");
    // });



    userWeeklyBudget = remaining;
    moneySpentEl = initialSpent;

    var selected = $('#categoryChoice :selected').text();

    if (selected === "Food") {

      foodTotal = Number(foodTotal) + price;
      console.log(foodTotal);
      $("#foodEl").text("$" + foodTotal);
    } else if (selected === "Entertainment") {
      var entertainmentUpdate = Number(entertainmentTotal) + price;
      $("#entertainmentEl").text("$" + entertainmentUpdate);
    }





    $("#item").val("");
    $("#price").val("");
  });

});
//1. Fade out welcome page on click ================ DONE
//2. Find budget input value ================ DONE
//3. Append budget value to "total budget" ================ DONE
//4. Make sure all inputs have values on submit ================ DONE
//    - Alert user that inputs must be filled ================ DONE
//5. Find input values for "amount spent" and "item" on click ===========DONE
//6. Subtract "amount spent" from "total budget" ==============DONE
//7. Add "amount spent" to "total spent" ===========DONE
//8. Add amount spent to appropriate category, based on what category was selected in dropdown
//9. Append "item" and "individual expense" to hidden div based on category
//10. Once "total budget" is less than $100, fade in first pop up alert
//11. Once "total budget" reaches $0, fade in second popup alert
//12. Hide main form, ask user if they'd like to budget for another week++++++++++++++
