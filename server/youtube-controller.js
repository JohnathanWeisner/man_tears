YouTubeController = {
    key: 'AIzaSyCsPI6DN4hdmsgwPSmBSaWVcguoKJoBl-U',
    getVideoInfo: function(videoId) {
        console.log("GET VIDEO INFO", videoId)
        var url = "https://www.googleapis.com/youtube/v3/videos?key=" + this.key;
        url +=  "&part=snippet&id=" + videoId;
        var result = HTTP.get(url, {
            headers: {
              'Content-Type': 'application/json'
            }
        });
        var info = result.data.items.shift();
        console.log("DATA", info.snippet)
        return info.snippet;
    },
    getContentDetails: function(videoId) {
        var url = "https://www.googleapis.com/youtube/v3/videos?id=" + videoId;
        url += "&part=contentDetails&key=" + this.key;
        var result = HTTP.get(url, {
            headers: {
              'Content-Type': 'application/json'
            }
        });
        var info = result.data.items.shift();
        return info.contentDetails;
    }
}