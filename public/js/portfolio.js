console.log("working");
$(document).ready(function() {
  $(".carousel").carousel({
    duration: 3000,
    noWrap: false,
    // numVisible: 1,
    fullWidth: true
  });
  $(".carousel").carousel("next");
});
