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
  this.prices = [];
}

var newPizza;

//TOTAL PRICE
Pizza.prototype.pizzaPrice = function() {
  function getSum(total, num){
    return total + num;
  }
  return this.prices.reduce(getSum, 0);
}

var pizzaCount = 0;

//User Interface Logic

$(function() {
  //Add Size objects to page
  $.each(sizes, function(i, val){
    $("#pizza-size").append("<div class='radio'>" +
                              "<label>" +
                              "<input type='radio' name='pizza_sizes' data-price='" + this.price + "'>" +
                              sizes[i].displayName + "</label></div>");
  })

  //Add Toppings objects to page
  $.each(toppings, function(i, val){
    $("#pizza-toppings").append("<div class='checkbox'>" +
                              "<label>" +
                              "<input type='checkbox' name='pizza_toppings' data-price='" + this.price + "'>" +
                              toppings[i].displayName + "</label></div>");
  })

  //Select size and apply to order
  $("#pizza-size div label input").click(function () {
    $("#chosen-size").text(this.parentElement.textContent);
    newPizza = new Pizza (this.parentElement.textContent);
    newPizza.prices[0] = $(this).data('price');
    $("#add-to-cart").attr("disabled", false);
    $("#pizza-toppings").show();
  })

  //Select topping and apply to order
  $("#pizza-toppings div label input").click(function() {
    if (this.checked) {
      $("<li>").text(this.parentElement.textContent).appendTo("#chosen-toppings").off();
      newPizza.toppings.push(this.parentElement.textContent);
      newPizza.prices.push($(this).data('price'));
    } else {
      //Remove topping from order
      $("#chosen-toppings li:contains('" + this.parentElement.textContent + "')").remove();
      var removeTopping = newPizza.toppings.indexOf(this.parentElement.textContent);
      newPizza.toppings.splice(removeTopping, 1);
      // var thisPrice = $(this).data('price');
      var removePrice = newPizza.prices.indexOf($(this).data('price'));
      newPizza.prices.splice(removePrice, 1);
    }
  })

  //Add to cart
  $("#add-to-cart").click(function() {
    pizzaCount += 1;
    $("#empty-cart").hide();
    $("#receipt").off().append("<div class='this-pizza'>"+
                          "<span class='this-pizza-size'>" + newPizza.size +
                          "</span>" +
                          "<ul id='pizza-count-" + pizzaCount + "'>" +
                          "</ul>"+
                          "<span class='this-pizza-total'> $" +
                          newPizza.pizzaPrice() + "</span>" +
                          "</div>");
    $.each(newPizza.toppings, function(i, val) {
      $("<li>").text(val).appendTo("ul#pizza-count-"+ parseInt(pizzaCount));
    })
    $("#chosen-size").empty();
    $("#chosen-toppings").empty();
    $("#pizza-size div label input:radio").each(function() {
      $(this).prop('checked', false);
    })
    $("#pizza-toppings div label input:checkbox").each(function (){
      $(this).prop('checked', false);
    })
    newPizza.size = 0;
    newPizza.toppings = []
    newPizza.prices = []
  })
})
