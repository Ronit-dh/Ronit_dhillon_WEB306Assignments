$(document).ready(function () {
    // Accordion functionality
    $('.accordion-header').click(function () {
        $(this).toggleClass('active').next().slideToggle('fast');
        $('.accordion-content').not($(this).next()).slideUp('fast');
        $('.accordion-header').not(this).removeClass('active');
    });

    // Tabbed section functionality
    $('.tab-control').click(function () {
        var target = $(this).attr('href');
        $('.tab-control').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();
        $(target).show();
    });
});
