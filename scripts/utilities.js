function forEach(array, callbackArgument){
    for (var i=0; i<array.length; i++){
        callbackArgument(array[i]);
    }
}

