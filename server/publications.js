Meteor.publish('categories', function() {
    return Categories.find({});
})

Meteor.publish('goals', function() {
    return Goals.find({});
})