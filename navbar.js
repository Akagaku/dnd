$(document).ready( function () {
    $(".drop-item").slideUp(0);

    $(".drop-btn").on("mouseenter", function (event) {
        console.log(event.target.id);
        $(".drop-item:not(.drop-" + event.target.id +")").slideUp(300);
        $(".drop-" + event.target.id).slideDown(300);
    });

    $("nav").on("mouseleave", function (event) {
        $(".drop-item").slideUp(300);
    });
});