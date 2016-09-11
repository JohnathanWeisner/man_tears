Accounts.ui.config({
    passwordSignupFields : 'USERNAME_ONLY'
});

Accounts.onLogin(function () {
    Meteor.call('userHasGoal', function (err, userHasGoal) {
        var currentPath = Iron.Location.get().path;

        if (userHasGoal &&
                (currentPath === '/cry-level' ||
                currentPath === '/goal-settings' ||
                currentPath === '/')) {
            
            Router.go('showGoals');
        } else if (!userHasGoal) {
            Router.go('showGoals');
        }
    }); 
});