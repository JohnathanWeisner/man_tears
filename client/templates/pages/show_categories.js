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
        $('.custom-overlay').css("display", "block");
        $('.close-btn').css("display", "block");
        var videoId = this.videoId;
        var player;
        function onYouTubeIframeAPIReady() {
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
        }

        onYouTubeIframeAPIReady();
    },
    'click .close-btn': function() {
        $('.custom-overlay').css("display", "none");
        $('.close-btn').css("display", "none");
        var video = document.getElementById("youtube-video");
        if (video && video.src) {
            video.parentNode.removeChild(video);
            $('.youtube-container').append("<div id='youtube-video'></div>");
        }
    }
})