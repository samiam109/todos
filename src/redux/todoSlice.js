import { createSlice } from '@reduxjs/toolkit'

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: {
    todos: []
  },
  reducers: {
    add: (state, action) => {
      state.todos = [...state.todos,
      {
        id: state.todos.length + 1 + '',
        value: action.payload.todo,
        complete: false
      }]
    },
    update: (state, action) => {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...action.payload }
        }
        else {
          return { ...todo }
        }
      })
    },
    remove: (state, action) => {
      const todoIndex = state.todos.findIndex(todo => todo.id === action.payload.id)
      if (todoIndex !== -1) state.todos.splice(todoIndex, 1)
    }
  }
})

export const { add, remove, update } = todoListSlice.actions;
export default todoListSlice.reducer