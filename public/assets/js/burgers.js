$(document).ready(function() {
  if ($("#readyBurgers li").length) {
    let header = $("<h3 class='text-center'>Ready-Ta-Eat</h3>");
    $("#readyBurgers").prepend(header);
  }

  if ($("#devouredBurgers li").length) {
    let header = $("<h3 class='text-center'>Devoured</h3>");
    $("#devouredBurgers").prepend(header);
  }

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

  $(".discard-btn").on("click", function() {
    let id = $(this).data("id");
    $.ajax({
      method: "DELETE",
      url: "/api/burgers/" + id
    }).then(function() {
      location.reload();
    });
  });
});
