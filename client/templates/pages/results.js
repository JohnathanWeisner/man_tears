Template.results.helpers({
    minsLeft: function() {
        return this.minToDate - this.minToGo;
    }
})

Template.results.rendered = function () {
    console.log('results rendered');
}
