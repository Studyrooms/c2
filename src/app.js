"use strict";

var should = require('should');

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

should(counter(0,{
    type:'DECREASE'
})).be.equal(-1);


counter(0,{
    type:'INCREASE'
}).should.be.equal(1);

counter(undefined,{}).should.be.equal(0);

console.log('pass test');
