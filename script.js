$(document).ready(function() {
  // $("#sidebarCollapse").on("click", function() {
  //   $("#sidebar").toggleClass("active");
  // });
  $("#sidebar").mCustomScrollbar({
    theme: "minimal"
  });

  $("#sidebarCollapse").on("click", function() {
    $("#sidebar").toggleClass("active");
  });
});
