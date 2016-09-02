Template.Reads.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('reads');
    });
});

Template.Reads.helpers({
    reads: ()=> {
        return Reads.find({});
    },

    
    username: function () {
    if (Meteor.user()) {
        return Meteor.user().username;
        //return Meteor.user().emails[0].address;
    }
    else {
        return "a internet user";
    }
}

});

AutoForm.addHooks(['insertReadForm'], {
    onSuccess: function (formType, result) {
        FlashMessages.sendSuccess("入力完了です！やったね！", { autoHide: true, hideDelay: 2000 });

    }
});


