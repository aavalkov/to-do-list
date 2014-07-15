$(document).ready(function() {
  $("form#todo-list").submit(function(event) {
    event.preventDefault();

    var listItem = $("input#item").val();
    var listDate = $("input#date").val();
    var inputtedItemDate = { item: listItem, date: listDate};

    $("ul#list").append("<li>" + inputtedItemDate.item +
                        " by " + inputtedItemDate.date + "</li>");

    $("input#item").val("");
    $("input#date").val("");
  });
});
