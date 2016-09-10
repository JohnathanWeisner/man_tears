Posts = new Mongo.Collection('posts');

Posts.allow({
    update : function(userId, post) { return ownsDocument(userId, post); },
    remove : function(userId, post) { return ownsDocument(userId, post); }
});

Posts.deny({
    update : function(userId, post, fieldNames) {
        return (_.without(fieldNames, 'url', 'title').length > 0);
    }
})

Meteor.methods({
    postInsert : function (postAttributes) {
        check(Meteor.userId(), String);
        check(postAttributes, {
            title : String,
            url : String
        });
        var errors = validatePost(postAttributes);
        if (errors.title || errors.url) {
            throw new Meteor.Error(
                'invalid-post',
                "You must set a title and URL for your post"
            );
        }
        if (!/https?:\/\//.test(postAttributes.url)) {
            postAttributes.url = 'http://' + postAttributes.url;
        }
        var postWithSameLink = Posts.findOne({url : postAttributes.url});
        if (postWithSameLink) {
            return {
                postExists : true,
                _id : postWithSameLink._id
            }
        }
        var user = Meteor.user();
        var post = _.extend(postAttributes, {
            userId : user._id,
            author : user.username,
            submitted: new Date()
        });
        var postId = Posts.insert(post);
        console.log(postId);
        return {
            _id : postId
        };
    },

    postUpdate : function (currentPostId, postAttributes) {
        if (!/https?:\/\//.test(postAttributes.url)) {
            postAttributes.url = 'http://' + postAttributes.url;
        }
        var existingPost = Posts.findOne({
            url : postAttributes.url,
            _id : {$ne : currentPostId}
        });
        check(postAttributes, {
            title : String,
            url : String
        });
        if (existingPost) {
            return {
                postExists : true,
                _id : existingPost._id
            };
        }

        Posts.update(currentPostId, {$set : postAttributes});
        return {_id : currentPostId};
    }
});

Posts.allow({
    insert : function (userId, doc) {
        return !!userId;
    }
});

validatePost = function (post) {
    var errors = {};

    if (!post.title) {
        errors.title = "Please fill in a headline";
    }
    if (!post.url) {
        errors.url = "Please fill a URL";
    }

    return errors;
};