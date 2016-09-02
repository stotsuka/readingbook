Template.Menu.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('reads');
    });
});
Template.Menu.helpers({
    reads: () => {
        return Reads.find({inMenu: false});
    }
});
Template.MenuItem.helpers({
   
    dateFormat: function () {
        return moment(this.createdAt).format('MM-DD-YYYY');
   
    }
});