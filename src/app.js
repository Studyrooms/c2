import {createStore} from'redux';
import React,{Component} from'react';
import ReactDom from 'react-dom';

let gid = 0;

const todos = (state = [], action) =>{
    switch(action.type){
        case 'ADD_TODO':
            return [...state, {
                id:++gid,
                text: action.text,
                completed:false,
            }]
            // var newState = [].concat(state)
            // push('freijhfbruei');
        case 'TOGGLE_TODO':
            return state.map((todo) => {
                if(todo.id == action.id){
                    return Object.assign({},todo,{
                        completed: !todo.completed
                    })
                }
                return todo;
            })
        default :
            return state;
    }
}

let store = createStore(todos);


store.dispatch({
    type:'ADD_TODO',
    text:'Mango'
})
console.log(store.getState());

console.log('dispatch TOGGLE_TODO')

store.dispatch({
    type:'TOGGLE_TODO',
    id:1
})

console.log(store.getState());



