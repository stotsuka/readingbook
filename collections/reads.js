Reads = new Mongo.Collection('reads');


Reads.allow({
    insert: function (userId, doc) {
        return !!userId;//if user Id exit then you are allwo to sign in
    },
    update: function (userId, doc) {
        return !!userId;
    }
});

Book= new SimpleSchema({
    title: {
        type: String,
        label: "本の題名"
    },
    desc: {
        type: String,
        label: "心に残った事",
        max:1000
    },
    time: {
        type: Number,
        label: "分で [半]数字 を入力（ 例: 32, 16, 5 ）",
        min: 0
    },
    
   
});

ReadSchema = new SimpleSchema({
    createdAt: {
        type: Date,
        label: "日にち(今日の日付を入力)",
        autoValue: function () {
            return new Date()
        }
    },
  
    book:{
        type: [Book],
        label:"題名、読んだ分数、心に残った事を書いてね"
    },
    inMenu:{
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform: {
            type: "hidden"
        }
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function () {
            return this.userId
        },
        autoform: {
            type: "hidden"
        }
    }
});


Meteor.methods({
    toggleMenuItem: function (id, currentState) {
        Reads.update(id, {
            $set: {
                inMenu: !currentState
            }
        });
    },
    deleteRead: function (id) {
        Reads.remove(id);
    }
});
Reads.attachSchema(ReadSchema);
