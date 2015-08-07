numberPicker = {
    init:function(){
        numberPicker.listenUI();
    },
    listenUI:function(){
        $('#numberpicker-increase-btn').on('click',function(){
            numberPicker.increaseNumber($("#numberpicker-input"));
        });

        $('#numberpicker-decrease-btn').on('click',function(){
            numberPicker.decreaseNumber($("#numberpicker-input"));
        });
    },
    increaseNumber:function(selector) {
        var value = parseInt(selector.val());
        value += 1;
        selector.val(value);
    },
    decreaseNumber:function(selector){
        var value = parseInt(selector.val());
        value -= 1;
        selector.val(value);
    }
};
