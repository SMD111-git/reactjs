import{createSlice,nanoid} from '@reduxjs/toolkit';

const initialState={
    todos:[{id:1,text:"hello world"}]
}


export const todoSlice =createSlice({
    name:'todo',
    initialState,
    reducers:{
        addtodo:(state,action)=>{
            const todo={ //this todo is created , to updaate the state
                id:nanoid(),
                text:action.payload //here payload get all objects,email other things
            }
            state.todos.push(todo)
        },
        removeTodo:()=>{}
    } //reducers includes prptery and functions
})