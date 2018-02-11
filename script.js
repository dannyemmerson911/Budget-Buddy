$(document).ready(function() {

  var userWeeklyBudget;
  var initialSpent = 0;
  var entertainmentTotal = 0;
  var foodTotal = 0;
  var clothingTotal = 0;
  var billsTotal = 0;

//on page load, hides:
// - 4 divs containing purchase details
  $("#hover1").hide(); 
  $("#hover2").hide();
  $("#hover3").hide();
  $("#hover4").hide();
// - main form div
  $("#wrapperdiv").hide();
// - two warning popup divs 
  $("#lessThanHundred").hide();
  $("#noMoney").hide();

//on welcome page submit button click:
  $("#budgetSubmitButton").click(function(event) {
    event.preventDefault();
// - assigns the value of the userWeeklyBudget input to the variable "userWeeklyBudget"
    userWeeklyBudget = $("#userBudgetInput").val();
// - clears the budget input field
    $("#userBudgetInput").val("");
// - appends the user's weekly bugdet input value to the expense tracker div
    $("#budget").append("$" + userWeeklyBudget);
// - fades out the welcome screen/budget input div
    $("#budgetInputDiv").fadeOut(100);
// - fades in the main page div, including form and tracker divs
    $("#wrapperdiv").fadeIn(1000);
  });

//on form submit button click:
  $("#formsubmit").click(function(event) {
    event.preventDefault();
// - grabs the user input values for item and price of item, and assigns them to variables "item" and "price"
    var item = $("#item").val();
    var price = Number($("#price").val());
// - sets variable for "moneyspentEl" tracker to the location of the "moneyspent" div
    var moneySpentEl = $("#moneyspent");
// - sets variables for item and price inputs being empty 
    var itemIsEmpty = (item === "");
    var priceIsEmpty = (price === "");
// - alerts the user that they must fill out the form if input fields are empty
    if (itemIsEmpty || priceIsEmpty) {
      alert("Please fill out the form");
    }
// - subtracts the price of the item from the userWeeklyBudget total; assigns that value to variable "remaining"
    var remaining = userWeeklyBudget - price;
// - appends the value of "remaining" to the budget div
    $("#budget").text("$" + remaining);
// - sets initialSpent to itself plus the price of the item purchased
    initialSpent = price + Number(initialSpent);
// - appends the "initialSpent" to the moneySpentEl div so it displays for the user
    moneySpentEl.text("$" + initialSpent);
// - sets the userWeeklyBudget to "remaining"
    userWeeklyBudget = remaining;
// - sets the 
    moneySpentEl = initialSpent;
    var selected = $('#categoryChoice :selected').text();
    if (selected === "Entertainment") {
      entertainmentTotal += Number($(".priceInput").val());
      $("#hover1").append('<ul class="deetsList"><li> Item: ' + item + '</li><li> Price: $' + price + '</li></ul>');
      $("#entertainmentEl").text("$" + entertainmentTotal);
    } else if (selected === "Food") {
      foodTotal += Number($(".priceInput").val());
      $("#foodEl").text("$" + foodTotal);
      $("#hover2").append('<ul class="deetsList"><li> Item: ' + item + '</li><li> Price: $' + price + '</li></ul>');
    } else if (selected === "Clothing") {
      clothingTotal += Number($(".priceInput").val());
      $("#clothingEl").text("$" + clothingTotal);
      $("#hover3").append('<ul class="deetsList"><li> Item: ' + item + '</li><li> Price: $' + price + '</li></ul>');
    } else if (selected === "Bills") {
      billsTotal += Number($(".priceInput").val());
      $("#billsEl").text("$" + billsTotal);
      $("#hover4").append('<ul class="deetsList"><li> Item: ' + item + '</li><li> Price: $' + price + '</li></ul>');
    };

//Resets the form inputs after user submit
    $("#item").val("");
    $("#price").val("");
    $("#categoryChoice").val("");

//Flashes warning message when user bugdet "remaining" is less than 100
    if (remaining < 100 && remaining > 0) {
      $("#wrapperdiv").hide();
      $(".deetsdiv").hide();
      $("#lessThanHundred").fadeIn().fadeOut().fadeIn().fadeOut().fadeIn().fadeOut().fadeIn().fadeOut().fadeIn().fadeOut(400, redisplayMainDiv );

    }

    if (remaining <= 0) {
      $("#wrapperdiv").hide();
      $(".deetsdiv").hide();
      $("#noMoney").fadeIn().fadeOut().fadeIn().fadeOut().fadeIn().fadeOut().fadeIn().fadeOut().fadeIn(400, redisplayBudgetInputDiv);
    }
  });

  function redisplayMainDiv() {
    $("#wrapperdiv").show();
  }
  function redisplayBudgetInputDiv() {
    $("#budgetInputDiv").show();
    $("#noMoney").hide();
  }

//On click for each of the 4 spending categories, shows the purchase details entered by the user for each category
  $("#entertainmentDetail").click(function() {
    $("#hover1").show();
  });
  $("#foodDetail").click(function() {
    $("#hover2").show();
  });
  $("#clothingDetail").click(function() {
    $("#hover3").show();
  });
  $("#billDetail").click(function() {
    $("#hover4").show();
  });

//On click for each of the details boxes, the box clicked will fade out
  $("#hover1").click(function() {
    $("#hover1").fadeOut();
  });
  $("#hover2").click(function() {
    $("#hover2").fadeOut();
  });
  $("#hover3").click(function() {
    $("#hover3").fadeOut();
  });
  $("#hover4").click(function() {
    $("#hover4").fadeOut();
  });

});
