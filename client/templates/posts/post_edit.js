Template.postEdit.events({
    'submit form' : function (e) {
        e.preventDefault();

        var currentPostId = this._id;

        var postProperties = {
            url : $(e.target).find('[name=url]').val(),
            title : $(e.target).find('[name=title]').val()
        }

        Meteor.call('postUpdate', currentPostId, postProperties, function (error, result) {
            if (error) {
                throwError(error.reason);
            } else if (result.postExists) {
                throwError("Post with that URL exists.")
            } else {
                Router.go('postPage', {_id : currentPostId});
            }
        })
    },

    'click .delete' : function (e) {
        e.preventDefault();
        console.log(this._id);
        if (confirm("Delete this post?")) {
            var currentPostId = this._id;
            Posts.remove(currentPostId);
            Router.go('postsList');
        }
    }
});