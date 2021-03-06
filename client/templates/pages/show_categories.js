Template.showCategories.helpers({
    categories: function() {
        return Categories.find({});
    },
    videos: function() {
        var videos = Content.find({categoryId: this._id});
        return videos;
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
        $('.done-crying-btn').css("display", "block");
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
            event.target.videoIsLoaded = true;
            event.target.playVideo();
        }

        onYouTubeIframeAPIReady();
    },
    'click .done-btn': function(e) {
        var player = YT.get('youtube-video');
        if (player.videoIsLoaded) {
            var className = e.target.className;
            $('.custom-overlay').css("display", "none");
            $('.close-btn').css("display", "none");
            $('.done-crying-btn').css("display", "none");
            var video = document.getElementById("youtube-video");
            if (video && video.src) {
                var timeSpentOnVideo = player.getCurrentTime();
                var userGoal = UserGoals.findOne({userId: Meteor.userId()});
                var minutes = userGoal.minutesCompleted;
                minutes += timeSpentOnVideo;
                var minutesCompleted = {minutesCompleted: minutes};
                Meteor.call('userGoalCreateOrUpdate', minutesCompleted, function(error, response) {
                    console.log("finished updating", response)
                    if (className.match("done-crying-btn")) {
                        Router.go('results');
                    }
                })
                video.parentNode.removeChild(video);
                $('.youtube-container').append("<div id='youtube-video'></div>");
            }
        }
    }
})