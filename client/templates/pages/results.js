Template.results.rendered = function () {
    console.log('results rendered');
    $('#click-me').on('mousedown', function(){
        var percentage = $('#tear-can').data('percentage');
        $('canoftears').addClass('animated');
        $('tearmax').css('height', percentage + '%');
    });
}
