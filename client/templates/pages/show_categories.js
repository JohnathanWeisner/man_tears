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
            document.getElementById('title-'+self.videoId).innerHTML = response.title;
        })
    }
})

Template.showCategories.events({
    'click .thumbnail': function(a, b, c) {
        var video = document.getElementById("youtube-video");
        console.log(video)
        if (video && video.src) {
            var frame = document.getElementById("youtube-video");
            frame.parentNode.removeChild(frame);
            $('.overlay').append("<div id='youtube-video></div>");
            console.log("appended!!!")
        }
        var videoId = this.videoId;
        var player;
        function onYouTubeIframeAPIReady() {
            console.log("HERE", videoId)
            player = new YT.Player('youtube-video', {
              height: '390',
              width: '640',
              videoId: videoId,
              events: {
                 'onReady': onPlayerReady,
              }
            });
        }

        function onPlayerReady(event) {
            event.target.playVideo();
            // var iframe = document.getElementById('2IPJEnOT9AQ');
            // var requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;
            // if (requestFullScreen) {
            //     requestFullScreen.bind(iframe)();
            // }
        }

        onYouTubeIframeAPIReady();
    }
})