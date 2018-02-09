$(document).ready(function() {
  var userWeeklyBudget;
  var initialSpent = 0;
  var entertainmentTotal = 0;
  var foodTotal = 0;
  var clothingTotal = 0;
  var billsTotal = 0;
  $("#hover1").hide(); //on page load, hides popup warning divs and the div containing the main expense tracker
  $("#hover2").hide();
  $("#hover3").hide();
  $("#hover4").hide();
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


    $("#item").val("");
    $("#price").val("");

    if (remaining <= 100 && remaining > 0) {
      $("#wrapperdiv").hide();
      $("#lessThanHundred").fadeIn().fadeOut().fadeIn().fadeOut().fadeIn().fadeOut().fadeIn().fadeOut().fadeIn().fadeOut(400, redisplayMainDiv, );

    }

    if (remaining <= 0) {
      $("#wrapperdiv").hide();
      $("#noMoney").fadeIn().fadeOut().fadeIn().fadeOut().fadeIn().fadeOut().fadeIn().fadeOut().fadeIn(400, );
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

});

