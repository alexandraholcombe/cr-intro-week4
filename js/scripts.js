//Business Logicus

//CREATING PIZZA SIZES
function Size (value, displayName, price) {
  this.value = value;
  this.displayName = displayName;
  this.price = price;
}

var smallPizza = new Size ('small', 'Small (10")', 10);
var mediumPizza = new Size ('medium', 'Medium (12")', 12);
var largePizza = new Size ('large', 'Large (14")', 14);

var sizes = [smallPizza, mediumPizza, largePizza];

//CREATING TOPPINGS
function Topping (value, displayName, price) {
  this.value = value;
  this.displayName = displayName;
  this.price = price;
}

var pepperoni = new Topping ('pepperoni', 'Pepperoni', 1);
var sausage = new Topping ('sausage', 'Sausage', 1);
var bacon = new Topping ('bacon', 'Bacon', 1);
var canadianBacon = new Topping ('canadianBacon', 'Canadian Bacon', 1);
var bananaPeppers = new Topping ('bananaPeppers', 'Banana Peppers', 1);
var blackOlives = new Topping ('blackOlives', 'Black Olives', 1);
var greenPeppers = new Topping ('greenPeppers', 'Green Peppers', 1);
var mushrooms = new Topping ('mushrooms', 'Mushrooms', 1);
var onions = new Topping ('onions', 'Onions', 1);
var spinach = new Topping ('spinach', 'Spinach', 1);
var pineapple = new Topping ('pineapple', 'Pineapple', 1);

var toppings = [pepperoni, sausage, bacon, canadianBacon, bananaPeppers, blackOlives, greenPeppers, mushrooms, onions, spinach, pineapple];

//CREATE NEW Pizza Constructor
function Pizza (size) {
  this.size = size;
  this.toppings = [];
}
var newPizza;

//User Interface Logic
$(function() {
  //Add Size objects to page
  $.each(sizes, function(i, val){
    $("#pizza-size").append("<div class='radio'>" +
                              "<label>" +
                              "<input type='radio' name='pizza_sizes' data-size='" + sizes[i] + "'> " +
                              sizes[i].displayName + "</label></div>");
  })

  //Add Toppings objects to page
  $.each(toppings, function(i, val){
    // debugger;
    $("#pizza-toppings").append("<div class='checkbox'>" +
                              "<label>" +
                              "<input type='checkbox' name='pizza_toppings' data-topping='" + toppings[i] + "'>" +
                              toppings[i].displayName + "</label></div>");
  })

  //Select size and apply to order
  $("#pizza-size div label input").click(function () {
    $("#chosen-size").text(this.parentElement.textContent);
    newPizza = new Pizza (this.parentElement.textContent);
    // debugger;
  })

  //Select topping and apply to order
  $("#pizza-toppings div label input").click(function() {
    // debugger;
    if (this.checked) {
      $("<li>").text(this.parentElement.textContent).appendTo("#chosen-toppings").off();
      newPizza.toppings.push(this.parentElement.textContent);
      debugger;
    } else {
      //Remove topping from order
      $("#chosen-toppings li:contains('" + this.parentElement.textContent + "')").remove();
    }
  })

})
