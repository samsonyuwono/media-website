$(document).ready(function() {
  $("#sidebar").mCustomScrollbar({
    theme: "minimal"
  });

  $("#sidebarCollapse").on("click", function() {
    $("#sidebar").toggleClass("active");
  });

  $(".select-section").on("click", function() {
    $("#sidebar").removeClass("active");
  });

  $(".close-sidebar").on("click", function() {
    console.log("close");
    $("#sidebar").removeClass("active");
  });
});
