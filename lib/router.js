Router.configure({
    layoutTemplate : 'layout',
    loadingTemplate : 'loading',
    notFoundTemplate : 'notFound'
    // waitOn : function () {
    //     return Meteor.subscribe('posts');
    // }
});

Router.route('/', {name : 'landing'});
Router.route('/goal-settings', {name : 'showGoals'});
Router.route('/cry-level', {name : 'cryLevel'});

Router.route('/posts/:_id', {
    name : 'postPage',
    data : function() {
        return Posts.findOne(this.params._id);
    }
});

Router.route('/posts/:_id/edit', {
    name : 'postEdit',
    data : function () {
        return Posts.findOne(this.params._id);
    }
});

Router.route('/results', {
    name: 'results',
    data: function () {
        return {percent: 40};
    }
});

{{percent}}

Router.route('/submit', {name : 'postSubmit'})

var requireLogin = function () {
    if (!Meteor.userId()) {
        if (Meteor.loggingIn()) {
            this.render('loadingTemplate');
        } else {

            Router.go('landing');
        }
        this.stop();
    } else {
        this.next();
    }
}

Router.onBeforeAction('dataNotFound', {only : 'postPage'});
Router.onBeforeAction(requireLogin, {except : 'landing'});