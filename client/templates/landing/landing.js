Template.landing.events({
    'click button#start-cry-btn' : function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (Meteor.userId()) {
            Router.go('showGoals');
        } else {
            Template._loginButtons.toggleDropdown();
        }
    }
});