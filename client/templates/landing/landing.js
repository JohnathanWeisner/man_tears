Template.landing.events({
    'click button#start-cry-btn' : function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (Meteor.userId()) {
            Router.go('goalsettings');
        } else {
            Template._loginButtons.toggleDropdown();
        }
    }
});