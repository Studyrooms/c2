

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

export default todos;