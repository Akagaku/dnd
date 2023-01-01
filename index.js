$(document).ready(function () {    
    $(".drop-div").slideUp(0);

    $(".drop-btn").on("click", function (event) {
        $(".drop-" + event.currentTarget.id).slideToggle();
    });
});