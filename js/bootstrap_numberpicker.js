numberPicker = {
    init:function(){
        this.listenUI();
    },
    listenUI:function(){
        $('#numberpicker-increase-btn').on('click',function(){
            this.increaseNumber($("#numberpicker-input"));
        }.bind(this));

        $('#numberpicker-decrease-btn').on('click',function(){
            this.decreaseNumber($("#numberpicker-input"));
        }.bind(this));
    },
    increaseNumber:function(selector) {
        var value = parseInt(selector.val());
        value += 1;
        selector.val(value);
    },
    decreaseNumber:function(selector){
        var value = parseInt(selector.val());
        if (value > 0) {
            value -= 1;
            selector.val(value);
        }

    }
};
