if (Meteor.isClient) {
    Accounts.onLogin(function () {
        FlowRouter.go('read-book');

    });

    Accounts.onLogout(function () {
        FlowRouter.go('home');

    });
}


FlowRouter.triggers.enter([function (context, redirect) {
    if (!Meteor.userId()) {
        FlowRouter.go('home');
    }
}]);

FlowRouter.route('/', {
    name: 'home',
    action() {
        if (Meteor.userId()) {
            FlowRouter.go('read-book');
        }
        GAnalytics.pageview();
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/read-book' , {
    name: 'read-book',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', { main: 'Reads' });
    }
});

FlowRouter.route('/read/:id', {
    name: 'read',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', { main: 'RecipeSingle' });
    }
});

FlowRouter.route('/menu', {
    name: 'menu',
    action(){
        BlazeLayout.render('MainLayout', {main: 'Menu'});
    }
});

FlowRouter.route('/reading-list', {
    name: 'reading-list',
    action() {
        BlazeLayout.render('MainLayout', { main: 'ReadingList' });
    }
});