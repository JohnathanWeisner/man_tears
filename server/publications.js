Meteor.publish('categories', function() {
    return Categories.find({});
})

Meteor.publish('goals', function() {
    return Goals.find({});
})

Meteor.publish('content', function() {
    return Content.find({});
})