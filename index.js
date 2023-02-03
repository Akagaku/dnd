$(document).ready(function () {
  $("#navbar").load("/navbar.html");

  $(".drop-item").slideUp(0);

    $(".drop-btn").on("mouseenter", function (event) {
        $(".drop-item:not(.drop-" + event.target.id +")").slideUp(300);
        $(".drop-" + event.target.id).slideDown(300);
    });

    $(".drop-div").on("mouseleave", function () {
        $(".drop-item").slideUp(300);
    });

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
});