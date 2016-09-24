"use strict";

var counter = (state=0, action) =>{
    // if(state === undefined){
    //     state = 0;
    // }
    switch(action.type){
        case 'INCREASE':
            return state+1;
        case 'DECREASE':
            return state-1;
        default:
            return state;
    }
}

console.log(counter(0,{
    type:'DECREASE'
}))


console.log(counter(0,{
    type:'INCREASE'
}))






