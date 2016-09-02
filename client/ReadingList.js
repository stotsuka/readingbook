Template.ReadingList.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('reads');
    });
});


Template.ReadingList.helpers({

    readingList: () => {
        return Reads.find({ inMenu: false });
    },

    totalTime: () => {
        
        var sum = 0;
        var cursor = Reads.find();
        
        cursor.forEach(function(reads){
           // var len = reads.book.length;
            for (i = 0; i < reads.book.length; i++) {
                sum += reads.book[i].time;
            }
        });
        return sum;
    }

});

