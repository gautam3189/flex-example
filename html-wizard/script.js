$(document).ready(() => {
  $(".step-content span").on("click", function () {
    var currentStep = parseInt($(this).text());
    $("#" + currentStep)
      .addClass("in-progress")
      .removeClass("waiting");
    var previousStep = currentStep - 1;
    if (previousStep > 0) {
      $("#" + previousStep)
        .addClass("complete")
        .removeClass("in-progress");
    }
  });
});
