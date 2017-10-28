Page({
    data: {
        second: 60,
       selected1:true,
            selected:false,
    },

    getphone: function (e){
        this.setData({
            selected:true,
            selected1:false,
        });
        countdown(this);
    },
    onLoad: function () {

    }
});
function countdown(that) {
    var second = that.data.second;
    if (second == 0) {
        // console.log("Time Out...");
        that.setData({
            selected:false,
            selected1:true,
            second: 60,
        });
        return;
    }
    var time = setTimeout(function () {
            that.setData({
                second: second - 1
            });
            countdown(that);
        }
        , 1000)
}
