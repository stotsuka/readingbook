Template.RecipeSingle.onCreated(function () {
    var self = this;
    self.autorun(function () {
        var id = FlowRouter.getParam('id');
        self.subscribe('singleRecipe', id);
    });
});
Template.RecipeSingle.helpers({
    read: () => {
        var id = FlowRouter.getParam('id');
        return Reads.findOne({_id: id});
    }
});
