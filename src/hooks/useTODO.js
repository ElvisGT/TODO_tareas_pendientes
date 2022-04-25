import {useReducer} from 'react';

const initialState = {
    todo:[]
};



const reduce = (state,action) => {
    switch(action.type){
        case 'ADD':
            return {
                ...state,
                todo:[...state.todo,action.payload]
                       
                    
            }
        case 'REMOVE':
            return {
                ...state,
                todo:state.todo.filter(items => items !== action.payload)
               
            }
        
        default:
            return state
    }
}


const useTODO = () => {
    const [todo,dispatch] = useReducer(reduce,initialState);
    

    const addTodo = (todo) => {
        dispatch({type:'ADD',payload:todo})
    }

    const removeTodo = (todo) => {
        dispatch({type:'REMOVE',payload:todo})

    }

    return {
        todo,
        addTodo,
        removeTodo
    }
}

export {useTODO};