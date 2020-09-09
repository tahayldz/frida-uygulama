Java.perform(function x() { 
        var Test = Java.use("androidx.lifecycle.LiveData");   
        Test.getValue.implementation = function(){
            var ret = this.getValue();
            console.log(ret);
            return ret;
        }
});
