Template.showGoals.helpers({
    goals: function() {
        return Goals.find({});
    }
})