Content = new Mongo.Collection('content');

Meteor.methods({
    playVideo: function() {
        // player = new YT.Player('player', {
        //     height: '200',
        //     width: '300',
        //     videoId: 'dQw4w9WgXcQ',
        //     // events: {
        //     //   'onReady': onPlayerReady
        //     // }
        // });

        // // function onPlayerReady(event) {
        // //   var player = event.target;
        // //   iframe = $('#player');
        // //   setupListener(); 
        // // }

        // // function setupListener (){
        // // $('button').addEventListener('click', playFullscreen);
        // // }

        // function playFullscreen (){
        //   player.playVideo();//won't work on mobile
          
        //   var requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;
        //   if (requestFullScreen) {
        //     requestFullScreen.bind(iframe)();
        //   }
        // }

        // playFullscreen();
    }
})