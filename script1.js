Java.perform(function x() { 
        var Test = Java.use("com.eneskayiklik.guessthenumber.viewmodel.GameViewModel");
        Test.getNumber.implementation = function(){
            var ret = this.getNumber();
            console.log(ret);
            return ret;
        }
});
