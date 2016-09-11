Template.showCategories.helpers({
    categories: function() {
        return Categories.find({});
    },
    videos: function() {
        console.log(this)
        var a = Content.find({categoryId: this._id});
        console.log(a);
        return a;
    },
    grabThumbnail: function() {
        var thumbnailUrl = "http://img.youtube.com/vi/" + this.videoId + "/mqdefault.jpg";
        return thumbnailUrl;
    }
})
