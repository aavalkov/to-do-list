$(document).ready(function() {
  $("form#todo-list").submit(function(event) {
    event.preventDefault();

    var listItem = $("input#item").val();
    var listDate = $("input#date").val();
    var inputtedItemDate = { item: listItem, date: listDate};

    $("ul#list").append("<li><span class='clickItem'>" + inputtedItemDate.item +
                        " by " + inputtedItemDate.date + "</span></li>");

    $("input#item").val("");
    $("input#date").val("");

    $("ul#list").children("li").last().click(function() {
      $(".col-md-5").show();
      $("ul#done").append("<li><span class = 'finishedItem'>" +
                            inputtedItemDate.item + " " +
                            inputtedItemDate.date + "</span></li>");
      $(this).remove();

    });
  });
});
