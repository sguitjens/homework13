// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-eaten").on("click", function(event) {
    var id = $(this).data("id");
    var newEaten = $(this).data("neweaten");

    var newEatenState = {
      eaten: newEaten
    };

    // Send the PUT request.
    $.ajax("/api/veggies/" + id, {
      type: "PUT",
      data: newEatenState
    }).then(
      function() {
        console.log("changed eaten to", newEaten);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newVeggie = {
      name: $("#veg").val().trim(),
      eaten: $("[name=eaten]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/veggies", {
      type: "POST",
      data: newVeggie
    }).then(
      function() {
        console.log("created new veggie");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-veggie").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/veggies/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted veggie", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
