Template.showCategories.helpers({
    categories: function() {
        return Categories.find({});
    },
    videos: function() {
        var a = Content.find({categoryId: this._id});
        return a;
    },
    grabThumbnail: function() {
        var thumbnailUrl = "http://img.youtube.com/vi/" + this.videoId + "/mqdefault.jpg";
        return thumbnailUrl;
    },
    videoInfo: function() {
        var self = this;
        Meteor.call('getVideoInfo', this.videoId, function(error, response) {
            document.getElementById(self.videoId).innerHTML = response.title;
        })
    }
})
