'use strict';

function collect_all_even(collection) {
   var evenarray = [];

    for(var i = 0; i < collection.length; i++){
        if(collection[i] % 2 === 0){
            evenarray.push(collection[i]);
        }
    }
    return evenarray;
}

module.exports = collect_all_even;
