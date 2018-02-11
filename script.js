$(document).ready(function() {

  var userWeeklyBudget;
  var initialSpent = 0;
  var entertainmentTotal = 0;
  var foodTotal = 0;
  var clothingTotal = 0;
  var billsTotal = 0;

//on page load, hides:
// - 4 divs containing purchase details
// - the main form div
// - the two warning popup divs
  $("#hover1").hide();
  $("#hover2").hide();
  $("#hover3").hide();
  $("#hover4").hide();
  $("#wrapperdiv").hide();
  $("#lessThanHundred").hide();
  $("#noMoney").hide();

//on welcome page submit button click:
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
    $("#budgetInputDiv").fadeOut(100);
    $("#wrapperdiv").fadeIn(1000);
  });

  //on form submit button click:
  // - grabs user input values for item and price of item, and assigns them to variables "item" and "price"
  // - if the price or item input values are empty, alert the user that inputs must be filled in
  // - subtracts the price of the item from the userWeeklyBudget total
  // - displays the updated userWeeklyBudget total in the h2 element with the id of "budget"
  $("#formsubmit").click(function(event) {
    event.preventDefault();
    var item = $("#item").val();
    var price = Number($("#price").val());
    var moneySpentEl = $("#moneyspent");
    var itemIsEmpty = (item === "");
    var priceIsEmpty = (price === "");
    if (itemIsEmpty || priceIsEmpty) {
      alert("Please fill out the form");
    }
    var remaining = userWeeklyBudget - price;
    $("#budget").text("$" + remaining);
    initialSpent = price + Number(initialSpent);
    // console.log(initialSpent);
    moneySpentEl.text("$" + initialSpent);
    userWeeklyBudget = remaining;
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

//Resets the form inputs after submit
    $("#item").val("");
    $("#price").val("");
    $("#categoryChoice").val("");

//
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

  function hideDeets() {
    $(".deets").hide();
  }

  function showDeets() {
    $(".deets").show();
  }

  function redisplayMainDiv() {
    $("#wrapperdiv").show();
  }
  function redisplayBudgetInputDiv() {
    $("#budgetInputDiv").show();
    $("#noMoney").hide();
    $("#item").text("");
    $("#price").text("");
    $("#categoryChoice").val("");
    $("#entertainmentEl").text("");
    $("#foodEl").text("");
    $("#clothingEl").text("");
    $("#billsEl").text("");
    $("#moneyspent").text("");
    $("#budget").text("");
    $("#item").trigger("reset");
    $("#price").trigger("reset");
    initialSpent = 0;
    userWeeklyBudget;
    entertainmentTotal = 0;
    foodTotal = 0;
    clothingTotal = 0;
    billsTotal = 0;
}

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
