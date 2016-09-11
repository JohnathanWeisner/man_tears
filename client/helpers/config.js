Accounts.ui.config({
    passwordSignupFields : 'USERNAME_ONLY'
});

Accounts.onLogin(function () {
    Meteor.call('userHasGoal', function (err, userHasGoal) {
        if (userHasGoal) {
            Router.go('cryLevel');
        } else {
            Router.go('showGoals');
        }
    }); 
});