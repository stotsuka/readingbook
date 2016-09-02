Meteor.publish('reads', function () {
    return Reads.find({author: this.userId})
});

Meteor.publish('singleRecipe', function (id) {
    check(id, String);
    return Reads.find({_id: id })
});