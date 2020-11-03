//jquery click events - frontend
//Devour button

//update the boolean
//Require in ORM results
$(function(){
  $(".devour").on("click", function(event){
    var id = $(this).attr("id")
    $.ajax("/api/burgers/" + id, {
      type: "POST",
      data: id
    }).then(function(){
      location.reload();
    })
  })

  $(".delete").on("click", function(event){
    var id = $(this).attr("id")
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
      data: id
    }).then(function(){
      location.reload();
    })
  })
  
  $(".create-form").on("submit", function(event){
    event.preventDefault();
    var newBurger = $("#burg").val().trim()
    $.ajax("/api/burgers/", {
      type: "POST",
      data: {burger_name: newBurger}
    }).then(
      function() {
        location.reload();
      }
    )
  })
})