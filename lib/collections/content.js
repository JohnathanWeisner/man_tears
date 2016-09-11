Content = new Mongo.Collection('content');

Meteor.methods({
    getVideoInfo: function(videoId) {
        if (Meteor.isServer) {
            var info = YouTubeController.getVideoInfo(videoId);
            return info;
        }
    } 
})
