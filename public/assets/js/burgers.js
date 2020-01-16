$(document).ready(function() {
  $("#order-btn").on("click", function(event) {
    event.preventDefault();
    let burger = {
      burgerName: $("#burgerOrder").val()
    };
    $.ajax({
      method: "POST",
      url: "/api/burgers",
      data: burger
    }).then(function(results) {
      console.log("Burger Added");
      console.log(results);
      location.reload();
    });
  });

  $(".devour-btn").on("click", function() {
    let id = $(this).data("id");
    $.ajax({
      method: "PUT",
      url: "/api/burgers/" + id
    }).then(function() {
      location.reload();
    });
  });
});
