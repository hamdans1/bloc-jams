var pointsArray = document.getElementsByClassName('point');

var specialCallback = function (anything) {
    console.log(anything + "is a point");
};

function forEach(array, callbackArgument){
    for (var i=0; i<array.length; i++){
        specialCallback(point[i]);
    }
}

