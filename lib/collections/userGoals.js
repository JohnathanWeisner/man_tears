UserGoals = new Mongo.Collection('userGoals');

UserGoals.allow({
    update : function(userId, userGoals) { return ownsDocument(userId, userGoals); },
    remove : function(userId, userGoals) { return ownsDocument(userId, userGoals); }
});

Meteor.methods({
    userGoalCreateOrUpdate : function (userGoalAttributes) {
        var user = Meteor.user();
        var userGoal = UserGoals.findOne({userId : user._id});
        var userGoalId;

        if (userGoal) {
            userGoalAttributes = _.extend(userGoalAttributes, {
                updatedAt: new Date()
            });

            userGoalId = UserGoals.update(userGoal._id, {$set: userGoalAttributes});
        } else {
            userGoal = _.extend(userGoalAttributes, {
                minutesCompleted: 0,
                userId: user._id,
                createdAt: new Date(),
                updatedAt: new Date()
            });
            userGoalId = UserGoals.insert(userGoal);
        }

        return {
            _id : userGoalId
        };
    }
});

UserGoals.allow({
    insert : function (userId, doc) {
        return !!userId;
    },
    update : function (userId, doc) {
        return !!userId;
    }
});