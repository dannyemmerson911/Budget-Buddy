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

  $("#entertainmentDetail").click(function(event) {
      event.preventDefault();
      $("#hover1").show();
    });
  $("#foodDetail").click(function(event) {
      event.preventDefault();
      $("#hover2").show();
    });
  $("#clothingDetail").click(function(event) {
      event.preventDefault();
      $("#hover3").show();
    });
  $("#billDetail").click(function(event) {
      event.preventDefault();
      $("#hover4").show();
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
    userWeeklyBudget = remaining;
    moneySpentEl = initialSpent;
    
    var selected = $('#categoryChoice :selected').text();
    if (selected === "Entertainment") {
      entertainmentTotal += Number($(".priceInput").val());
      $("#hover1").append('<ul class="deetsList"><li> <em>Item:</em> ' + item + '</li><li><em>Price:</em> $' + price + '</li></ul>');
      $("#entertainmentEl").text("$" + entertainmentTotal);
    } else if (selected === "Food") {
      foodTotal += Number($(".priceInput").val());
      $("#foodEl").text("$" + foodTotal);
      $("#hover2").append('<ul class="deetsList"><li><em>Item:</em> ' + item + '</li><li><em>Price:</em> $' + price + '</li></ul>');
    } else if (selected === "Clothing") {
      clothingTotal += Number($(".priceInput").val());
      $("#clothingEl").text("$" + clothingTotal);
      $("#hover3").append('<ul class="deetsList"><li><em>Item:</em> ' + item + '</li><li><em>Price:</em> $' + price + '</li></ul>');
    } else if (selected === "Bills") {
      billsTotal += Number($(".priceInput").val());
      $("#billsEl").text("$" + billsTotal);
      $("#hover4").append('<ul class="deetsList"><li><em>Item:</em> ' + item + '</li><li><em>Price:</em> $' + price + '</li></ul>');
    };

//Resets the form inputs after user submit
      $("#item").val("");
      $("#price").val("");
      $("#categoryChoice").val("");

//Flashes warning message when user bugdet "remaining" is less than 100; hides all other content
    if (remaining < 100 && remaining > 0) {
      $("#wrapperdiv").hide();
      $(".deetsdiv").hide();
      $("#lessThanHundred").fadeIn().fadeOut().fadeIn().fadeOut().fadeIn().fadeOut().fadeIn().fadeOut().fadeIn().fadeOut(400, redisplayMainDiv);
    }
//Flashes final warning message the the user's budget has been depleted; hides all other content
    if (remaining <= 0) {
      $("#wrapperdiv").hide();
      $(".deetsdiv").hide();
      $("#noMoney").fadeIn().fadeOut().fadeIn().fadeOut().fadeIn().fadeOut().fadeIn().fadeOut().fadeIn(400);
    }

    



    $("#budgetResetButton").click(function(event) {
      event.preventDefault();
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
      $(".deetsList").text("");
      $("#hover1").hide();
      $("#hover2").hide();
      $("#hover3").hide();
      $("#hover4").hide();
      initialSpent = 0;
      userWeeklyBudget;
      entertainmentTotal = 0;
      foodTotal = 0;
      clothingTotal = 0;
      billsTotal = 0;
    });

    $("#seeDetailsButton").click(function(event) {
      event.preventDefault();
      $(".deetsdiv").show();
    });
});


function redisplayMainDiv() {
  $("#wrapperdiv").fadeIn(1000);
  };
      //On click for "see details" each of the 4 spending categories, shows the purchase details entered by the user
      //On click for each of the details boxes, "this" details box clicked will fade out
  $("#hover1").click(function(event) {
    event.preventDefault();
    $(this).fadeOut();
  });
  $("#hover2").click(function(event) {
    event.preventDefault();
    $(this).fadeOut();
  });
  $("#hover3").click(function(event) {
    event.preventDefault();
    $(this).fadeOut();
  });
  $("#hover4").click(function(event) {
    event.preventDefault();
    $(this).fadeOut();
  });

});
