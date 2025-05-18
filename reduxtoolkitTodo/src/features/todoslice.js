import{createSlice,nanoid} from '@reduxjs/toolkit';

const initialState={
    todos:[{id:1,text:"hello world"}]
}


export const todoSlice =createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={ //this todo is created , to updaate the state
                id:nanoid(),
                text:action.payload //here payload get all objects,email other things
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
             state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updateTodo:(state,action)=>{ //the update 
            state.todos=state.todos.map((todo)=>todo.id===action.payload.id ? { ...todo, text: action.payload.text }: todo)
        }
        
    } //reducers includes prptery and functions

})
export const {addTodo,removeTodo,updateTodo} = todoSlice.actions //this is called by indivially to get used in compoents
export default todoSlice.reducer //this line of code this  whole reducer propites or methods  are listed go get used in store.js