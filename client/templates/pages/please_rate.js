Template.pleaseRate.rendered = function () {
    $('#please-rate').modal('show');
}

var animatePercentage = function (e) {
    e.preventDefault();

    $('#please-rate').modal('hide');
    var percentage = $('#tear-can').data('percentage');
    $('canoftears').addClass('animated');
    $('tearmax').css('height', percentage + '%');
}

Template.pleaseRate.events({
    'click .rate-img': animatePercentage,
    'click #rate-img-close': animatePercentage
});