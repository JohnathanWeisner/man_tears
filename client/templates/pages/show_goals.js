Template.showGoals.helpers({
    goals: function() {
        return Goals.find({});
    }
})

Template.showGoals.events({
    'click div.choice': function (e) {
        e.preventDefault();
        var goalId = $(e.currentTarget).data('id');

        Meteor.call('userGoalCreateOrUpdate', {
            goalId: goalId
        });

        Router.go('cryLevel');
    }
})