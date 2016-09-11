Template.displayVideo.helpers({
    formatUrl: function(urlId) {
        var formattedUrl = "https://www.youtube.com/embed/"
        formattedUrl = formattedUrl + urlId;
        return formattedUrl;
    }
})