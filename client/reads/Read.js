Template.Read.helpers({
    updateReadId: function () {
        return this._id;
    },
    readingList: function () {
       return Reads.find({}, { limit: 10 });
    }
});

Template.Read.events({
    'click .toggle-menu': function () {
        Meteor.call('toggleMenuItem', this._id, this.inMenu);
    },

    'click .fa-trash': function(){
      
        Meteor.call('deleteRead', this._id);
    },
    'click .fa-pencil': function () {
      
        Session.set('editMode', !Session.get('editMode'));
    }
});


