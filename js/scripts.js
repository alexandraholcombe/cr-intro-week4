//Business Logicus

//CREATING PIZZA SIZES
function Size (value, displayName) {
  this.value = value;
  this.displayName = displayName;
}

var smallPizza = new Size ('small', 'Small (10")');
var mediumPizza = new Size ('medium', 'Medium (12")');
var largePizza = new Size ('large', 'Large (14")');

var sizes = [smallPizza, mediumPizza, largePizza];
var toppings = [];

//User Interface Logic
$(function() {
  $.each(sizes, function(i, val){
    $("#pizza-size").append("<div class='radio'>" +
                              "<label>" +
                              "<input type='radio' name='pizza_sizes' value='" + sizes[i] + "'> " +
                              sizes[i].displayName + "</label></div>");
  });
});
